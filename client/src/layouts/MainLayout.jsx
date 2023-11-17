import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");

  return (
    <div>
      {isLogin || <Navbar />}
      <Outlet />
      {isLogin || <Footer />}
    </div>
  );
};

export default MainLayout;
