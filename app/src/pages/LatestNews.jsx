import React, { useState, useEffect } from "react";
import CardPage from "../components/CardPage";
import { Link } from "react-router-dom";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";
import { newsList } from "../utils/data";

import "../styles/LatestNewsStyle.css";

const LatestNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % newsList.length);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const currentNews = newsList.slice(currentIndex, currentIndex + 4);

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="about-main"
    >
      <div className="news-list-main">
        <div className="d-flex justify-content-between align-items-center">
          <div className="title">Latest News</div>
          <Link className="page-link icon" to="/trending-news">
            <i className="bi bi-arrow-right-circle-fill"></i>
          </Link>
        </div>

        <div className="news-list">
          {currentNews.map((news, index) => (
            <CardPage key={index} news={news} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LatestNews;
