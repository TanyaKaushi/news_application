import React, { useState, useEffect } from "react";

import { images } from "../utils/images.js";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";
import { newsList } from "../utils/data.js";

import "../styles/HeaderStyle.css";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsList.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentNews = newsList.slice(currentIndex, currentIndex + 1);

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
    >
      <div className="header-main">
        <div className="topic-card">
          <div className="title-1">Welcome To World News</div>
          <div className="title-2">
            Create Narrative that ignite <span>inspiration</span> ,<br />{" "}
            <span>Knowledge</span> and <span>entertainment</span>
          </div>
        </div>

        {currentNews.map((news, index) => (
          <div className="image-card">
            <div>
              <img
                className="header-image"
                src={news.image}
                onError={(e) => {
                  e.currentTarget.src = images.defaultImg;
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
            <div>
              <div className="info-content">
                <div className="news-logo">
                  <img
                    src={news.logo}
                    onError={(e) => {
                      e.currentTarget.src = images.defaultUser;
                      e.currentTarget.onerror = null;
                    }}
                  />
                  <span>{news.source} &nbsp;|</span>
                  <span>{news.timeAgo}</span>
                </div>
                <div className="news-title">{news.title}</div>
                <div className="news-desc">{news.description}</div>
                <div className="news-category">
                  <span className="category">{news.category}</span>
                  <i class="bi bi-dot"></i>
                  <span>{news.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Header;
