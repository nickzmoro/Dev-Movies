import { HeaderBox, NavList, List, MobileMenu } from "./styles.js";
import { HiUser, HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { TbMovie } from "react-icons/tb";
import { BiSolidCameraMovie } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";

export function Header() {
  const { pathname } = useLocation();
  const [changeBackground, setChangeBackground] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 80) {
      setChangeBackground(true);
    } else {
      setChangeBackground(false);
    }
  };

  return (
    <HeaderBox changeBackground={changeBackground}>
      <h2>
        Dev<span>flix</span>
      </h2>
      <NavList>
        <ul>
          <List isActive={pathname === "/"}>
            <Link to="/">Home</Link>
          </List>
          <List isActive={pathname.includes("filmes")}>
            <Link to="/filmes">Filmes</Link>
          </List>
          <List isActive={pathname.includes("series")}>
            <Link to="/series">Séries</Link>
          </List>
        </ul>
        <button id="login">
          <div className="container-icon">
            <HiUser className="icon" />
          </div>
          <div className="login-txt">
            <p>Faça Login</p>
            <span>ou cadastre-se</span>
          </div>
        </button>
      </NavList>
      <MobileMenu>
        <button
          className="btn-menu-open"
          onClick={() => setShowMobileMenu(true)}
        >
          <HiOutlineMenuAlt3 size={30} />
        </button>
        {showMobileMenu && (
          <div className="menu-mobile-container">
            <div>
              <button
                className="btn-menu-close"
                onClick={() => setShowMobileMenu(false)}
              >
                <IoClose size={30} />
              </button>
            </div>
            <nav className="menu-mobile-links">
              <ul>
                <li>
                  <Link to="/" onClick={() => setShowMobileMenu(false)}>
                    <IoHomeSharp /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/filmes" onClick={() => setShowMobileMenu(false)}>
                    <TbMovie /> Filmes
                  </Link>
                </li>
                <li>
                  <Link to="/series" onClick={() => setShowMobileMenu(false)}>
                    <BiSolidCameraMovie />
                    Séries
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </MobileMenu>
    </HeaderBox>
  );
}
