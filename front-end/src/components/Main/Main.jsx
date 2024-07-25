import React, { useRef, useState } from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Main = () => {
  return (
    <div>
      <div className="main-body">
        <div className="top-nav">
          <div className="top-nav-data">ARABIC</div>
          <div className="top-nav-data">
            REGION <img src="down-arrow.png" alt="" style={{ height: "6px" }} />
          </div>
          <div className="top-nav-data">
            <img src="help-logo.png" alt="" style={{ height: "12px" }} />
            HELP
          </div>
        </div>

        {/* //////////// */}
        <div className="main-image-body">
          <img src="2.png" alt="" className="main-body-gradient" />
          <Navbar />
          <Swiper
            direction={"vertical"}
            color="white"
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {" "}
            <SwiperSlide>
              <div className="main-body-first-content">
                <div className="main-body-title">
                  <div>
                    Expand Your World <br /> With iQ’s Technical <br />{" "}
                    Solutions{" "}
                  </div>
                  <button className="learn-more-btn">
                    LEARN MORE{" "}
                    <img
                      src="right-arrow.png"
                      alt=""
                      className="right-arrow-img"
                    />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main-body-first-content">
                <div className="main-body-title">
                  Expand Your World <br /> With iQ’s Technical <br /> Solutions{" "}
                  <br />
                  <button className="learn-more-btn">
                    LEARN MORE{" "}
                    <img
                      src="right-arrow.png"
                      alt=""
                      className="right-arrow-img"
                    />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main-body-first-content">
                <div className="main-body-title">
                  Expand Your World <br /> With iQ’s Technical <br /> Solutions{" "}
                  <br />
                  <button className="learn-more-btn">
                    LEARN MORE{" "}
                    <img
                      src="right-arrow.png"
                      alt=""
                      className="right-arrow-img"
                    />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* //////////// */}
        {/* <div className="main-image-body">
          <img src="2.png" alt="" className="main-body-gradient" />
          <Navbar />

          <div className="main-body-first-content">
            <div className="main-body-title">
              Expand Your World <br /> With iQ’s Technical <br /> Solutions{" "}
              <br />
              <button className="learn-more-btn">
                LEARN MORE{" "}
                <img src="right-arrow.png" alt="" className="right-arrow-img" />
              </button>
            </div>
            <img src="scroll-dot.png" alt="" className="main-body-scroll-dot" />
          </div>
        </div> */}
        {/* ///////////// */}
        <div className="main-second-body">
          <div className="main-second-body-content">
            <img src="lady.png" alt="" className="main-second-body-lady-img" />
            <div className="main-second-body-sub-content">
              <div className="main-second-body-sub-content-data">
                <span>iQ is An</span> Iraqi Company that was founded in 2005{" "}
                <span> with a mission to bring unparalleled</span> internet
                access <span>and speed to Iraq</span>
              </div>
              <div className="main-second-body-sub-content-data">
                <span> iQ’s presence is felt</span> everywhere across Iraq with
                our surpassing
                <span>
                  {" "}
                  infrastructure and matchless network used by a vast{" "}
                </span>{" "}
                range of other communications
                <span> and </span>government institutions
                <span> for its dependable service. </span>
              </div>
              <button className="main-second-body-sub-content-more-about-us">
                MORE ABOUT US{" "}
                <img src="right-arrow.png" alt="" className="right-arrow-img" />
              </button>
            </div>
          </div>
        </div>
        {/* ////////////////// */}
        <div className="main-third-body">
          <div className="main-third-title">
            <span>The</span> benefits <span> of optical Fiber</span>
            <div>
              <span> Lorem Ipsum is </span>simply dummy text{" "}
              <span> of the </span> printing and typesetting{" "}
              <span> industry.</span>
            </div>
          </div>
          <div className="main-third-content">
            <div className="main-third-content-data">
              <div className="main-third-content-data-title">Performance</div>
              <div>
                <span> Lorem ipsum dolor </span> sit amet, seuctetur adipiscing{" "}
                <span> elit.</span> Fusce lacus{" "}
                <span>
                  {" "}
                  dolor, sollicitudin sit amet nunc eu, feugiat ullamcorper leo.{" "}
                </span>
                Phasellus non finibus dui, vel{" "}
                <span>
                  aliquet nulla. Aliquam aliquam augue eros, non sagittis enim
                </span>{" "}
                pulvinar imperdiet.{" "}
                <span>
                  Nam pulvinar vitae magna ac sollicitudin. Quisque sed augue
                  tempus.
                </span>
              </div>
            </div>
            <img src="rocket.png" alt="" className="main-third-content-img" />
            <div className="main-third-content-data">
              <div className="main-third-content-data-title">Performance</div>
              <div>
                <span> Lorem ipsum dolor </span> sit amet, seuctetur adipiscing{" "}
                <span> elit.</span> Fusce lacus{" "}
                <span>
                  {" "}
                  dolor, sollicitudin sit amet nunc eu, feugiat ullamcorper leo.{" "}
                </span>
                Phasellus non finibus dui, vel{" "}
                <span>
                  aliquet nulla. Aliquam aliquam augue eros, non sagittis enim
                </span>{" "}
                pulvinar imperdiet.{" "}
                <span>
                  Nam pulvinar vitae magna ac sollicitudin. Quisque sed augue
                  tempus.
                </span>
              </div>{" "}
            </div>
          </div>
        </div>
        {/* //////////// */}
        <div className="main-fourth-body">
          <div className="main-fourth-title">
            Client’s <span> Testimonials</span>
          </div>
          <div className="main-fourth-content-sec">
            <div className="main-fourth-content-gradient-left"></div>
            <div className="main-fourth-content-gradient-right"></div>
            {/* /////////// */}
            <div className="main-fourth-content-profile-sec">
              <img
                src="./profile.png"
                alt=""
                className="main-fourth-content-profile-img"
              />
              <div className="main-fourth-content-profile-content">
                <div>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris scelerisque sapien ut diam dignissim posuere.”
                </div>
                <div>
                  MARC PILLAY <br />
                  <span>Executive Manager</span>
                </div>
              </div>
            </div>
            <div className="main-fourth-content-profile-sec">
              <img
                src="./profile.png"
                alt=""
                className="main-fourth-content-profile-img"
              />
              <div className="main-fourth-content-profile-content">
                <div>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris scelerisque sapien ut diam dignissim posuere.”
                </div>
                <div>
                  MARC PILLAY <br />
                  <span>Executive Manager</span>
                </div>
              </div>
            </div>
            <div className="main-fourth-content-profile-sec">
              <img
                src="./profile.png"
                alt=""
                className="main-fourth-content-profile-img"
              />
              <div className="main-fourth-content-profile-content">
                <div>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris scelerisque sapien ut diam dignissim posuere.”
                </div>
                <div>
                  MARC PILLAY <br />
                  <span>Executive Manager</span>
                </div>
              </div>
            </div>
            <div className="main-fourth-content-profile-sec">
              <img
                src="./profile.png"
                alt=""
                className="main-fourth-content-profile-img"
              />
              <div className="main-fourth-content-profile-content">
                <div>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris scelerisque sapien ut diam dignissim posuere.”
                </div>
                <div>
                  MARC PILLAY <br />
                  <span>Executive Manager</span>
                </div>
              </div>
            </div>
          </div>

          <div className="main-fourth-next-btn-sec">
            <div className="main-fourth-next-btn">
              {" "}
              <img
                src="right-arrow.png"
                alt=""
                className="right-arrow-img main-fourth-next-btn-left"
              />
            </div>
            <div className="main-fourth-next-btn">
              {" "}
              <img src="right-arrow.png" alt="" className="right-arrow-img" />
            </div>
          </div>
        </div>


        {/* //////////////////// */}



        <div className="footer-body">
          <div className="footer-sub-body">
            <div className="footer-body-content">
              <div className="footer-body-content-title">
                Subscribe to <span> Our Newsletter</span>
              </div>
              Nunc sed odio libero onec vel cursus nulla, et sollicitudin
              mauris. Ut for suscipit purus magna, non porta quam maximus at.
            </div>
            <div className="footer-body-content">
              <input
                type="text"
                className="footer-body-content-email-input"
                placeholder="Email Address"
              />
              <button className="footer-body-content-submit-btn">
                SUBSCRIBE
                <img src="right-arrow.png" alt="" className="right-arrow-img" />
              </button>
            </div>
          </div>
          <div className="footer-content">
            <ul className="footer-content-data">
              <li className="footer-content-data-title">Quick link</li>
              <li>
                <a href="">Home </a>
              </li>
              <li>
                <a href="">Broadband </a>
              </li>
              <li>
                <a href="">Service & Products </a>
              </li>
              <li>
                <a href="">Value Added Service </a>
              </li>
              <li>
                <a href="">Silk Route </a>
              </li>
              <li>
                <a href="">News </a>
              </li>
            </ul>
            <ul className="footer-content-data">
              <li className="footer-content-data-title">More Links</li>
              <li>
                {" "}
                <a href=""> News </a>
              </li>
              <li>
                {" "}
                <a href=""> About Us </a>
              </li>
              <li>
                {" "}
                <a href=""> MyiQ </a>
              </li>
              <li>
                {" "}
                <a href=""> Contact Us </a>
              </li>
              <li>
                {" "}
                <a href=""> help </a>
              </li>
            </ul>
            <ul className="footer-content-data">
              <li className="footer-content-data-title">Broadband</li>
              <li>
                <a href="">Fibre-to-the-Home</a>
              </li>
              <li>
                <a href="">Fibre-to-the-Business</a>
              </li>
              <li>
                <a href="">Fibre-to-the-Government</a>
              </li>
            </ul>
            <ul className="footer-content-data">
              <li className="footer-content-data-title">Contact</li>
              <li>
                iQ, Rizgary Quarter 412, <br /> Building 64, Sulaymaniyah,{" "}
                <br /> Kurdistan Region, IRAQ.
              </li>
              <li>
                <a href="mailto:nuox@gmail.com">info@iq.email</a>
              </li>
              <li>
                {" "}
                <a href="tel:000">+964 770 560 0000</a>
              </li>
            </ul>
            <div className="footer-content-data">
              <div className="footer-content-data-title">
                Download Our Application
              </div>
              <div className="footer-content-data-download-btn-sec">
                <img
                  src="appstore.png"
                  className="footer-content-data-download-btn"
                />
                <img
                  src="playstore.png"
                  className="footer-content-data-download-btn"
                />
              </div>
              <div className="footer-content-follow-us-title">Follow Us</div>
              <div className="footer-content-data-socialmedia-logo-sec">
                {" "}
                <a href="">
                  <img
                    className="footer-content-data-socialmedia-logo"
                    src="facebook.png"
                    alt=""
                  />
                </a>
                <a href="">
                  {" "}
                  <img
                    className="footer-content-data-socialmedia-logo"
                    src="instagram.png"
                    alt=""
                  />
                </a>
                <a href="">
                  {" "}
                  <img
                    className="footer-content-data-socialmedia-logo"
                    src="tiktok.png"
                    alt=""
                  />
                </a>
                <a href="">
                  {" "}
                  <img
                    className="footer-content-data-socialmedia-logo"
                    src="linkedin.png"
                    alt=""
                  />
                </a>
                <a href="">
                  {" "}
                  <img
                    className="footer-content-data-socialmedia-logo"
                    src="youtube.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-disclaimer-sec">
            <div>© Copyright 2023 iQ Group. All rights reserved</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
