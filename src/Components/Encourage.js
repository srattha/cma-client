import React, { Component } from "react";
import Fade from "react-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Encourage extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <section id="encourage">
                <Fade duration={1000}>
                    <div className="row">
                        <h3 className="text-center">ข้อพระคัมภีร์หนุนใจ</h3>
                        <div className="separator  small center  "></div>
                        <Slider {...settings} className="text-center">
                            <div >
                                <p>แม้ข้าพระองค์จะเดินไปตามหุบเขาเงามัจจุราช ข้าพระองค์ไม่กลัวอันตรายใดๆ เพราะพระองค์ทรงสถิตกับข้าพระองค์ คทาและธารพระกรของพระองค์เล้าโลมข้าพระองค์ พระ‍องค์​ทรง​เตรียม​สำ‌รับ​ให้​ข้า‍พระ‍องค์ ต่อ‍หน้า​ต่อ‍ตา​ศัตรู​ของ​ข้า‍พระ‍องค์ พระ‍องค์​ทรง​เจิม​ศีรษะ​ข้า‍พระ‍องค์​ด้วย​น้ำ‍มัน ขัน‍น้ำ​ของ​ข้า‍พระ‍องค์​ก็​ล้น​อยู่ แน่​ที‍เดียว​ที่​ความ​ดี​และ​ความ​รัก​มั่น‍คง​จะ​ติด‍ตาม​ข้าพ‌เจ้า​ไป ตลอด​วัน​คืน​ชีวิต​ของ​ข้าพ‌เจ้า และ​ข้าพ‌เจ้า​จะ​อยู่​ใน​พระ‍นิเวศ​ของ​พระ‍เจ้า​สืบ​ไป​เป็น​นิตย์</p>
                                <p>สดุดี - 23:4-6</p>
                            </div>
                            <div>
                                <p>แต่ท่านถูกบาดเจ็บเพราะความทรยศของเราทั้งหลาย ท่านฟกช้ำเพราะความบาปผิดของเรา การตีสอนอันทำให้เราทั้งหลายสมบูรณ์นั้น ตกแก่ท่านที่ท่านต้องฟกช้ำนั้นก็ให้เราหายดี</p>
                                <p>อิสยาห์ - 53:5</p>
                            </div>
                        </Slider>
                    </div>

                </Fade>
            </section>
        );
    }
}

export default Encourage;