import React from "react";
import fancyicon1 from "../../assets/images/icon/78.svg"
import fancyicon2 from "../../assets/images/icon/79.svg"
import fancyicon3 from "../../assets/images/icon/80.svg"

const FeatureContent = [
  {
    icon: fancyicon1,
    title: "Easy Customizable",
    subTitle: `Duis aute irure dolor reprehen derit in voluptat velit.`,
    hoverText: `Bring all team slit managment task quis togather.`,
  },
  {
    icon: fancyicon2,
    title: "Modern & Slick",
    subTitle: `Duis aute irure dolor reprehen derit in voluptat velit.`,
    hoverText: `  Bring all team slit managment task quis togather.`,
  },
  {
    icon: fancyicon3,
    title: "Trusted & Secure",
    subTitle: `Duis aute irure dolor reprehen derit in voluptat velit.`,
    hoverText: `  Bring all team slit managment task quis togather.`,
  },
];

const FancyFeatureTwelve = () => {
  return (
    <div className="row justify-content-center pt-50 md-pt-20">
      {FeatureContent.map((val, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
          <div className="block-style-seventeen mt-40">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={val.icon} alt="icon" />
            </div>
            <div className="static-text">
              <h3>{val.title}</h3>
              <p>{val.subTitle}</p>
            </div>
            <div className="hover-text">{val.hoverText}</div>
          </div>
          {/* /.block-style-seventeen */}
        </div>
      ))}
    </div>
    //   End .row
  );
};

export default FancyFeatureTwelve;
