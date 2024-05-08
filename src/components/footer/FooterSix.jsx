import React from "react";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/sstechsys/",
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/sstech_system",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/company/sstech-system/",
  },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/sstech_system/",
  },
  {
    icon: "fa-youtube",
    link: "https://www.youtube.com/channel/UCCJNXXNxDEhJ-LFO8a6lmrQ",
  },
  {
    icon: "fa-pinterest",
    link: "https://www.pinterest.co.uk/sstechsystem/",
  },
];


const FooterSix = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-4">
        <div className="logo1">
          <a href="index.html">
            <img src="images/logo/logodriver1.png" alt="logo" />
          </a>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">Find us on Social Media</div>
        <ul className="d-flex justify-content-center social-icon">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
        {/* End .social-icon */}
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">We’r always happy to help.</div>
        <div className="text-center">
          <a href="mailto:ib-themes21@gmail.com" className="email">
          info@sstechsystem.com
          </a>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterSix;
