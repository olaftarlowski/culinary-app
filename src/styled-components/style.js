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
  border: 1px solid #d2d2d2;

  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10000;

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
      position: absolute;
      top: ${(props) => props.headerHeight + 1}px;
      right: 0;
      transition: height 500ms;
    }

    .logosDIV {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      padding: 0 12px;
      flex-direction: column;
    }
  }
`;

export const NavbarWrapper = styled.nav`
  width: 100%;
  background-color: #f8fafd;
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    margin: 0;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    li {
      padding: 0 12px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 100%;

      @media (max-width: 768px) {
        display: block;
      }

      a {
        min-width: 120px;
        white-space: nowrap;
        display: block;
        text-transform: capitalize;
        text-decoration: none;
        color: inherit;
        padding: 0.75rem 1.25rem;
        transition: 0.3s ease all;
        border-bottom: 1px solid #d2d2d2;

        @media (max-width: 768px) {
          font-size: 1.5rem;
          padding: 0.5rem 2rem;
        }

        @media (max-width: 265px) {
          font-size: 1.3rem;
          padding: 0.5rem 1rem;
        }

        &:hover,
        &.active {
          color: #3861fb;
          border-bottom: 1px solid #3861fb;
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

  @media (max-width: 768px) {
    padding: 0 12px;
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

  .footer__creator {
    text-align: right;
    font-size: 0.8rem;
    margin-bottom: 8px;

    address {
      a {
        text-decoration: none;
        color: #333;
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  display: block;
  max-width: 120px;
  max-height: 120px;

  .main-logo {
    width: 100%;
    height: 100%;
    display: inline-block;

    img {
      width: 100%;
      height: auto;
    }
  }
`;
