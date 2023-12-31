const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.Stripe_Secret_Key);
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "api",
  key: process.env.Mailgun_Api_Key,
});
const app = express();
const port = process.env.PORT || 5000;

// parsers
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      // "https://bistro-boss-c0ee3.web.app",
      // "https://bistro-boss-c0ee3.firebaseapp.com",
    ],
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

// db collections
const menuCollection = client.db("bistroDB").collection("menus");
const reviewCollection = client.db("bistroDB").collection("reviews");
const userCollection = client.db("bistroDB").collection("users");
const cartCollection = client.db("bistroDB").collection("carts");
const paymentCollection = client.db("bistroDB").collection("payments");

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

const verifyAdmin = async (req, res, next) => {
  const decodedUser = req.user;
  const query = { email: decodedUser.email };
  const user = await userCollection.findOne(query);
  const isAdmin = user.role === "admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "Forbidden Access" });
  }
  next();
};

async function run() {
  try {
    // await client.connect();

    // add new menu by verified admin
    app.post("/api/v1/menus", verifyToken, verifyAdmin, async (req, res) => {
      const item = req.body;
      const result = await menuCollection.insertOne(item);
      res.send(result);
    });

    // get all menus
    app.get("/api/v1/menus", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });

    // get specific menu by verified admin
    app.get("/api/v1/menus/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await menuCollection.findOne(query);
      res.send(result);
    });

    // update specific menu by verified admin
    app.patch(
      "/api/v1/menus/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const id = req.params.id;
        console.log(id);
        const item = req.body;
        const filter = { _id: new ObjectId(id) };
        const updatedDoc = {
          $set: {
            name: item.name,
            recipe: item.recipe,
            image: item.image,
            category: item.category,
            price: item.price,
          },
        };
        const result = await menuCollection.updateOne(filter, updatedDoc);
        res.send(result);
      }
    );

    // delete specific menu by verified admin
    app.delete(
      "/api/v1/menus/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await menuCollection.deleteOne(query);
        res.send(result);
      }
    );

    // get all reviews
    app.get("/api/v1/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });

    // add new users
    app.post("/api/v1/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const isExistUser = await userCollection.findOne(query);
      if (isExistUser) {
        return res.send({ message: "User already exits", insertedId: null });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // get all user by verified admin
    app.get("/api/v1/users", verifyToken, verifyAdmin, async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    // get specific user by checking who is normal user or an admin
    app.get("/api/v1/users/admin", verifyToken, async (req, res) => {
      const queryEmail = req.query.email;
      const tokenEmail = req.user.email;

      if (queryEmail !== tokenEmail) {
        return res.status(403).send({ message: "Forbidden Access" });
      }

      let query = {};
      if (queryEmail) {
        query.email = queryEmail;
      }
      const user = await userCollection.findOne(query);

      let admin = false;
      if (user) {
        admin = user.role == "admin";
      }

      res.send({ admin });
    });

    // get admin states by verified admin
    app.get(
      "/api/v1/users/admin-stats",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const users = await userCollection.estimatedDocumentCount();
        const menus = await menuCollection.estimatedDocumentCount();
        const orders = await paymentCollection.estimatedDocumentCount();
        const result = await paymentCollection
          .aggregate([
            {
              $group: {
                _id: null,
                totalRevenue: {
                  $sum: "$price",
                },
              },
            },
          ])
          .toArray();
        const revenue = result.length > 0 ? result[0].totalRevenue : 0;
        res.send({
          users,
          menus,
          orders,
          revenue,
        });
      }
    );

    // make an user admin by existing verified admin
    app.patch(
      "/api/v1/users/admin/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const updatedDoc = {
          $set: {
            role: "admin",
          },
        };
        const result = await userCollection.updateOne(filter, updatedDoc);
        res.send(result);
      }
    );

    // delete an user by verified admin
    app.delete(
      "/api/v1/users/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await userCollection.deleteOne(query);
        res.send(result);
      }
    );

    // create access token of an user
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

    // clear token when user logged out
    app.post("/api/v1/users/logout", async (req, res) => {
      res
        .clearCookie("token", {
          maxAge: 0,
        })
        .send({ success: true });
    });

    // add item to cart by verified user
    app.post("/api/v1/users/cartItems", verifyToken, async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    });

    // get all items from cart
    app.get("/api/v1/users/cartItems", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    // delete specific item by verified user
    app.delete("/api/v1/users/cartItems/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    app.post("/api/v1/users/payment-intent", verifyToken, async (req, res) => {
      const { price } = req.body;
      const amount = parseInt(price * 100);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    app.post("/api/v1/users/payment-history", async (req, res) => {
      const payment = req.body;
      const paymentResult = await paymentCollection.insertOne(payment);
      const query = {
        _id: {
          $in: payment.cartIds.map((id) => new ObjectId(id)),
        },
      };
      const cartResult = await cartCollection.deleteMany(query);

      mg.messages
        .create(process.env.Mailgun_Sending_Domain, {
          from: "Mailgun Sandbox <postmaster@sandbox110fb794d5134ed9a17862d9c1f0a6d6.mailgun.org>",
          to: ["shamshul.haque.dev@gmail.com"],
          subject: "Bistro Boss Ordered Confirmed",
          text: "Testing some Mailgun awesomness!",
          html: `
          <div>
            <h2>Thank you for your order!</h2>
            <p>Your Transaction Id: <strong>${payment.transactionId}</strong></p>
          </div>`,
        })
        .then((msg) => console.log(msg))
        .catch((err) => console.log(err));

      res.send({ paymentResult, cartResult });
    });

    app.get(
      "/api/v1/users/payment-history/:email",
      verifyToken,
      async (req, res) => {
        const query = { email: req.params.email };

        if (req.params.email !== req.user.email) {
          return res.status(403).send({ message: "forbidden access" });
        }
        const result = await paymentCollection.find(query).toArray();
        res.send(result);
      }
    );

    // confirm server connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
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
