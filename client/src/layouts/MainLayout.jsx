import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const authPath =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div>
      {authPath || <Navbar />}
      <Outlet />
      {authPath || <Footer />}
    </div>
  );
};

export default MainLayout;
