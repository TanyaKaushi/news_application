import React from "react";
import { images } from "../utils/images";

import "../styles/ComponentStyles/FooterStyle.css";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-main">
      <div className="subscribe-card">
        <div>
          <div className="sub-title">Get First Update</div>
          <div className="main-title">
            Get the news in frontline by <br /> <b>subscribe</b> our latest news
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <input
            className="search-input"
            type="text"
            placeholder="Your email"
          />
          <div className="subscribe-btn">Subscribe</div>
        </div>
      </div>

      <div className="links-card">
        <div className="logo-part">
          <div className="logo" onClick={scrollTop}>
            <img className="logo-image" src={images.logoImg} />
          </div>
          <div className="sub-title">
            Craft narrative thant ignite inspiration, <br /> knowledge and
            entertainment
          </div>
          <div className="social-media">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-instagram"></i>
          </div>
        </div>
        <div className="link-set">
          <div className="name">Business</div>
          <ul className="ul">
            <li>Startup</li>
            <li>Employee</li>
            <li>Success</li>
            <li>Video</li>
            <li>Markets</li>
          </ul>
        </div>
        <div className="link-set">
          <div className="name">Technology</div>
          <ul className="ul">
            <li>Innovate</li>
            <li>Gadget</li>
            <li>Innovative Cities</li>
            <li>Upstairs</li>
            <li>Future Tech</li>
          </ul>
        </div>
        <div className="link-set">
          <div className="name">Travel</div>
          <ul className="ul">
            <li>Destinations</li>
            <li>Food & Drink</li>
            <li>Stay</li>
            <li>News</li>
            <li>Videos</li>
          </ul>
        </div>
        <div className="link-set">
          <div className="name">Sports</div>
          <ul className="ul">
            <li>Football</li>
            <li>Tennis</li>
            <li>Golf</li>
            <li>MotorSpots</li>
            <li>ESports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
