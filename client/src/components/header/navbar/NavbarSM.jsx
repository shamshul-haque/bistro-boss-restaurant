import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const NavbarSM = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center gap-3">
      <Link to="/" className="relative">
        <FaShoppingCart className="text-2xl" />
        <p className="absolute -top-2 -right-2 bg-yellow-600 text-xs rounded-full px-1">
          9+
        </p>
      </Link>
      <div className="dropdown dropdown-end z-50">
        <label tabIndex={0} className="btn m-1">
          <AiOutlineMenu className="text-xl" />
        </label>
        <div
          tabIndex={0}
          className="dropdown-content p-5 shadow bg-black rounded-box w-52"
        >
          <div className="flex flex-col">
            {user && (
              <div className="text-center">
                <img
                  alt="profile picture"
                  src={user?.photoURL}
                  className="w-10 rounded-full mx-auto"
                />
                <h1 className="font-bold">{user?.displayName}</h1>
              </div>
            )}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 active border-yellow-600 py-1 "
                  : "py-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/our-menu"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 active border-yellow-600 py-1 "
                  : "py-1"
              }
            >
              Our Menu
            </NavLink>
            <NavLink
              to="/our-shop/salad"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 active border-yellow-600 py-1 "
                  : "py-1"
              }
            >
              Our Shop
            </NavLink>
            {user ? (
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-600 active border-yellow-600 py-1 "
                    : "py-1"
                }
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSM;
