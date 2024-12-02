import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { images } from "../../utils/images";
import { fadeIn } from "../../../src/variants.jsx";
import { motion } from "framer-motion";

import "../../styles/category/CategoryStyle.css";

const Category = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="about-main"
    >
      <div className="category-list-main">
        <div className="grid">
          <div className="tile ">
            <Link to={`/trending-news?category=Sports`}>
              <img className="image" src={images.sports} />
              <div className="main-title">Sports</div>
              <div className="title">
                {" "}
                Game highlights and athlete updates
                <br />
                <span>
                  Learn More <i class="bi bi-arrow-right-circle-fill"></i>
                </span>
              </div>
            </Link>
          </div>

          <div className="tile ">
            <Link to={`/trending-news?category=Entertainment`}>
              <img className="image" src={images.entertainment} />
              <div className="main-title">Entertainment</div>
              <div className="title">
                {" "}
                Celebrities, movies, and pop culture
                <br />
                <span>
                  Learn More <i class="bi bi-arrow-right-circle-fill"></i>
                </span>
              </div>
            </Link>
          </div>

          <div className="tile ">
            <Link to={`/trending-news?category=Technology`}>
              <img className="image" src={images.tech} />
              <div className="main-title">Technology</div>
              <div className="title">
                {" "}
                Innovations, gadgets, and industry news
                <br />
                <span>
                  Learn More <i class="bi bi-arrow-right-circle-fill"></i>
                </span>
              </div>
            </Link>
          </div>

          <div className="tile ">
            <Link to={`/trending-news?category=Health`}>
              <img className="image" src={images.health} />
              <div className="main-title">Health</div>
              <div className="title">
                {" "}
                Medical advances and wellness tips
                <br />
                <span>
                  Learn More <i class="bi bi-arrow-right-circle-fill"></i>
                </span>
              </div>
            </Link>
          </div>

          <div className="tile ">
            <Link to={`/trending-news?category=Education`}>
              <img className="image" src={images.education} />
              <div className="main-title">Education</div>
              <div className="title">
                Academic news and innovations
                <br />
                <span>
                  Learn More <i class="bi bi-arrow-right-circle-fill"></i>
                </span>
              </div>
            </Link>
          </div>

          <div className="tile ">
            <Link to={`/trending-news?category=Travel`}>
              <img className="image" src={images.travel} />
              <div className="main-title">Travel</div>
              <div className="title">
                Destinations and travel inspiration
                <br />
                <span>
                  Learn More <i class="bi bi-arrow-right-circle-fill"></i>
                </span>
              </div>
            </Link>
          </div>

          <div className="tile ">
            <Link to={`/trending-news?category=Weather`}>
              <img className="image" src={images.weather} />
              <div className="main-title">Weather</div>
              <div className="title">
                Real-time forecasts & alerts to keep prepared
                <br />
                <span>
                  Learn More <i class="bi bi-arrow-right-circle-fill"></i>
                </span>
              </div>
            </Link>
          </div>

          <div className="tile ">
            <Link to={`/trending-news?category=Business`}>
              <img className="image" src={images.business} />
              <div className="main-title">Business</div>
              <div className="title">
                Economic trends, markets, and corporate
                <br />
                <span>
                  Learn More <i class="bi bi-arrow-right-circle-fill"></i>
                </span>
              </div>
            </Link>
          </div>

          <div className="tile ">
            <Link to={`/trending-news?category=Lifestyle`}>
              <img className="image" src={images.lifestyle} />
              <div className="main-title">LifeStyle</div>
              <div className="title">
                Fashion, food, travel, and culture
                <br />
                <span>
                  Learn More <i class="bi bi-arrow-right-circle-fill"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Category;
