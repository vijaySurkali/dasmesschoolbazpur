import React, { useState, useEffect } from "react";

import "../styles/styles.css";
import "../styles/responsive.css";

import logo from "../assets/upkar_logo.jpg";

import email from "../assets/email.png";
import call from "../assets/call.png";
import location from "../assets/location.png";
import time from "../assets/clock.png";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {

    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };

  }, [menuOpen]);

  return (

    <div className="header-container">

      {/* ================= TOP HEADER ================= */}

      <div className="top-header-container">

        <div className="top-header-list-links">

          <div className="top-header-section">

            {/* LEFT SIDE */}

            <div className="top-left-header-content">

              {/* EMAIL */}

              <div className="left-email-content">

                <div className="content-icon">

                  <a href="mailto:uhs392@gmail.com">

                    <img
                      src={email}
                      alt="Email"
                    />

                  </a>

                </div>

                <div className="upper-header-content upper-header-email">

                  <a href="mailto:uhs392@gmail.com">
                    uhs392@gmail.com
                  </a>

                </div>

              </div>


              <div className="height-container resp-line"></div>


              {/* PHONE */}

              <div className="left-phone-content">

                <div className="content-icon">

                  <a href="tel:+919306745120">

                    <img
                      src={call}
                      alt="Phone"
                    />

                  </a>

                </div>

                <div className="upper-header-content upper-header-num">

                  <a href="tel:+919306745120">
                    +91 93067 45120
                  </a>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="top-right-header-content">

              {/* LOCATION */}

              <div className="right-location-content">

                <div className="content-icon">

                  <a href="#">

                    <img
                      src={location}
                      alt="Location"
                    />

                  </a>

                </div>

                <div className="upper-header-content upper-header-address">

                  <span>
                    Gohana Road, Tej Colony, Rohtak
                  </span>

                </div>

              </div>


              <div className="height-container"></div>


              {/* TIME */}

              <div className="right-time-content">

                <div className="content-icon">

                  <img
                    src={time}
                    alt="Time"
                  />

                </div>

                <div className="upper-header-content">

                  <span>
                    8:00 am - 6:00 pm
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= MAIN NAVBAR ================= */}

      <div className="bottom-header-container">

        <div className="bottom-header-section">


          {/* LOGO + SCHOOL NAME */}

          <div className="logo-header-content">

            <div className="school-logo">

              <img
                src={logo}
                alt="Upkar High School Logo"
              />

            </div>


            <div className="school-name">

              <div>

                <h1>
                  UPKAR HIGH SCHOOL
                </h1>

              </div>

              <div>

                <span>
                  Rohtak, Haryana
                </span>

              </div>

              <div>

                <span>
                  Education Towards Transformation
                </span>

              </div>

            </div>

          </div>


          {/* ================= DESKTOP NAVBAR ================= */}

          <div className="navbar-header-content">

            <div className="stander-navbar">

              <nav>

                <ul>

                  <li>
                    <a href="/">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="/about">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="/admission">
                      Admission
                    </a>
                  </li>

                  <li>
                    <a href="/document">
                      Document
                    </a>
                  </li>

                  <li>
                    <a href="/gallery">
                      Gallery
                    </a>
                  </li>

                  <li>
                    <a href="/contact">
                      Contact
                    </a>
                  </li>

                </ul>

              </nav>

            </div>


            {/* MOBILE MENU BUTTON */}

            <div className="menu-navbar">

              <div
                className={`menu ${menuOpen ? "show" : ""}`}
                onClick={handleMenu}
              >

                <div className="menu_1"></div>
                <div className="menu_2"></div>
                <div className="menu_3"></div>

              </div>

            </div>

          </div>


          {/* ================= MOBILE NAVBAR ================= */}

          <div
            className={`responsive-navbar ${
              menuOpen ? "show" : ""
            }`}
          >

            <nav>

              <ul>

                <li>
                  <a
                    href="/"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="/about"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="/admission"
                    onClick={() => setMenuOpen(false)}
                  >
                    Admission
                  </a>
                </li>

                <li>
                  <a
                    href="/document"
                    onClick={() => setMenuOpen(false)}
                  >
                    Document
                  </a>
                </li>

                <li>
                  <a
                    href="/gallery"
                    onClick={() => setMenuOpen(false)}
                  >
                    Gallery
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>

              </ul>

            </nav>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Header;