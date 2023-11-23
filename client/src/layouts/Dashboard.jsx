import { AiOutlineMenu } from "react-icons/ai";
import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdEmail, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const { isAdmin } = useAdmin();

  return (
    <div className="flex">
      <div className="w-60 min-h-screen bg-yellow-600 p-7 space-y-4">
        {isAdmin ? (
          <>
            <NavLink
              to="/dashboard/admin-home"
              className={({ isActive }) =>
                `flex items-center gap-2 uppercase ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              <FaHome className="text-xl" />
              Admin Home
            </NavLink>
            <NavLink
              to="/dashboard/add-items"
              className={({ isActive }) =>
                `flex items-center gap-2 uppercase ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              <ImSpoonKnife className="text-xl" />
              Add Items
            </NavLink>
            <NavLink
              to="/dashboard/manage-items"
              className={({ isActive }) =>
                `flex items-center gap-2 uppercase ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              <FaList className="text-xl" />
              Manage Items
            </NavLink>
            <NavLink
              to="/dashboard/manage-bookings"
              className={({ isActive }) =>
                `flex items-center gap-2 uppercase ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              <FaBook className="text-xl" />
              Manage Bookings
            </NavLink>
            <NavLink
              to="/dashboard/all-users"
              className={({ isActive }) =>
                `flex items-center gap-2 uppercase ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              <FaUsers className="text-xl" />
              All Users
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/dashboard/user-home"
              className={({ isActive }) =>
                `flex items-center gap-2 uppercase ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              <FaHome className="text-xl" />
              User Home
            </NavLink>
            <NavLink
              to="/dashboard/reservation"
              className={({ isActive }) =>
                `flex items-center gap-2 uppercase ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              <FaCalendarAlt className="text-xl" />
              Reservation
            </NavLink>
            <NavLink
              to="/dashboard/payment-history"
              className={({ isActive }) =>
                `flex items-center gap-2 uppercase ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              <FaWallet className="text-xl" />
              Payment History
            </NavLink>
            <NavLink
              to="/dashboard/my-cart"
              className={({ isActive }) =>
                `flex items-center gap-2 uppercase ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              <FaShoppingCart className="text-xl" />
              My Cart
            </NavLink>
            <NavLink
              to="/dashboard/add-review"
              className={({ isActive }) =>
                `flex items-center gap-2 uppercase ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              <MdReviews className="text-xl" />
              Add Review
            </NavLink>
            <NavLink
              to="/dashboard/my-booking"
              className={({ isActive }) =>
                `flex items-center gap-2 uppercase ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              <FaList className="text-xl" />
              My Booking
            </NavLink>
          </>
        )}

        <div className="border-t border-white"></div>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 uppercase ${isActive ? "text-white" : ""}`
          }
        >
          <FaHome className="text-xl" />
          Home
        </NavLink>
        <NavLink
          to="/our-menu"
          className={({ isActive }) =>
            `flex items-center gap-2 uppercase ${isActive ? "text-white" : ""}`
          }
        >
          <AiOutlineMenu className="text-xl" />
          Menu
        </NavLink>
        <NavLink
          to="/our-shop/salad"
          className={({ isActive }) =>
            `flex items-center gap-2 uppercase ${isActive ? "text-white" : ""}`
          }
        >
          <FaShoppingBag className="text-xl" />
          Shop
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `flex items-center gap-2 uppercase ${isActive ? "text-white" : ""}`
          }
        >
          <MdEmail className="text-xl" />
          Contact
        </NavLink>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
