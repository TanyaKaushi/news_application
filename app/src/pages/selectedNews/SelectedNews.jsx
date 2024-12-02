import React from "react";
import { useLocation } from "react-router-dom";
import LatestNews from "../LatestNews";
import TrendingNews from "./TrendingNews";
import { useEffect } from "react";
import { fadeIn } from "../../../src/variants.jsx";
import { motion } from "framer-motion";

import "../../styles/selectedNewsStyle/SelectedNewsStyle.css";

const SelectedNews = () => {
  const { state } = useLocation();
  const news = state?.selectedNews;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  if (!news) {
    return <div>No news details available!</div>;
  }
  return (
    <motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="about-main"
      ></motion.div>
      <div className="select-news-main">
        <div>
          <img className="news-image" src={news.image} />
        </div>
        <div className="news-title-row">
          <div className="news-title">{news.title}</div>
          <div className="d-flex gap-4 mt-2">
            <i class="bi bi-bookmark-fill"></i>
            <i class="bi bi-three-dots-vertical"></i>
          </div>
        </div>

        <div className="news-details-row">
          <img className="logo" src={news.logo} />
          <div className="news-source">
            {news.source} Analysis by <span>writer</span>
          </div>
          <div className="news-category">
            {news.category} | <span>{news.readTime}</span>
          </div>
        </div>

        <div className="d-flex gap-5">
          <div className="news-description">{news.description}</div>
          <div>
            <TrendingNews />
          </div>
        </div>
      </div>
      <LatestNews />
    </motion.div>
  );
};

export default SelectedNews;
