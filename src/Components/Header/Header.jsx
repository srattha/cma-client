import * as React from "react";
import ParticlesBg from "particles-bg";

import "./Header.css";

const fadeDuration = 10;
function Header() {
  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              หน้าแรก
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#encourage">
              ข้อพระคัมภีร์หนุนใจ
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#activity">
              กิจกรรม
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">CMA ยินดีต้อนรับทุกท่าน</h1>

          <h3>
            คำทักทาย สวัสดีครับ ธรรมิกชน ของพระเจ้าทุกท่าน ขอให้พระคุณ
            และความเข้าใจ ในน้ำพระทัยของพระองค์ ผ่านความรู้การสำแดง
            จากพระคำของพระองค์ทำให้ท่านเติบโต สู่ความไพบูลย์ในองค์พระเยซูคริสต์
            <p>อฟ.4 : 11-13</p>
          </h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
