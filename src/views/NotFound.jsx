import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
            src="images/media/404.svg"
            alt="media"
            className="w-100 illustration"
          />
          <img
            src="images/media/404-q.svg"
            alt="media"
            className="shapes qus"
          />
        </div>
        <div className="text-wrapper order-first">
          <div style={{width: "150px"}}>
            <Link to="/">
              <img src="images/logo/logodriver.png" alt="logo" />
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
            <img src="images/icon/53.svg" alt="icon" />
          </Link>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* /.error-page */}
    </div>
  );
};

export default NotFound;
