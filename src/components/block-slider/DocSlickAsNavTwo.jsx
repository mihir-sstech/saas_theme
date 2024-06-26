import React, { useState } from "react";
import Slider from "react-slick";
import createTask from "../../assets/images/icon/81.svg"
import banner3 from "../../assets/images/assets/Banner-1160X700.png"
import shape152 from "../../assets/images/shape/152.svg"
import shape153 from "../../assets/images/shape/153.png"

export default function DocSlickAsNavTwo() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  var settings = {
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider
        {...settings}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slick-nav-custom "
      >
        <div className="d-flex item_content">
          <div className="icon d-flex align-items-center justify-content-center">
            <img src={createTask} alt="icon" />
          </div>
          <p>
            Create task for any <br />
            team person
          </p>
        </div>
        {/* /.d-flex */}
        <div className="d-flex item_content">
          <div className="icon d-flex align-items-center justify-content-center">
            <img src={createTask} alt="icon" />
          </div>
          <p>
            Make timeframe for <br />
            do the task
          </p>
        </div>
        {/* /.d-flex */}
        <div className="d-flex item_content">
          <div className="icon d-flex align-items-center justify-content-center">
            <img src={createTask} alt="icon" />
          </div>
          <p>
            Get task complated by <br />
            your member
          </p>
        </div>
        {/* /.d-flex */}
      </Slider>
      {/* Bottom text slide */}

      <div className="position-relative">
        <Slider
          className="slick-nav-none carousel-inner"
          asNavFor={nav2}
          fade={true}
          speed={600}
          ref={(slider1) => setNav1(slider1)}
        >
          <div className="carousel-item">
            <img src={banner3} alt="feature" />
          </div>
          <div className="carousel-item">
            <img  src={banner3} alt="feature" />
          </div>
          <div className="carousel-item">
            <img  src={banner3} alt="feature" /> 
          </div>
        </Slider>
        {/* Top Image slide */}
        {/* <img
          src={shape152}
          alt="shape"
          className="shapes shape-one"
        /> */}
        <img
          src={shape153}
          alt="shape"
          className="shapes shape-two"
        />
      </div>
    </>
  );
}
