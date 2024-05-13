import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import notFound from "../assets/images/icon/53.svg"
import driverlogo from "../assets/images/logo/logodriver.png"
import notFound404 from "../assets/images/media/404.svg"
import questionmaekicon from "../assets/images/media/404-q.svg"


const NotFound = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Not Found || Driver 007 Front Website</title>
      </Helmet>
      {/* End Page SEO Content */}

      <div className="error-page d-flex align-items-center">
        <div className="img-holder order-last">
          <img
            src={notFound404}
            alt="media"
            className="w-100 illustration"
          />
          <img
            src={questionmaekicon}
            alt="media"
            className="shapes qus"
          />
        </div>
        <div className="text-wrapper order-first">
          <div style={{width: "150px"}}>
            <Link to="/">
              <img src={driverlogo} alt="logo" />
            </Link>
          </div>
          <h1 className="font-slab">
            Sorry, <br />
            The Page Can’t <br />
            be Found.
          </h1>
          {/* <p className="font-rubik">
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat
          </p> */}

          <Link
            to="/"
            className="back-home font-rubik d-flex align-items-center justify-content-center"
          >
            <span>Back to Home</span>
            <img src={notFound} alt="icon" />
          </Link>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* /.error-page */}
    </div>
  );
};

export default NotFound;
