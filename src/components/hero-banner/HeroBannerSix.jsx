import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { openImageInNewTab } from "../../utils/helper";
import apple from "../../assets/images/icon/apple.svg"
import playCircle from "../../assets/images/icon/play-circle.svg"
import playStore from "../../assets/images/icon/playstore.svg"

const HeroBannerSix = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <h1
            className="font-recoleta hero-heading"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Build your <span>Product</span> with Driver007.
          </h1>
          <p
            className="hero-sub-heading"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            Driver007 delivered blazing fast, striking soludtion
          </p>
          <div className="d-sm-flex align-items-center button-group">
            <div
              className="d-flex align-items-center video-button fancybox order-sm-last"
              onClick={() => setOpen(true)}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <img
                src={playCircle}
                alt="icon"
                className="icon"
              />
              <span>See Intro Video</span>
            </div>
            <div
              // href="https://apps.apple.com/in/app/driver007/id1470026880"
              onClick={()=>{openImageInNewTab("https://apps.apple.com/in/app/driver007/id1470026880")}}
              className="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one order-sm-first"
              style={{cursor:"pointer"}}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <img src={apple} alt="icon" className="icon" />
              <div>
                <span>Download on the</span>
                <strong>App store</strong>
              </div>
            </div>
          <div
                onClick={()=>{openImageInNewTab("https://play.google.com/store/apps/details?id=com.sstech.driver007")}}
                className="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one "
                style={{cursor:"pointer"}}
                data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              >
                <img src={playStore} alt="icon" className="icon" />
                <div>
                  <span>Download on the</span>
                  <strong>Play store</strong>
                </div>
              </div>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="w2RGv0-mPy0"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default HeroBannerSix;