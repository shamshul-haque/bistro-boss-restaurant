import { NavLink } from "react-router-dom";

const NavbarLG = () => {
  return (
    <div className="flex justify-between gap-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-600 active border-yellow-600 border-b py-1 "
            : "py-1"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/our-menus"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-600 active border-yellow-600 border-b py-1 "
            : "py-1"
        }
      >
        Our Menu
      </NavLink>
    </div>
  );
};

export default NavbarLG;