import { Link } from "react-router-dom";
import { Navbar } from "../";
import { HeaderWrapper } from "../../styled-components/style";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header__content">
        <Link to="/" className="header__logo">
          Logo
        </Link>
        <Navbar />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
