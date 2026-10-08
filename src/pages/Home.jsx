import React, { useState } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/styles.css";
import "../styles/responsive.css";

import eventsData from "../DataFile/eventsData";
import latestNews from "../DataFile/latestNews";
import importantLinks from "../DataFile/importantLinks";

import officalWhatsaap from "../assets/officalWhatsapp.png";
import phone from "../assets/phone-call.png";

// HERO IMAGE
import schoolAssembly from "../assets/gallery3-B8a202MP.jpg";

import school from "../assets/school.jpg";
import principal from "../assets/male.jpeg";
import headmistress from "../assets/female.jpeg";

import cap from "../assets/achivement cap.svg";
import achievement1 from "../assets/ach1.jpg";
import achievement2 from "../assets/ach2.png";
import achievement6 from "../assets/event.jpg";
import achievement3 from "../assets/ach4.jpg";
import achievement4 from "../assets/achi7.jpg";
import achievement5 from "../assets/achi10.jpg";

import camera from "../assets/camera.png";
import bus from "../assets/bus.png";
import globalTeacher from "../assets/globalTeacher.png";
import land from "../assets/forest.png";
import swimmingPool from "../assets/swimmer.png";
import sports from "../assets/running.png";
import lab from "../assets/microscope.png";
import classroom from "../assets/classroom.png";

import Marquee from "react-fast-marquee";

import cbse from "../assets/cbse.png";
import result from "../assets/cbse1.png";
import dgLocker from "../assets/digi.jpg";
import national from "../assets/national.webp";
import swayam from "../assets/swayam.avif";

import TopperList from "../components/TopperList";


const images = [
  {
    src: cbse,
    link: "https://www.cbse.gov.in/"
  },
  {
    src: result,
    link: "https://results.gov.in/"
  },
  {
    src: dgLocker,
    link: "https://www.digilocker.gov.in/"
  },
  {
    src: national,
    link: "https://www.india.gov.in/"
  },
  {
    src: swayam,
    link: "https://swayam.gov.in/"
  }
];


