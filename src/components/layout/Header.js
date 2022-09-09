import { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import { Collapse } from "react-collapse";

import { Navbar, Logo } from "../";
import useMobile from "../hooks/useMobile";
import { HeaderWrapper } from "../../styled-components/style";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(null);
  const isMobile = useMobile();
  const headerRef = useRef();

  const expandMenuHandler = () => {
    setIsNavExpanded(!isNavExpanded);
    setTimeout(() => {
      setHeaderHeight(headerRef.current.clientHeight);
    }, 1);
  };

  const navbarDesk = <Navbar />;

  const navbarMobile = (
    <Collapse isOpened={isNavExpanded}>
      <Navbar setIsNavExpanded={setIsNavExpanded} />
    </Collapse>
  );

  return (
    <HeaderWrapper ref={headerRef} headerHeight={headerHeight}>
      <div className="header__content">
        <div className="logosDIV">
          <Logo />
          {isMobile && (
            <Hamburger toggled={isNavExpanded} toggle={expandMenuHandler} />
          )}
        </div>
        {isMobile ? navbarMobile : navbarDesk}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
