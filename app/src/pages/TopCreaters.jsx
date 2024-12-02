import React from "react";
import Slider from "react-slick";
import { newsList } from "../utils/data";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";
import { images } from "../utils/images";

import "../styles/TopCreaterStyle.css";

const TopCreaters = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="about-main"
    >
      <div className="top-creator-name">
        <div className="title">Top Creators</div>
        <div className="slider-container">
          <Slider {...settings}>
            {newsList.map((creator, index) => (
              <div key={index}>
                <div className="card-grid">
                  <div className="col-one">
                    <img
                      src={creator.logo}
                      className="user-image"
                      onError={(e) => {
                        e.currentTarget.src = images.defaultUser;
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </div>
                  <div className="col-two">
                    <div className="creator-name">{creator.source}</div>
                    <div className="creator-source">{creator.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};

export default TopCreaters;
