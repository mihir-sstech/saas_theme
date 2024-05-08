import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import HeaderPopupForm from "../../form/HeaderPopupForm";
import './Topbar.css'
import TrackingModal from "../../tracking/TrackingModal";
import BirdEyeIcon from "../../../assets/images/icon/Bird-eye-view.svg";
Modal.setAppElement("#root");

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const toggleTrackingModal = () => {
    setIsTrackingModalOpen(!isTrackingModalOpen);
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
              <img src="images/logo/logodriver1.png" alt="brand" />
            </Link>
          </div>
          <div className="mobile-logo">
            <Link to="/ ">
              <img src="images/logo/driverLogo.png" alt="brand" />
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
            <button className="demo-button" onClick={toggleModalOne}>
              <span>Request A Demo</span>
              <img src="images/icon/user.svg" alt="icon" />
            </button>
          </div>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link to="/">
            <img src="images/logo/logodriver1.png" alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            {/* <img src="images/icon/close.svg" alt="icon" /> */}
            X
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

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal  modal-contact-popup-one dark-style"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="box_inner ">
          <main className="main-body box_inner modal-content clearfix">
            <button className="close" onClick={toggleModalOne}>
              <img src="images/icon/close.svg" alt="close" />
            </button>
            {/* End close icon */}

            <div className="left-side">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="row">
                  <div className="col-xl-10 col-lg-8 m-auto">
                    <blockquote>
                      “I never dreamed about success. I worked for it.”
                    </blockquote>
                    <span className="bio">—Estée Lauder</span>
                  </div>
                </div>
                <img
                  src="images/assets/ils_19.svg"
                  alt=""
                  className="illustration mt-auto"
                />
              </div>
            </div>
            {/* /.left-side */}

            <div className="right-side">
              <h2 className="form-title">Contact us</h2>
              <HeaderPopupForm />
            </div>
            {/*  /.right-side */}
          </main>
          {/* /.main-body */}
        </div>
      </Modal>
      {/* End  Modal For Request a demo */}

      {/* Tracking Modal */}
      <TrackingModal isTrackingModalOpen={isTrackingModalOpen} toggleTrackingModal={toggleTrackingModal} />

{/* End Tracking Modal */}
    </>
  );
};

export default Topbar;
