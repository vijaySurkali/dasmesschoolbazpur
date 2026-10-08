import React from 'react'
import "../styles/styles.css";

import logo from "../assets/dasmesh_logo_white.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";


const Footer = () => {
  return (
    <div className='footer-section'>
       <footer>
            <div className='footer-upper-section'>
                <div className='footer-logo-section'>
                    <div className='footer-logo-name'>
                        <div className='footer-logo'>
                            <img src={logo} alt="footer-logo"/>
                        </div>
                        <div className='footer-name'>
                             <div><h1>SRI DASMESH SCHOOL</h1></div>
                             <div><span> Bazpur, U.S.Nagar (School No.81030)</span></div>
                             <div><span>Affiliated to cbse (New Delhi) Aff. No 3530030</span></div>
                        </div>
                    </div>
                    <div className='footer-small-para'>
                       <p>Sri Dasmesh School, Bazpur, fosters learning, values, and growth with top facilities and a student-focused approach.</p>
                    </div>
                    <div className='footer-address'>
                        <div className='footer-address-head'>
                           <h4>Our Location:</h4>
                        </div>
                        <div className='footer-address-para'>
                            <div><p>Raninagal, Fauji Colony</p></div>
                            <div><p>Bazpur-262401, U.S. Nagar</p></div>
                            <div><p>Uttarakhand (India)
                            </p></div>
                        </div>
                    </div>
                    <div className='footer-social-link'>
                        <div>
                           <a href="/"><img src={facebook} alt="facebook"/></a>
                        </div>
                        <div>
                          <a href="/"><img src={insta} alt="instagream"/></a>
                        </div>
                        <div>
                           <a href="/"><img src={whatsapp} alt="whatsaap"/></a>
                        </div>
                        <div>
                           <a href="/"><img src={twitter} alt="twitter"/></a>
                        </div>
                    </div>
                </div>
                <div className='footer-links-div'>
                 
        
                <div className='footer-Links'>
                    <div className="footer-links-header">
                       <h3>Quick Links</h3>
                    </div>
                   <div className='footer-links-list'>
                    <ul>
                      <li><a href="/">About Us</a></li>
                      <li><a href="/">Admissions</a></li>
                      <li><a href="/">Academic Programs</a></li>
                      <li><a href="/">Gallery</a></li>
                      <li><a href="/">Contact Us</a></li>
                    </ul>
                   </div>
                </div>
                <div className='footer-Links'>
                    <div className="footer-links-header">
                        <h3>Useful Resources</h3>
                    </div>
                    <div className='footer-links-list'>
                      <ul>
                        <li><a href="/">Student Portal</a></li>
                        <li><a href="/">Parent Portal</a></li>
                        <li><a href="/">Library & E-Learning</a></li>
                        <li><a href="/">Extracurricular Activities</a></li>
                        <li><a href="/">Alumni Network</a></li>
                      </ul>
                    </div>
                </div>
                <div className='footer-Links'>
                   <div className="footer-links-header">
                       <h3>Rules & Regulations</h3>
                   </div>
                   <div className='footer-links-list'>
                    <ul>
                      <li><a href="/">Attendance Policy</a></li>
                      <li><a href="/">Code of Conduct</a></li>
                      <li><a href="/">Examination Guidelines</a></li>
                      <li><a href="/">Fee Structure</a></li>
                      <li><a href="/">Parent-Teacher Association</a></li>
                    </ul>
                   </div>
                </div>
              </div>  
            </div>
            <div className='footer-bottom-section'>
                <p>&copy;{new Date().getFullYear()} Sri Dasmesh School, Bazpur. All Rights Reserved.</p>
            </div>
       </footer>
    </div>
  )
}

export default Footer