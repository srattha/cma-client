import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./Header.css";
function Header() {
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
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
          zIndex: 1,
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
            <Link activeClass="active" smooth spy to="activity">
              กิจกรรม
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              ติดต่อ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
