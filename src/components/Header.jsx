import React, { useState,useEffect } from 'react';
import "../styles/styles.css";
import "../styles/responsive.css";

import logo from "../assets/dasmesh_logo.png";
import email from "../assets/email.png";
import call from "../assets/call.png";
import location from "../assets/location.png";
import time from "../assets/clock.png";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu on outside click (optional)
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  return (
    <div className='header-container'>

          {/* top- header */}
          <div className='top-header-container'>

             <div className='top-header-list-links'>
             {/* header-links section */}
             <div className='top-header-section'>
              <div className='top-left-header-content'>
                  <div className='left-email-content'>
                    <div className='content-icon'>
                    <a href="mailto:dasmeshschoolbazpur@gmail.com"> <img src={email} alt="email icon"/></a>
                    </div>
                    <div className='upper-header-content upper-header-email'>
                         <a href="mailto:dasmeshschoolbazpur@gmail.com">dasmeshschoolbazpur@gmail.com</a>
                    </div>
                  </div>
                  <div className='height-container resp-line'></div>
                  <div className='left-phone-content'>
                    <div className='content-icon'>
                       <a href="tel:05949-281620"> <img src={call} alt="phone icon"/></a>
                    </div>
                    <div className='upper-header-content upper-header-num'>
                         <a href="tel:05949-281620">05949-281620</a>
                    </div>
                  </div>
              </div>
              <div className='top-right-header-content '>
                  <div className='right-location-content'>
                    <div className='content-icon'>
                        <a href=""><img src={location} alt="location icon"/></a>
                    </div>
                    <div className='upper-header-content upper-header-address'>
                        <span>Raninagal, Fauji Colony, Bazpur</span>
                    </div>
                  </div>
                  <div className='height-container'></div>
                  <div className='right-time-content'>
                    <div className='content-icon'>
                        <img src={time} alt="email icon"/>
                    </div>
                    <div className='upper-header-content '>
                        <span>8:00 am - 6:00 pm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* end header list section */}

            </div>
          </div>

          {/* end top header */}
          <div className='bottom-header-container'>
                <div className='bottom-header-section'>
                     <div className='logo-header-content'>
                         <div className='school-logo'>
                             <img src={logo} alt="school logo"/>
                         </div>
                         <div className='school-name'>
                             <div><h1>SRI DASMESH SCHOOL</h1></div>
                             <div><span> Bazpur, U.S.Nagar (School No.81030)</span></div>
                             <div><span>Affiliated to cbse (New Delhi) Aff. No 3530030</span></div>
                         </div>
                     </div>
                     <div className='navbar-header-content'>
                        <div className='stander-navbar'>
                        <nav>
                            <ul>
                                <li>
                                <a href="/">Home</a>
                                </li>

                                <li className="links-list">
                                    <a href="/">
                                    About us
                                    </a>
                                    <ul className="sub-menu">
                                            <li><a href="/">History</a></li>
                                            <li><a href="/">Mission & Vision</a></li>
                                            <li><a href="/">founder Trustees</a></li>
                                            <li><a href="/">School Trustees</a></li>
                                            <li><a href="/">Organsation</a></li>
                                            <li><a href="/">Principal Message</a></li>
                                            <li><a href="/">Head Mistress Message</a></li>
                                            <li><a href="/">Mandatory Public Disclosure</a></li>
                                    </ul>
                                </li>

                                <li className="links-list">
                                    <a href="/">
                                    Infrastructure
                                    </a>
                                    <ul className="sub-menu">
                                    <li><a href="/">School Campus</a></li>
                                    <li><a href="/">Amphitheatre</a></li>
                                    <li><a href="/">Swimming Pool</a></li>
                                    <li><a href="/">Library</a></li>
                                    <li><a href="/">Science Lab</a></li>
                                    <li><a href="/">Computer Lab</a></li>
                                    </ul>
                                </li>

                                <li className="links-list">
                                    <a href="/">
                                    Academics 
                                    </a>
                                    <ul className="sub-menu">
                                        <li><a href="/">Teaching Methodology</a></li>
                                        <li><a href="/">Admission Process</a></li>
                                        <li><a href="/">Our Staff</a></li>
                                        <li><a href="/">CBSE Online Teacher Training</a></li>
                                        <li><a href="/">International Teacher Exchange Programe</a></li>
                                    </ul>
                                </li>

                                <li className="links-list">
                                    <a href="/">
                                    Student Corner 
                                    </a>
                                    <ul className="sub-menu">
                                    <li><a href="/">Board Topper</a></li>
                                    <li><a href="/">Book Detail</a></li>
                                    <li><a href="/">Kids Corner</a></li>
                                    <li><a href="/">Verify TC</a></li>
                                    </ul>
                                </li>

                                <li className="links-list">
                                    <a href="/">
                                    Miscellaneous 
                                    </a>
                                    <ul className="sub-menu">
                                    <li><a href="/">Sports & Activity</a></li>
                                    <li><a href="/">Student Security</a></li>
                                    <li><a href="/">Transport</a></li>
                                    <li><a href="/">E-Magzine</a></li>
                                    </ul>
                                </li>

                                <li className="links-list">
                                    <a href="/">
                                    Gallery
                                    </a>
                                    <ul className="sub-menu">
                                    <li><a href="/">Photo Gallery</a></li>
                                    <li><a href="/">Video Gallery</a></li>
                                    </ul>
                                </li>
                                <li className="links-list">
                                    <a href="/">
                                    Alumni
                                    </a>
                                    <ul className="sub-menu">
                                    <li><a href="/">New Alumni Registration</a></li>
                                    <li><a href="/">Alumni Login</a></li>
                                    <li><a href="/">Alumni List</a></li>
                                    <li><a href="/">Alumni Password Reset</a></li>
                                    </ul>
                                </li>
                                <li className="links-list">
                                <a href="/">Contact Us</a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        <div className="menu-navbar">
                            <div className={`menu ${menuOpen ? "show" : ""}`} onClick={handleMenu}>
                            <div className="menu_1"></div>
                            <div className="menu_2"></div>
                            <div className="menu_3"></div>
                            </div>
                        </div>
                     </div>
                     <div className={`responsive-navbar ${menuOpen ? "show" : ""}`}>
                      <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Infrastructure</a></li>
                            <li><a href="/">Academics</a></li>
                            <li><a href="/">Student Corner</a></li>
                            <li><a href="/">Miscellaneous</a></li>
                            <li><a href="/">Gallery</a></li>
                            <li><a href="/">Alumni</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
                </div>
          </div>
    </div>
  )
}

export default Header