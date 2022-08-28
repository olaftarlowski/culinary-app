import { NavLink } from "react-router-dom";
import { NavbarWrapper } from "../styled-components/style";

const Navbar = ({ setIsNavExpanded }) => {
  const activeClassName = "active";

  const navbarItems = [
    { name: "główna", to: "/" },
    { name: "o nas", to: "/about" },
    { name: "kontakt", to: "/api" },
  ];

  return (
    <NavbarWrapper>
      <ul>
        {navbarItems.map((item) => {
          return (
            <li
              key={`navbar-${item.name}`}
              onClick={() => setIsNavExpanded((e) => !e)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
