import styled from "styled-components";

export const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 0 100px;
  justify-content: space-between;
  transition: 0.2s ease;
  background-color: ${(props) =>
    props.changeBackground ? "#000" : "transparent"};
  border-bottom: ${(props) =>
    props.changeBackground ? "1px solid rgba(256, 256, 256, 0.1)" : "none"};

  @media (max-width: 845px) {
    padding: 0 2.5rem;
  }

  & h2 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2.2rem;

    span {
      color: red;
    }
  }
`;

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 845px) {
    display: none;
  }

  ul {
    display: flex;
    gap: 40px;
    margin-right: 20px;
  }

  #login {
    display: flex;
    background-color: #ff0000;
    border: none;
    border-radius: 15px;
    padding: 8px 12px;
    cursor: pointer;
    gap: 8px;
    align-items: center;
    border: 1px solid #ff0000;
    transition: 0.1s ease;

    &:hover {
      filter: saturate(75%);
      border: 1px solid rgba(256, 256, 256, 0.2);
    }

    .container-icon {
      padding: 8px 8px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 50px;
      display: flex;
      align-items: center;
    }

    .login-txt {
      p {
        font-size: 1.1rem;
        font-weight: 600;
        text-align: start;
      }

      span {
        font-size: 0.9rem;
        color: rgba(256, 256, 256, 0.6);
      }
    }
  }
`;

export const List = styled.li`
  position: relative;

  &::after {
    content: " ";
    height: 2px;
    width: ${(props) => (props.isActive ? "100%" : 0)};
    background-color: #ff0000;
    position: absolute;
    bottom: -5px;
    left: 0;
    border-radius: 50px;
    transition: 0.2s ease;
  }

  &:hover::after {
    width: 100%;
    left: 1;
  }

  a {
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 5px;
    transition: 0.2s ease;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 845px) {
    display: block;
  }

  .line-menu {
    width: 30px;
    height: 2px;
    background-color: #fff;
    margin: 3px 0;
  }

  .btn-menu-open {
    display: none;
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: 845px) {
      display: block;
    }
  }

  .menu-mobile-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);

    .btn-menu-close {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: transparent;
      border: none;
      display: flex;
      border-radius: 5px;
      transition: 0.2s ease;

      &:hover {
        background-color: rgb(256, 0, 0);
      }
    }

    .menu-mobile-links {
      padding: 6rem 3rem;
      height: 100%;

      ul {
        display: flex;
        flex-direction: column;
        gap: 3px;

        li {
          padding: 1rem 1rem;
          border-radius: 12px;
          transition: 0.2s ease;

          &:hover {
            background-color: rgba(256, 0, 0, 0.3);
          }

          a {
            cursor: pointer;
            color: rgba(256, 256, 256, 0.9);
            font-size: 1.1rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 8px;
            width: 100%;

            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
`;
