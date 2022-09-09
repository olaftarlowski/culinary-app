import { Link } from "react-router-dom";
import { logoImg } from "../assets";

import { LogoWrapper } from "../styled-components/style";

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/" className="main-logo">
        <img
          src={logoImg}
          alt="Niebieskie logo z napisem Kuchnia Marysi i ikoną rogalika"
        />
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
