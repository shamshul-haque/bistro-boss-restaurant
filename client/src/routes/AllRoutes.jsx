import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Cart from "../pages/cart/Cart";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import UserHome from "../pages/home/UserHome";
import OurMenu from "../pages/menu/OurMenu";
import OurShop from "../pages/shop/OurShop";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  // normal routes
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "our-menu",
        element: <OurMenu />,
      },
      {
        path: "our-shop/:category",
        element: <OurShop />,
      },
      {
        path: "contact-us",
        element: (
          <PrivateRoutes>
            <Contact />
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // dashboard routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      // normal user routes
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "my-cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
