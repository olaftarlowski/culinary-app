import { NavLink } from "react-router-dom";
import { NavbarWrapper } from "../styled-components/style";

const Navbar = () => {
  const activeClassName = "active";
  return (
    <NavbarWrapper>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/api"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Api
          </NavLink>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
