import { Link } from "react-router-dom";

import { FooterWrapper } from "../../styled-components/style";

const Footer = () => {
  return (
    <FooterWrapper className="footer">
      <div className="footer__container">
        <div className="footer__logo-box">Logo</div>
        <div className="footer__info">
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__link" to="/about">
                O nas
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright &copy; by Olaf Tarłowski</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
