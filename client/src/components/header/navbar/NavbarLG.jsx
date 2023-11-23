import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useCart from "../../../hooks/useCart";

const NavbarLG = () => {
  const { user, logoutUser } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const { cart, isLoading } = useCart();
  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center">
        <span className="loading loading-bars w-40 py-40"></span>
      </div>
    );
  }

  const handleLogout = async () => {
    logoutUser();
    cart.length = 0;
    const res = await axiosPrivate.post("/users/logout");
    if (res?.data?.success) {
      toast?.success("Logout successful!", {
        position: "top-right",
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex items-center justify-between gap-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-600 border-yellow-600 border-b py-1 " : "py-1"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/our-menu"
        className={({ isActive }) =>
          isActive ? "text-yellow-600 border-yellow-600 border-b py-1 " : "py-1"
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to="/our-shop/salad"
        className={({ isActive }) =>
          isActive ? "text-yellow-600 border-yellow-600 border-b py-1 " : "py-1"
        }
      >
        Our Shop
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          isActive ? "text-yellow-600 border-yellow-600 border-b py-1 " : "py-1"
        }
      >
        Contact Us
      </NavLink>
      <Link to="/dashboard/my-cart" className="relative">
        <FaShoppingCart className="text-2xl" />
        <p className="absolute -top-2 -right-2 bg-yellow-600 text-xs rounded-full px-1">
          {cart?.length}
        </p>
      </Link>
      {user ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-circle avatar">
            <img
              alt="profile picture"
              src={user?.photoURL}
              className="rounded-full"
            />
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-50 p-5 shadow menu-sm dropdown-content bg-black rounded-box w-52 flex flex-col"
          >
            <h1 className="font-bold text-center mb-3">{user?.displayName}</h1>
            <Link to="/dashboard/user-home">Dashboard</Link>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-yellow-600 hover:bg-transparent hover:border hover:border-yellow-600 transition-all duration-500 p-2 rounded uppercase text-white"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default NavbarLG;
