import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import HeaderPopupForm from "../../form/HeaderPopupForm";
import './Topbar.css'
import TrackingModal from "../../tracking/TrackingModal";
import BirdEyeIcon from "../../../assets/images/icon/Bird-eye-view.svg";
import { X } from "react-bootstrap-icons";
import conatctIamge from "../../../assets/images/ils_19.svg"
import close from "../../../assets/images/icon/close.svg"
import user from "../../../assets/images/icon/user.svg"
import driverlogo1 from "../../../assets/images/logo/logodriver1.png"
import driverlogo from "../../../assets/images/logo/driverLogo.png"

Modal.setAppElement("#root");

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const toggleTrackingModal = () => {
    setIsTrackingModalOpen(!isTrackingModalOpen);
  };

  function toggleModalContact() {
    setIsContactOpen(!isContactOpen);
  }

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-five fixed"
            : "theme-main-menu sticky-menu theme-menu-five"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo custom-logo">
            <Link to="/ ">
              <img src={driverlogo1} alt="brand" />
            </Link>
          </div>
          <div className="mobile-logo">
            <Link to="/ ">
              <img src={driverlogo} alt="brand" />
            </Link>
          </div>
          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={[
                      "home",
                      "about",
                      "features",
                      "product",
                      "feedback",
                      "pricing",
                    ]}
                    currentClassName="active"
                    offset={-90}
                  >
                    <li className="nav-item !text-white dropdown position-static">
                      <a
                        className="nav-link"
                        href="#home"
                        data-toggle="dropdown"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#about" className="nav-link">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#features" className="nav-link">
                        Blogs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#product" className="nav-link">
                        Galary
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#feedback" className="nav-link">
                        contact us
                      </a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
          {/* Tracking Button */}
          <div className="tracking-container">
            <button className="tracking-button" onClick={toggleTrackingModal}>
              <span>Tracking</span>
              <img src={BirdEyeIcon} alt="icon" />
            </button>
          </div>
          <div className="right-widget">
            <button className="demo-button" onClick={toggleContactModal}>
              <span>Request A Demo</span>
              <img src={user} alt="icon" />
            </button>
          </div>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link to="/">
            <img src={driverlogo1} alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            {/* <img src="images/icon/close.svg" alt="icon" /> */}
            <X width={30} height={30} />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav"
          items={[
            "home",
            "about",
            "features",
            "product",
            "feedback",
            "pricing",
          ]}
          currentClassName="active"
          offset={-90}
        >
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={handleClick}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#features" className="nav-link" onClick={handleClick}>
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#product" className="nav-link" onClick={handleClick}>
              Product
            </a>
          </li>

          <li className="nav-item">
            <a href="#feedback" className="nav-link" onClick={handleClick}>
              Feedback
            </a>
          </li>
          <li className="nav-item">
            <a href="#pricing" className="nav-link" onClick={handleClick}>
              Pricing
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}
      <HeaderPopupForm isContactModalOpen={isContactModalOpen} toggleContactModal={toggleContactModal}/>

      {/* Tracking Modal */}
      <TrackingModal isTrackingModalOpen={isTrackingModalOpen} toggleTrackingModal={toggleTrackingModal} />

{/* End Tracking Modal */}
    </>
  );
};

export default Topbar;
