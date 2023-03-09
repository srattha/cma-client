import React, { Component } from "react";
import "./Encourage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Encourage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="pd-top-150">
      <h3 className="text-center">ข้อพระคัมภีร์หนุนใจ</h3>

      <div className="separator center"></div>
      <Slider {...settings} className="text-center">
        <div className="pd-50">
          <h5>
            แม้ข้าพระองค์จะเดินไปตามหุบเขาเงามัจจุราช
            ข้าพระองค์ไม่กลัวอันตรายใดๆ เพราะพระองค์ทรงสถิตกับข้าพระองค์
            คทาและธารพระกรของพระองค์เล้าโลมข้าพระองค์
            พระ‍องค์​ทรง​เตรียม​สำ‌รับ​ให้​ข้า‍พระ‍องค์
            ต่อ‍หน้า​ต่อ‍ตา​ศัตรู​ของ​ข้า‍พระ‍องค์
            พระ‍องค์​ทรง​เจิม​ศีรษะ​ข้า‍พระ‍องค์​ด้วย​น้ำ‍มัน
            ขัน‍น้ำ​ของ​ข้า‍พระ‍องค์​ก็​ล้น​อยู่
            แน่​ที‍เดียว​ที่​ความ​ดี​และ​ความ​รัก​มั่น‍คง​จะ​ติด‍ตาม​ข้าพ‌เจ้า​ไป
            ตลอด​วัน​คืน​ชีวิต​ของ​ข้าพ‌เจ้า
            และ​ข้าพ‌เจ้า​จะ​อยู่​ใน​พระ‍นิเวศ​ของ​พระ‍เจ้า​สืบ​ไป​เป็น​นิตย์
          </h5>
          <h5>สดุดี - 23:4-6</h5>
        </div>
        <div className="pd-50">
          <h5>
            แต่ท่านถูกบาดเจ็บเพราะความทรยศของเราทั้งหลาย
            ท่านฟกช้ำเพราะความบาปผิดของเรา
            การตีสอนอันทำให้เราทั้งหลายสมบูรณ์นั้น
            ตกแก่ท่านที่ท่านต้องฟกช้ำนั้นก็ให้เราหายดี
          </h5>
          <h5>อิสยาห์ - 53:5</h5>
        </div>
      </Slider>
    </div>
  );
}
