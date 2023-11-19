// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import router from "./routes/AllRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthProvider>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
    <ToastContainer />
  </AuthProvider>
  // </React.StrictMode>
);
