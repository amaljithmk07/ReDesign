import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [slider, setSlider] = useState(false);
  const searchBarSlider = () => {
    setSlider((prev) => !prev);
  };
  const [hamb, setHamb] = useState(false);
  const hamburgerhandler = () => {
    setHamb((prev) => !prev);
  };
  return (
    <div className="navbar">
      <div className="navbar-logo-sec">
        <img src="LOGO.png" alt="" className="navbar-logo-img" />
        <ul className="navbar-menu-sec">
          <li className="navbar-menu-data">
            {" "}
            <a href=""> Home </a>{" "}
          </li>

          <div class="dropdown navbar-menu-dropdown ">
            <div>
              Broadband <img src="down-arrow.png" alt="" />
            </div>
            <ul class="navbar-menu-dropdown-content">
              <li>Broadband</li>
              <li>Broadband</li>
              <li>Broadband</li>
            </ul>
          </div>
          <div class="dropdown navbar-menu-dropdown ">
            <div>
              Service&Products <img src="down-arrow.png" alt="" />
            </div>
            <ul class="navbar-menu-dropdown-content">
              <li>Service&Products</li>
              <li>Service&Products</li>
              <li>Service&Products</li>
            </ul>
          </div>

          <li className="navbar-menu-data">
            {" "}
            <a href=""> Value Added Services </a>{" "}
          </li>
          <li className="navbar-menu-data">
            {" "}
            <a href=""> News </a>{" "}
          </li>
          <li className="navbar-menu-data">
            {" "}
            <a href=""> Silk Route Transist </a>{" "}
          </li>
          <li className="navbar-menu-data">
            {" "}
            <a href=""> About Us </a>{" "}
          </li>
        </ul>
      </div>
      <div className="navbar-search-hamb-sec">
        <div className="navbar-search">
          {slider == true ? (
            <input
              type="text"
              className="navbar-search-bar"
              placeholder="Search Anything"
            />
          ) : (
            ""
          )}
          {slider == false ? (
            <img
              src="search.png"
              alt=""
              className="navbar-search-img"
              onClick={searchBarSlider}
            />
          ) : (
            <div onClick={searchBarSlider}>X</div>
          )}
        </div>
        <div className="navbar-hamb-sec" onClick={hamburgerhandler}>
          {hamb == true ? (
            <img src="hamb-cross.png" alt="" className="hamb-icon" />
          ) : (
            <img src="./hamb.png" alt="" className="hamb-icon" />
          )}{" "}
        </div>
      </div>

      {hamb == true ? (
        <div className="hamb-nav-main-body">
          <ul className="hamb-navbar-menu-sec">
            <li className="hamb-navbar-menu-data">
              {" "}
              <a href=""> Home </a>{" "}
            </li>

            <div class="hamb-navbar-menu-dropdown ">
              <div>
                Broadband <img src="down-arrow.png" alt="" />
              </div>
              <ul class="hamb-navbar-menu-dropdown-content">
                <li>Broadband</li>
                <li>Broadband</li>
                <li>Broadband</li>
              </ul>
            </div>
            <div class="hamb-navbar-menu-dropdown ">
              <div>
                Service&Products <img src="down-arrow.png" alt="" />
              </div>
              <ul class="hamb-navbar-menu-dropdown-content">
                <li>Service&Products</li>
                <li>Service&Products</li>
                <li>Service&Products</li>
              </ul>
            </div>

            <li className="hamb-navbar-menu-data">
              {" "}
              <a href=""> Value Added Services </a>{" "}
            </li>
            <li className="hamb-navbar-menu-data">
              {" "}
              <a href=""> News </a>{" "}
            </li>
            <li className="hamb-navbar-menu-data">
              {" "}
              <a href=""> Silk Route Transist </a>{" "}
            </li>
            <li className="hamb-navbar-menu-data">
              {" "}
              <a href=""> About Us </a>{" "}
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
