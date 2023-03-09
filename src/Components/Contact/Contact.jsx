import * as React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Surkhet, NP12</div>
            <div className="text-two">Birendranagar 06</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+0098 9893 5647</div>
            <div className="text-two">+0096 3434 5678</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">codinglab@gmail.com</div>
            <div className="text-two">info.codinglab@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">กรอกข้อมูลเพื่อทำการติดต่อ</div>
          <div className="input-box">
            <input type="text" placeholder="ชื่อ" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="นามสกุล" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="อีเมล์" />
          </div>
          <div>
            <textarea rows="10" placeholder="ข้อความ"></textarea>
          </div>

          <div className="button">
            <input type="button" value="ส่ง" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
