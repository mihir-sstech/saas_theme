import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../assets/images/assets/Product-01-400X540.png"
import product2 from "../../assets/images/assets/Product-02-400X540.png"
import product3 from "../../assets/images/assets/Product-03-400X540.png"
import product4 from "../../assets/images/assets/Product-04-400X540.png"

const PortfolioImages = [
  {
    img:product1,
    altName: "Screen 1",
  },
  {
    img: product2,
    altName: "Screen 2",
  },
  {
    img:product3,
    altName: "Screen 3",
  },
  {
    img: product4,
    altName: "Screen 4",
  },
  {
    img: product1,
    altName: "Screen 5",
  },
  {
    img:product2,
    altName: "Screen 6",
  },
  {
    img: product3,
    altName: "Screen 7",
  },
];

const Portfolio = () => {
  const settings = {
    dots: false,
    draggable: false,
    arrow: true,
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {PortfolioImages.map((val, i) => (
          <div className="item" key={i}>
            <div className="img-meta">
              <img src={val.img} alt={val.altName} />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Portfolio;
