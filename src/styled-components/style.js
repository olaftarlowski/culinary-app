import styled from "styled-components";

export const AppContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  background-color: #282c34;
  min-height: 160vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const HeaderWrapper = styled.header`
  background: #f8fafd;
  width: 100%;
  border-bottom: 1px solid #eff2f5;

  position: sticky;
  top: 0;
  right: 0;
  left: 0;

  .header__content {
    height: 100%;
    padding: 0 48px;
    color: #000;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 100;

    .ReactCollapse--collapse {
      transition: height 500ms;
    }

    .logosDIV {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .header__logo {
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: #000;
  }
`;

export const NavbarWrapper = styled.nav`
  background-color: seagreen;
  border: 1px solid white;

  display: flex;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    li {
      a {
        text-transform: capitalize;
        text-decoration: none;
        color: inherit;
        padding: 0.75rem 1.25rem;
        transition: 0.3s ease all;

        &:hover,
        &.active {
          color: #3861fb;
        }
      }
    }
  }
`;

export const MainWrapper = styled.main`
  display: block;
`;

export const FooterWrapper = styled.footer`
  background: #f8fafd;
  border-top: 2px solid #eff2f5;
  padding: 0 48px;
  font-size: 1.4rem;
  color: #777;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 6px;
  }

  .footer__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer__logo-box {
      text-align: center;
      color: #000;
      font-size: 2.5rem;
      font-weight: 700;
    }
    .footer__info {
      display: block;

      .footer__list {
        text-align: center;
        list-style: none;
        padding-inline-start: 0;

        .footer__item {
          display: inline-block;

          &:not(:last-child) {
            margin-right: 1.5rem;
          }

          .footer__link {
            &:link,
            &:visited {
              color: #000;
              text-decoration: none;
              display: inline-block;
              transition: all 0.2s;
            }

            &:hover,
            &:active {
              color: #3861fb;
            }
          }
        }
      }
    }
  }

  .footer__copyright {
    text-align: right;
    font-size: 0.8rem;
    border-top: 1px solid #d5d9dc;
  }
`;
