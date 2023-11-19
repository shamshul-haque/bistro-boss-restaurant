import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const NavbarLG = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(user);

  return (
    <div className="flex justify-between gap-5">
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
      <NavLink to="/" className="">
        <button className="btn">
          <FaShoppingCart />
          <div className="badge badge-secondary">+0</div>
        </button>
      </NavLink>
      {user ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="profile picture" src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>{user?.displayName}</a>
            </li>
            <li>
              <Link
                to="/"
                onClick={handleLogout}
                className="bg-yellow-600 hover:bg-transparent hover:border hover:border-yellow-600 transition-all duration-500 p-2 rounded uppercase text-white"
              >
                Logout
              </Link>
            </li>
          </ul>
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
