import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../";
import { Collapse } from "react-collapse";
import useMobile from "../hooks/useMobile";
import { HeaderWrapper } from "../../styled-components/style";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const isMobile = useMobile();

  console.log(window.innerWidth);

  const klik = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const navbarDesk = <Navbar />;

  const navbarMobile = (
    <Collapse isOpened={isNavExpanded}>
      <Navbar setIsNavExpanded={setIsNavExpanded} />
    </Collapse>
  );

  return (
    <HeaderWrapper>
      <div className="header__content">
        <div className="logosDIV">
          <Link to="/" className="header__logo">
            Logo
          </Link>
          {isMobile && <button onClick={klik}>TEST</button>}
        </div>
        {isMobile ? navbarMobile : navbarDesk}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
