import React from "react";
import { Helmet } from "react-helmet";
import Topbar from "../components/header/landing/Topbar";
import HeroBannerSix from "../components/hero-banner/HeroBannerSix";
import DocSlickAsNavTwo from "../components/block-slider/DocSlickAsNavTwo";
import FancyFeatureTwelve from "../components/features/FancyFeatureTwelve";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonial from "../components/testimonial/TestimonialFive";
import FAQ from "../components/testimonial/faq";
import PricingFive from "../components/pricing/PricingFive";
import FooterSix from "../components/footer/FooterSix";
import Tilt from "react-parallax-tilt";
import delivery from "../assets/images/assets/Delivery.gif"
import check from  "../assets/images/icon/84.svg"
import apple from "../assets/images/icon/apple.svg"
import playstore from "../assets/images/icon/playstore.svg"
import quick from "../assets/images/logo/logo-17.svg"
import google from "../assets/images/logo/logo-18.svg"
import twitter from "../assets/images/logo/logo-19.svg"
import bing from "../assets/images/logo/logo-19.svg"
import shape145 from "../assets/images/shape/145.svg"
import shape146 from "../assets/images/shape/146.svg"
import shape147 from "../assets/images/shape/147.svg"
import shape148 from "../assets/images/shape/148.svg"
import shape149 from "../assets/images/shape/149.svg"
import shape150 from "../assets/images/shape/150.png"
import shape151 from "../assets/images/shape/151.svg"
import shape154 from "../assets/images/shape/154.svg"
import shape155 from "../assets/images/shape/155.svg"
import shape156 from "../assets/images/shape/156.svg"
import shape157 from "../assets/images/shape/157.svg"
import shape158 from "../assets/images/shape/158.svg"
import shape160 from "../assets/images/shape/160.png"
import shape162 from "../assets/images/shape/162.svg"
import shape163 from "../assets/images/shape/163.svg"
import shape164 from "../assets/images/shape/164.svg"
import shape165 from "../assets/images/shape/165.svg"
import shape166 from "../assets/images/shape/166.png"
import shape167 from "../assets/images/shape/167.png"
import banner2 from "../assets/images/assets/Banner-1157X339.png"

import "./homePage.css"

