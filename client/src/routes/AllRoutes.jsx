import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import MainLayout from "../layouts/MainLayout";
import AddItems from "../pages/addItems/AddItems";
import AllUsers from "../pages/allUsers/AllUsers";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Cart from "../pages/cart/Cart";
import Contact from "../pages/contact/Contact";
import AdminHome from "../pages/home/AdminHome";
import Home from "../pages/home/Home";
import UserHome from "../pages/home/UserHome";
import ManageItems from "../pages/manageItems/ManageItems";
import OurMenu from "../pages/menu/OurMenu";
import Payments from "../pages/payments/Payments";
import PaymentsHistory from "../pages/payments/PaymentsHistory";
import OurShop from "../pages/shop/OurShop";
import UpdateItems from "../pages/uppdateItems/UpdateItems";
import AdminRoutes from "./AdminRoutes";
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
      // user dashboard
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "payment-history",
        element: <PaymentsHistory />,
      },
      {
        path: "my-cart",
        element: <Cart />,
      },

      // admin dashboard
      {
        path: "admin-home",
        element: (
          <AdminRoutes>
            <AdminHome />
          </AdminRoutes>
        ),
      },
      {
        path: "add-items",
        element: (
          <AdminRoutes>
            <AddItems />
          </AdminRoutes>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoutes>
            <ManageItems />
          </AdminRoutes>
        ),
      },
      {
        path: "update-items/:id",
        element: (
          <AdminRoutes>
            <UpdateItems />
          </AdminRoutes>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
