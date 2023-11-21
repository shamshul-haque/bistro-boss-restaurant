const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;

// parsers
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// connecting uri
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.gwehrjf.mongodb.net/?retryWrites=true&w=majority`;

// db connection
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// middleware to verify token
const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized Access" });
  }

  jwt.verify(token, process.env.Secret_Token, (err, decode) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized Access" });
    }
    req.user = decode;
    next();
  });
};

async function run() {
  try {
    // await client.connect();

    // db collections
    const menuCollection = client.db("bistroDB").collection("menus");
    const reviewCollection = client.db("bistroDB").collection("reviews");

    app.post("/api/v1/users/access-token", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.Secret_Token, {
        expiresIn: "3hr",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send({ success: true });
    });

    app.post("/api/v1/users/logout", async (req, res) => {
      res
        .clearCookie("token", {
          maxAge: 0,
        })
        .send({ success: true });
    });

    app.get("/api/v1/menus", async (req, res) => {
      const cursor = menuCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/api/v1/reviews", async (req, res) => {
      const cursor = reviewCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // confirm server connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Bistro boss server is running...");
});

app.listen(port, () => {
  console.log(`Bistro boss server is running on port: ${port}`);
});
