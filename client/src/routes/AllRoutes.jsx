import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import OurMenu from "../pages/OurMenu/OurMenu";
import Home from "../pages/home/Home";

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
    ],
  },
]);

export default router;
