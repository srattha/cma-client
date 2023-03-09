import React, { Component } from "react";
import "./Activity.css";
import Zmage from "react-zmage";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
class Activity extends Component {
  render() {
    const img = "/public/images/logo.png";
    const images = [
      {
        original: "/src/assets/images/bg.jpg",
        thumbnail: "/src/assets/images/bg.jpg",
      },
      {
        original: "/src/assets/images/bg.jpg",
        thumbnail: "/src/assets/images/bg.jpg",
      },
    ];
    return (
      <div className="pd-top-150">
        <div>
          <h3 className="text-center">กิจกรรมคริสตจักร</h3>
          <div className="separator  small center  "></div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <h4>โปรแกรมคริสตจักร</h4>
              <div className="row justify-content-center">
                <div className="card">
                  <h4>วันอาทิตย์</h4>
                  <p>เวลา 08.00-12.00 น.</p>
                </div>

                <div className="card">
                  <h4>ประกาศ</h4>
                  <p>เวลา 10.00-12.00 น.</p>
                </div>
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <h4 className="mg-b-30">รูป กิจกรรมคริสตจักร</h4>
              <ImageGallery items={images} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
