import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  background-color: seagreen;
  border: 1px solid white;

  display: flex;
  align-items: center;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    li {
      a {
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
    padding: 0 24px;
    color: #000;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 100;
  }
  .header__logo {
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: #000;
  }
`;