const Home = () => {

  const [events] = useState([
    ...eventsData,
    ...eventsData
  ]);


  return (

    <div className="home-container">

      {/* ================= HEADER ================= */}

      <div className="header-section">
        <Header />
      </div>


      {/* ================= HERO SECTION ================= */}

      <div
        className="hero-container"
        style={{
          backgroundImage: `url(${schoolAssembly})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      >

        {/* Dark overlay */}

        <div className="video-overlay">

          <div className="hero-content">

            <div className="hero-heading">

              <h1>
                <span>Welcome</span> to our School
                <br />
                Shaping a <span>Brighter</span> Future
              </h1>

            </div>


            <div className="hero-para">

              <p>
                Experience quality education in a nurturing
                environment with expert educators and modern
                facilities to help students thrive.
              </p>

            </div>


            <div className="hero-btn">

              <a href="/">
                Enroll Today
              </a>

            </div>

          </div>

        </div>


        {/* Phone / WhatsApp */}

        <div className="phone-whatsapp">

          <div className="phone-links">

            <a href="tel:+917055945111">

              <img
                src={phone}
                alt="Phone Official"
              />

            </a>

          </div>


          <div className="whatsapp-links">

            <a
              href="https://wa.me/917055945111"
              target="_blank"
              rel="noopener noreferrer"
            >

              <img
                src={officalWhatsaap}
                alt="WhatsApp Official"
              />

            </a>

          </div>

        </div>

      </div>


      {/* ================= END HERO ================= */}


      {/* ================= LATEST NEWS ================= */}

      <div className="latest-news-links-container">

        <div className="latest-section">

          <div className="latest-small-head">
            <span>Stay Updated: Academic Highlights</span>
          </div>


          <div className="latest-head">

            <h1>
              School Announcements &{" "}
              <span>Academic</span> Resources
            </h1>

          </div>


          <div className="latest-links-container">

            <div className="latest-news">

              <ul>

                {latestNews
                  .sort(
                    (a, b) =>
                      new Date(b.date) -
                      new Date(a.date)
                  )
                  .map((news) => (

                    <li key={news.id}>

                      <div>
                        <a href={news.link}>
                          {news.title}
                        </a>
                      </div>

                      <div>
                        <span>{news.date}</span>
                      </div>

                    </li>

                  ))}

              </ul>


              <div className="know-more-btn">

                <a href="/news">
                  Know More
                </a>

              </div>

            </div>


            <div className="important-list">

              <h3>
                Important <span>Academic</span> Resources
              </h3>

              <ul>

                {importantLinks.map(
                  (link, index) => (

                    <li key={index}>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>

                    </li>

                  )
                )}

              </ul>

            </div>

          </div>

        </div>

      </div>


      {/* ================= ABOUT SECTION ================= */}

      <div className="about-container">

        <div className="about-section">

          <div className="school-image">

            <img
              src={school}
              alt="school"
            />

          </div>


          <div className="about-content">

            <div className="about-details">

              <div className="about-heading">

                <h2>
                  About Us
                </h2>

              </div>


              <div className="about-para">

                <p>
                  Sri Dasmesh School, Bazpur, is celebrated
                  for academic excellence and holistic growth.
                  Spanning 35 acres at Fauji Colony and
                  affiliated with CBSE New Delhi, our modern
                  campus inspires creativity, critical thinking,
                  and leadership. Named in honor of Guru
                  Gobind Singh, we nurture innovative,
                  well-rounded students ready for today's world.
                </p>

              </div>


              <div className="known_more_btn">

                <a href="/">
                  Know More
                </a>

              </div>

            </div>


            <div className="mission-statement">

              <div className="mission-heading">

                <h3>
                  Our Mission
                </h3>

              </div>


              <div className="mission-para">

                <p>
                  Achieve one hundred percent spoken English
                  habit among students without coercion.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= PRINCIPAL / HEADMISTRESS ================= */}

      <div className="message-container">

        <div className="mes-section">


          {/* PRINCIPAL */}

          <div className="principal-mes">

            <div className="image-contain-principal">

              <img
                src={principal}
                alt="Principal"
              />

            </div>


            <div className="text-content">

              <div className="header">

                <h3>
                  Message from our{" "}
                  <span>Principal</span>
                </h3>

              </div>


              <div className="message-body">

                <p>
                  Our commitment at Sri Dasmesh School is to
                  provide a safe, challenging environment that
                  empowers students to become innovative
                  thinkers, problem solvers, and inspired
                  learners ready for the 21st century.
                </p>

              </div>


              <div className="school-info">

                <p>
                  Since its founding, Sri Dasmesh School has
                  earned a reputation for academic excellence
                  and holistic development.
                </p>

              </div>


              <div className="principal-info-1">

                <div className="principal-details-1">

                  <div>
                    <p className="title">
                      Principal
                    </p>
                  </div>

                  <div>
                    <p className="name">
                      Mr. Sandeep Slaria
                    </p>
                  </div>

                </div>


                <div className="signature">

                  <img
                    src="https://framerusercontent.com/images/MyR3m6evlzfY3pQMVfTtpR0tFVw.svg"
                    alt="Signature"
                  />

                </div>

              </div>

            </div>

          </div>


          {/* HEADMISTRESS */}

          <div className="headmistress-mes">

            <div className="text-content">

              <div className="image-contain-headmistress resp-image">

                <img
                  src={headmistress}
                  alt="Headmistress"
                />

              </div>


              <div className="header">

                <h3>
                  Message from our{" "}
                  <span>Headmistress</span>
                </h3>

              </div>


              <div className="message-body">

                <p>
                  As I walk through the school corridors,
                  I am greeted by the joyful chatter of students.
                  The Kindergarten classrooms are alive with
                  the boundless energy of our 'Little Bubbles
                  of Joy,' eager to learn, play, and explore.
                </p>

              </div>


              <div className="school-info">

                <p>
                  Sri Dasmesh School fosters confidence and
                  curiosity in a vibrant, supportive environment.
                </p>

              </div>


              <div className="principal-info-1">

                <div className="principal-details-1">

                  <div>
                    <p className="title">
                      Headmistress
                    </p>
                  </div>

                  <div>
                    <p className="name">
                      Mrs. Vijaya Gill
                    </p>
                  </div>

                </div>


                <div className="signature">

                  <img
                    src="https://framerusercontent.com/images/MyR3m6evlzfY3pQMVfTtpR0tFVw.svg"
                    alt="Signature"
                  />

                </div>

              </div>

            </div>


            <div className="image-contain-headmistress standard-img">

              <img
                src={headmistress}
                alt="Headmistress"
              />

            </div>

          </div>

        </div>

      </div>


      {/* ================= WHY CHOOSE US ================= */}

      <div className="why-choose-container">

        <div className="why-section">

          <div className="why-section-heading">
            <span>Why Choose Us</span>
          </div>


          <div className="why-choose-para">

            <h2>
              Excellence in Education, Innovation & Facilities
            </h2>

          </div>


          <div className="why-choose-details">

            <div className="top-cont">


              <div className="details-section">

                <div className="details-icon">
                  <img
                    src={camera}
                    alt="CCTV Security"
                  />
                </div>

                <div className="details-head">
                  <span>24/7 CCTV Security</span>
                </div>

                <div className="details-para">
                  <p>
                    Our campus is fully secured with
                    round-the-clock CCTV monitoring
                    for student safety.
                  </p>
                </div>

              </div>


              <div className="details-section">

                <div className="details-icon">
                  <img
                    src={lab}
                    alt="Science Lab"
                  />
                </div>

                <div className="details-head">
                  <span>Advanced Science Labs</span>
                </div>

                <div className="details-para">
                  <p>
                    Equipped with cutting-edge technology
                    to enhance hands-on learning experiences.
                  </p>
                </div>

              </div>


              <div className="details-section">

                <div className="details-icon">
                  <img
                    src={sports}
                    alt="Sports Facility"
                  />
                </div>

                <div className="details-head">
                  <span>Indoor & Outdoor Sports</span>
                </div>

                <div className="details-para">
                  <p>
                    State-of-the-art sports facilities to
                    promote physical fitness and teamwork.
                  </p>
                </div>

              </div>


              <div className="details-section">

                <div className="details-icon">
                  <img
                    src={classroom}
                    alt="Smart Classrooms"
                  />
                </div>

                <div className="details-head">
                  <span>Smart Digital Classrooms</span>
                </div>

                <div className="details-para">
                  <p>
                    Interactive and technology-driven
                    learning spaces for better engagement.
                  </p>
                </div>

              </div>

            </div>


            <div className="bottom-cont">


              <div className="details-section">

                <div className="details-icon">
                  <img
                    src={swimmingPool}
                    alt="Swimming Pool"
                  />
                </div>

                <div className="details-head">
                  <span>Olympic-Size Swimming Pool</span>
                </div>

                <div className="details-para">
                  <p>
                    A safe and hygienic pool for students
                    to learn and enjoy swimming activities.
                  </p>
                </div>

              </div>


              <div className="details-section">

                <div className="details-icon">
                  <img
                    src={bus}
                    alt="Transport Facility"
                  />
                </div>

                <div className="details-head">
                  <span>Safe Transport Services</span>
                </div>

                <div className="details-para">
                  <p>
                    Well-maintained buses with GPS tracking
                    ensure safe and comfortable commutes.
                  </p>
                </div>

              </div>


              <div className="details-section">

                <div className="details-icon">
                  <img
                    src={globalTeacher}
                    alt="International Teachers"
                  />
                </div>

                <div className="details-head">
                  <span>Global Teaching Exchange</span>
                </div>

                <div className="details-para">
                  <p>
                    International exposure through teacher
                    exchange programs for enriched learning.
                  </p>
                </div>

              </div>


              <div className="details-section">

                <div className="details-icon">
                  <img
                    src={land}
                    alt="Lush Green Campus"
                  />
                </div>

                <div className="details-head">
                  <span>
                    Sprawling 35-Acre Green Campus
                  </span>
                </div>

                <div className="details-para">
                  <p>
                    A peaceful and eco-friendly environment
                    that fosters creativity and learning.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= ACHIEVEMENTS ================= */}

      <div className="achievements-container">

        <div className="achievements-section">

          <div className="achievement-logo-head">

            <div className="achievement-cap-logo">

              <img
                src={cap}
                alt="Graduation Cap"
              />

            </div>


            <div className="achivement-head">

              <h1>
                Our <span>Achievements</span>
              </h1>

            </div>

          </div>


          <div className="achievement-para">

            <p>
              We take pride in our students' outstanding
              accomplishments, from academic excellence
              to extracurricular achievements. Here are
              some of the key highlights of our success.
            </p>

          </div>


          <div className="achievement-activities">

            <div className="achievement-head">

              <span>
                Notable Events{" "}
                <span className="color-small-div">
                  &
                </span>{" "}
                Awards
              </span>

            </div>


            <div className="activities-images">

              <div className="achievement-gallery">


                <div className="achievement-item">
                  <img
                    src={achievement1}
                    alt="Academic Excellence"
                  />
                </div>


                <div className="achievement-item">
                  <img
                    src={achievement2}
                    alt="Sports Championship"
                  />
                </div>


                <div className="achievement-item">
                  <img
                    src={achievement3}
                    alt="Science Fair Winner"
                  />
                </div>


                <div className="achievement-item">
                  <img
                    src={achievement4}
                    alt="Cultural Fest Award"
                  />
                </div>


                <div className="achievement-item">
                  <img
                    src={achievement5}
                    alt="National Olympiad Recognition"
                  />
                </div>


                <div className="achievement-item">
                  <img
                    src={achievement6}
                    alt="National Olympiad Recognition"
                  />
                </div>


              </div>

            </div>

          </div>


          {/* TOPPERS */}

          <div className="achievement-topper">

            <div className="achievement-head">

              <span>
                Our{" "}
                <span className="color-small-div">
                  Top
                </span>{" "}
                Performers
              </span>

            </div>


            <div className="achievement-para">

              <p>
                Celebrating academic excellence!
                <br />
                Here are the students who have achieved
                the highest marks.
              </p>

            </div>


            <div className="topper-container">

              <TopperList />

            </div>

          </div>

        </div>

      </div>


      {/* ================= EVENTS ================= */}

      <div className="event-container">

        <div className="event-section">

          <div className="event-small-head">
            <span>Memorable Moments</span>
          </div>


          <div className="event-head">

            <h1>
              School Events <span>&</span> Activities
            </h1>

          </div>


          <div className="event-scroll-list">

            <div className="event-images-section">

              {events.map((event, index) => (

                <div
                  key={index}
                  className="images-list"
                >

                  <div className="event-image">

                    <a href="/">

                      <img
                        src={event.image}
                        alt={`Event ${event.number}`}
                      />

                    </a>

                  </div>


                  <div className="event-name">

                    <span>
                      {event.name}
                    </span>

                  </div>


                  <div className="event-data-read">

                    <div className="event-date">

                      <span>
                        {event.date}
                      </span>

                    </div>


                    <div className="event-read">

                      <a href="/">
                        Read More
                      </a>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* ================= VISIT / MAP ================= */}

      {/* ================= VISIT / CONTACT ================= */}

<div className="visit-map-container">

  <div className="visit-map-section">


    {/* CONTACT DETAILS */}

    <div className="visit-section">

      <div className="visit-details">


        <div className="visit-heading">

          <h1>
            Visit or Contact Us
          </h1>

        </div>


        <div className="visit-details-address">


          {/* SCHOOL ADDRESS */}

          <div className="visit-school-add">

            <div className="visit-school-name">

              <p>
                Upkar High School
              </p>

            </div>


            <div className="visit-add">

              <p>
                Gohana Road, Tej Colony,
                Rohtak, Haryana – 124001
              </p>

            </div>

          </div>


          {/* PHONE */}

          <div className="visit-contact">

            <p>

              <span>
                Phone:
              </span>{" "}

              <a href="tel:+919306745120">
                +91 93067 45120
              </a>

            </p>

          </div>


          {/* EMAIL */}

          <div className="visit-email">

            <p>

              <span>
                Email:
              </span>{" "}

              <a href="mailto:uhs392@gmail.com">
                uhs392@gmail.com
              </a>

            </p>

          </div>


          {/* TAGLINE */}

          <div className="visit-timing">

            <p>

              <span>
                Motto:
              </span>{" "}

              Education Towards Transformation

            </p>

          </div>


        </div>

      </div>

    </div>


    {/* GOOGLE MAP */}

    <div className="map-section">

      <iframe
        title="Upkar High School Location"

        src="https://www.google.com/maps?q=Gohana%20Road%2C%20Tej%20Colony%2C%20Rohtak%2C%20Haryana%20124001&output=embed"

        width="100%"

        height="580px"

        style={{
          border: "0"
        }}

        allowFullScreen

        loading="lazy"

        referrerPolicy="no-referrer-when-downgrade"

      ></iframe>

    </div>


  </div>

</div>

{/* ================= END VISIT / CONTACT ================= */}


      {/* ================= GOVT LINKS ================= */}

      <div className="marquee-container">

        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={false}
        >

          {images.map((img, index) => (

            <div
              key={index}
              style={{
                marginRight: "50px"
              }}
            >

              <a
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
              >

                <img
                  src={img.src}
                  alt="logo"
                  style={{
                    width: "250px"
                  }}
                />

              </a>

            </div>

          ))}

        </Marquee>

      </div>


      {/* ================= FOOTER ================= */}

      <div className="footer-container">

        <Footer />

      </div>

    </div>

  );

};


export default Home;