const HomePage = () => {
  const openImageInNewTab = (imgUrl) => {
    const newTab = window.open();
    if (newTab) {
      newTab.location.href = imgUrl;
    }
  };
  return (
    <div className="main-page-wrapper font-gordita dark-style lg-container p0">
      <Helmet>
        <title>
          Driver007- On Demand Deliver Parcel App
        </title>
      </Helmet>
      {/* End Page SEO Content */}
      <Topbar />
      {/* End HeaderLanding */}

      {/*=============================================
			Theme Hero Banner
		  ==============================================  */}
      <div className="main-dev-img sm:mt-1">
  <div className="hero-banner-six w-full md:w-auto" id="home">
    <div className="illustration-content flex flex-wrap justify-center sm:justify-start md:justify-start">
      <img
        src={delivery}
        alt="screen"
        className="screen-one mt-11 sm:mt-0 flex"
      />
      <img
        src={shape145}
        alt="shape"
        className="shapes shape-one flex"
      />
      <img
        src={shape146}
        alt="shape"
        className="shapes shape-two flex"
      />
      <img
        src={shape147}
        alt="shape"
        className="shapes shape-three flex"
      />
      <img
        src={shape148}
        alt="shape"
        className="shapes shape-four flex"
      />
      <img
        src={shape149}
        alt="shape"
        className="shapes shape-five flex"
      />
      <img
        src={shape150}
        alt="shape"
        className="shapes shape-six flex"
      />
    </div>

    <div className="container mx-auto flex sm:mr-56">
      <HeroBannerSix />
    </div>
  </div>

</div>

      {/* /.hero-banner-six */}

      {/*=============================================
		   Fancy Feature Twelve
	    ==============================================  */}
      <div className="fancy-feature-twelve pt-250 md-pt-50" id="about">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                <div className="title-style-six text-center">
                  <h2>
                    Check why you <span>Should</span> Choose us
                  </h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
            {/* End .row */}
            <FancyFeatureTwelve />
          </div>
        </div>
        {/* /.bg-wrapper */}
        <img src={shape151} alt="" className="shapes shape-one" />
      </div>
      {/*  /.fancy-feature-twelve */}

      {/*=============================================
			Fancy Feature Thirteen
		  ==============================================  */}
      <div className="fancy-feature-thirteen pt-250 md-pt-110 " id="features">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 col-md-10 m-auto">
              <div className="title-style-six text-center">
                <h2>
                  Bring all Team <span>Managment</span> & task togather
                </h2>
                <p className="text-xs">
                  Lorem ipsum dolor on adipisci elit io sed do eiusmod tempor
                  dsu elit
                </p>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>

          <div className="sldier-wrapper  mt-30 md-mt-50">
            <DocSlickAsNavTwo />
          </div>
          {/* /.sldier-wrapper  */}
        </div>
      </div>
      {/* /.fancy-feature-thirteen */}

      {/*=====================================================
				Fancy Feature Fourteen
			===================================================== */}
      <div className="fancy-feature-fourteen mt-250 pt-80 md-mt-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="title-style-six">
                <h6 style={{ color: "#FF2759", fontSize: "15px" }}>
                  Integrategration
                </h6>
                <h2>
                  Connect App <br /> with the <span>Software</span> you use.
                </h2>
                <p className="text-xs pe-5 me-5">
                  Lorem ipsum dolor on adipisci elit io quis sed do eiusmod tem.
                </p>
              </div>
              {/*  /.title-style-six */}
            </div>

            <div className="col-lg-5 ms-auto">
              <div className="right-side md-mt-60">
                <div className="row">
                  <div className="col-md-6">
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={quick} alt="logo" />
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta d-flex align-items-center justify-content-center ">
                        <img src={google} alt="logo" />
                      </div>
                    </Tilt>
                  </div>
                  {/* End .col */}

                  <div className="col-md-6">
                    <Tilt>
                      <div className="logo-meta mt-40 d-flex align-items-center justify-content-center ">
                        <img src={twitter} alt="logo" />
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={bing} alt="logo" />
                        <img
                          src={shape154}
                          alt="shape"
                          className="shapes shape-one"
                        />
                      </div>
                    </Tilt>
                  </div>
                  {/* End .col */}
                </div>
              </div>
              {/* /.right-side */}
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper font-gordita dark-style lg-container p0">
      <div className="container">
          <div className="title-style-six">
            <h2>
              <span>FAQ</span>
            </h2>
          </div>
        </div>
      <FAQ />
    </div>
      {/*=====================================================
				Fancy Portfolio One
			===================================================== */}
      <div className="fancy-portfolio-one pt-180 md-pt-100" id="product">
        <div className="container">
          <div className="title-style-six">
            <h2>
              Our <span>Portfolio</span>
            </h2>
          </div>
          {/*  /.title-style-six */}
        </div>

        <div className="portfolioSliderOne arrow-top-right pt-120 md-pt-70">
          <Portfolio />
        </div>
      </div>
      {/* /.fancy-portfolio-one */}

      {/*=====================================================
			Client Feedback Slider Five
			===================================================== */}
      <div
        className=" client-feedback-slider-five mt-200 md-mt-80"
        id="feedback"
      >
        <div className="client-feedback-slider-fiv">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-9 m-auto">
                <img
                  src={check}
                  alt="icon"
                  className="icon m-auto"
                />
                <div className="title-style-six text-center mt-25">
                  <h2>
                    Check what’s <span>Customer </span>say about us.
                  </h2>
                </div>
                {/*  /.title-style-six */}
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-xl-7 col-lg-10 m-auto">
                <div className="custom-icon-slick-arrow clientSliderFive mt-80 md-mt-50">
                  <Testimonial />
                </div>
                {/* /.clientSliderThree */}
                <img
                  src={shape156}
                  alt="shape"
                  className="shapes shape-one"
                />
                <img
                  src={shape157}
                  alt="shape"
                  className="shapes shape-two"
                />
                <img
                  src={shape158}
                  alt="shape"
                  className="shapes shape-three"
                />
              </div>
            </div>
          </div>
          {/* /.container */}
          <div className="circle-area">
            <img src={shape155} alt="shape" className="main-img" />
          </div>
        </div>
      </div>
      {/* /.client-feedback-slider-three */}

      {/* 	=====================================================
				Pricing Section Five
			===================================================== */}
      <div
        className="pricing-section-five  pt-250 md-mt-150 sm-mt-80 md-pt-80"
        id="pricing"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last">
              <div className="title-style-six ps-5 md-p0">
                <h6 style={{ fontSize: "15px" }}>Our Pricing</h6>
                <h2>
                  Choose your <span>Product.</span>
                </h2>
                <p className="text-xs">
                  Lorem ipsum dolor on adipisci elit sed do eiusmod liu.
                </p>
              </div>
              {/* /.title-style-six */}
            </div>
            {/* End .col */}

            <div className="col-lg-7">
              <div className="pricing-table-area-five md-mt-60">
                <img
                  src="images/icon/88.png"
                  alt="icon"
                  className="shapes shape-one"
                />
                <img
                  src={shape160}
                  alt="shape"
                  className="shapes shape-two"
                />
                <PricingFive />
              </div>
              {/* /.pricing-table-area-five */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.pricing-section-five */}

      {/*=====================================================
					Fancy Short Banner Seven
				===================================================== */}
      <div className="fancy-short-banner-seven mt-250 md-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 m-auto">
              <div className="title-style-six text-center">
                <h2>
                  love our product? <span>Save $20</span> by grab it today.
                </h2>
              </div>
              {/* /.title-style-six */}
              <div
                onClick={()=>{openImageInNewTab("https://apps.apple.com/in/app/driver007/id1470026880")}}
                style={{cursor:"pointer"}}
                className="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one"
              >
                <img src={apple} alt="icon" className="icon" />
                <div>
                  <span>Download on the</span>
                  <strong>App store</strong>
                </div>
              </div>
              <div
                onClick={()=>{openImageInNewTab("https://play.google.com/store/apps/details?id=com.sstech.driver007")}}
                style={{cursor:"pointer"}}
                className="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one"
              >
                <img src={playstore} alt="icon" className="icon" />
                <div>
                  <span>Download on the</span>
                  <strong>Play store</strong>
                </div>
              </div>
              </div>
            </div>
            {/* End .col */}
          {/* End .row */}
          <Tilt>
            <div className="screen-meta">
              <img
                src={banner2}
                alt="screen"
                className="m-auto"
              />
              <img
                src={shape165}
                alt="screen"
                className="shapes shape-four"
              />
              <img
                src={shape166}
                alt="screen"
                className="shapes shape-five"
              />
            </div>
          </Tilt>
        </div>
        {/* /.container */}

        <img
          src={shape162}
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src={shape163}
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src={shape164}
          alt="shape"
          className="shapes shape-three"
        />
      </div>
      {/* /.fancy-short-banner-seven */}

      {/*=====================================================
					Footer Style Six
				===================================================== */}
      <footer className="theme-footer-six">
        <div className="inner-container">
          <div className="container">
            <FooterSix />
            <p className="copyright">
              {" "}
              Copyright @ 2011 to {new Date().getFullYear()}{" "}
              <a
                href="https://www.sstechsystem.com/"
                target="_blank"
                rel="noreferrer"
              >
                SSTech System Solutions Pvt Ltd,
              </a>{" "}
              India.
            </p>
          </div>
          <img
            src={shape167}
            alt="shape"
            className="shapes shape-one"
          />
        </div>
        {/*  /.inner-container */}
      </footer>
      {/* /.theme-footer-six */}
    </div>
  );
};

export default HomePage;
