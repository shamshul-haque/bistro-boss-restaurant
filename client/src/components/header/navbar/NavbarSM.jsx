import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NavbarSM = () => {
  return (
    <div className="dropdown dropdown-end z-50">
      <label tabIndex={0} className="btn m-1">
        <AiOutlineMenu className="text-xl" />
      </label>
      <div
        tabIndex={0}
        className="dropdown-content p-5 w-40 shadow bg-black bg-opacity-50 rounded-box"
      >
        <div className="flex flex-col">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-600 active border-yellow-600 border-b py-1 "
                : "font-medium py-1"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/our-menu"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-600 active border-yellow-600 border-b py-1 "
                : "font-medium py-1"
            }
          >
            Our Menu
          </NavLink>
          <NavLink
            to="/our-shop/salad"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-600 active border-yellow-600 border-b py-1 "
                : "py-1"
            }
          >
            Our Shop
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavbarSM;
