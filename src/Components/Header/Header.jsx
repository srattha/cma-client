import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./Header.css";
function Header() {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <header className="nav">
      <nav
        className="nav__container__actions"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <ul>
          <li>
            <Link activeClass="active" smooth spy to="home">
              หน้าแรก
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="encourage">
              ข้อพระคัมภีร์หนุนใจ
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="blog">
              กิจกรรม
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
