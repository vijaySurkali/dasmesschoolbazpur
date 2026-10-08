import React from "react";

import "../styles/styles.css";

import logo from "../assets/upkar_logo.jpg";

import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";

const Footer = () => {

  return (

    <div className="footer-section">

      <footer>

        {/* ================= FOOTER UPPER ================= */}

        <div className="footer-upper-section">


          {/* ================= SCHOOL INFO ================= */}

          <div className="footer-logo-section">

            <div className="footer-logo-name">

              <div className="footer-logo">

                <img
                  src={logo}
                  alt="Upkar High School Logo"
                />

              </div>


              <div className="footer-name">

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


            {/* DESCRIPTION */}

            <div className="footer-small-para">

              <p>
                Education Towards Transformation.
                Upkar High School is committed to
                providing quality education and
                nurturing students for a brighter future.
              </p>

            </div>


            {/* ADDRESS */}

            <div className="footer-address">

              <div className="footer-address-head">

                <h4>
                  Our Location:
                </h4>

              </div>


              <div className="footer-address-para">

                <div>
                  <p>
                    Gohana Road, Tej Colony
                  </p>
                </div>

                <div>
                  <p>
                    Rohtak, Haryana – 124001
                  </p>
                </div>

              </div>

            </div>


            {/* CONTACT */}

            <div className="footer-contact">

              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919306745120">
                  +91 93067 45120
                </a>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:uhs392@gmail.com">
                  uhs392@gmail.com
                </a>
              </p>

            </div>


            {/* SOCIAL MEDIA */}

            <div className="footer-social-link">

              <div>

                <a href="#">

                  <img
                    src={facebook}
                    alt="Facebook"
                  />

                </a>

              </div>


              <div>

                <a href="#">

                  <img
                    src={insta}
                    alt="Instagram"
                  />

                </a>

              </div>


              <div>

                <a href="#">

                  <img
                    src={whatsapp}
                    alt="WhatsApp"
                  />

                </a>

              </div>


              <div>

                <a href="#">

                  <img
                    src={twitter}
                    alt="Twitter"
                  />

                </a>

              </div>

            </div>

          </div>


          {/* ================= FOOTER LINKS ================= */}

          <div className="footer-links-div">


            {/* QUICK LINKS */}

            <div className="footer-Links">

              <div className="footer-links-header">

                <h3>
                  Quick Links
                </h3>

              </div>


              <div className="footer-links-list">

                <ul>

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

              </div>

            </div>


            {/* USEFUL LINKS */}

            <div className="footer-Links">

              <div className="footer-links-header">

                <h3>
                  Useful Links
                </h3>

              </div>


              <div className="footer-links-list">

                <ul>

                  <li>
                    <a href="/admission">
                      Admission
                    </a>
                  </li>

                  <li>
                    <a href="/document">
                      Documents
                    </a>
                  </li>

                  <li>
                    <a href="/gallery">
                      Gallery
                    </a>
                  </li>

                  <li>
                    <a href="/contact">
                      Contact Us
                    </a>
                  </li>

                </ul>

              </div>

            </div>


            {/* CONTACT US */}

            <div className="footer-Links">

              <div className="footer-links-header">

                <h3>
                  Contact Us
                </h3>

              </div>


              <div className="footer-links-list">

                <ul>

                  <li>
                    <a href="tel:+919306745120">
                      +91 93067 45120
                    </a>
                  </li>

                  <li>
                    <a href="mailto:uhs392@gmail.com">
                      uhs392@gmail.com
                    </a>
                  </li>

                  <li>
                    Gohana Road
                  </li>

                  <li>
                    Tej Colony, Rohtak
                  </li>

                  <li>
                    Haryana – 124001
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>


        {/* ================= FOOTER BOTTOM ================= */}

        <div className="footer-bottom-section">

          <p>
            &copy; {new Date().getFullYear()} Upkar High School,
            Rohtak. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>

  );

};

export default Footer;