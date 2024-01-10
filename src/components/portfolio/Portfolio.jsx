import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioImages = [
  {
    img: "Product-01-400X540",
    altName: "Screen 1",
  },
  {
    img: "Product-02-400X540",
    altName: "Screen 2",
  },
  {
    img: "Product-03-400X540",
    altName: "Screen 3",
  },
  {
    img: "Product-04-400X540",
    altName: "Screen 4",
  },
  {
    img: "Product-01-400X540",
    altName: "Screen 5",
  },
  {
    img: "Product-02-400X540",
    altName: "Screen 6",
  },
  {
    img: "Product-03-400X540",
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
              <img src={`images/media/${val.img}.png`} alt={val.altName} />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Portfolio;
