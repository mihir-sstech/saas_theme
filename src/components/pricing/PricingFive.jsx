import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import icon85 from "../../assets/images/icon/85.svg"
import icon86 from "../../assets/images/icon/86.svg"
import icon159 from "../../assets/images/icon/159.svg"


const PricingContent = [
  {
    icon: icon85,
    packName: "Dimond Plan",
    features: ["Unlimited Email", "5gb Hosting & Domain", "Email & Live chat."],
    price: "59.99",
    trialText: "up to 10 user + 1.99 per user",
    activeClass: "active",
  },
  {
    icon:icon86,
    packName: "Dimond Plan",
    features: [
      "Unlimited Email",
      "5gb Hosting & Domain",
      "Email & Live chat.",
      "3 Domain",
    ],
    price: "29.99",
    trialText: "up to 7 user + 1.99 per user",
    activeClass: "most-popular",
  },
];

const PricingFive = () => {
  return (
    <div className="row align-items-center">
      {PricingContent.map((val, i) => (
        <div className="col-md-6" key={i}>
          <Tilt>
            <div className={`pr-table-wrapper ${val.activeClass}`}>
              <img
                src={val.icon}
                alt="icon"
                className="icon"
              />
              <div className="pack-name">{val.packName}</div>
              <ul className="pr-feature">
                {val.features.map((list, i) => (
                  <li key={i}>{list}</li>
                ))}
              </ul>
              <div className="price">$ {val.price}</div>
              <div className="trial-text">{val.trialText}</div>
              <Link
                to="/signup"
                className="trial-button hover-reverse-gr-bg-one gr-bg-one"
              >
                {" "}
                Sign up
              </Link>
            </div>
            {/* /.pr-table-wrapper */}
          </Tilt>
        </div>
      ))}
    </div>
  );
};

export default PricingFive;
