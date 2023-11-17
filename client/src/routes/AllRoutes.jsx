import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/authentication/Login";
import Home from "../pages/home/Home";
import OurMenu from "../pages/menu/OurMenu";
import OurShop from "../pages/shop/OurShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/our-shop/:category",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
