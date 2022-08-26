import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../";
import { Collapse } from "react-collapse";
import useMobile from "../hooks/useMobile";
import { HeaderWrapper } from "../../styled-components/style";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(null);
  const isMobile = useMobile();
  const headerRef = useRef();

  useEffect(() => {
    
  }, []);

  const klik = () => {
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
