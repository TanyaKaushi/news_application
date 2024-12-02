import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardPage from "../../components/CardPage";
import LargeCardPage from "../../components/LargeCardPage";
import { newsList } from "../../utils/data";
import { fadeIn } from "../../../src/variants.jsx";
import { motion } from "framer-motion";

import "../../styles/newsList/NewsGridStyle.css";

const NewsGrid = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const filteredNews = category
    ? newsList.filter((news) => news.category === category)
    : newsList;

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
      <div className="news-grid-main">
        <div className="title">
          {category ? `${category} News` : "Trending News"}
        </div>
        <div className="grid">
          {filteredNews.map((news, index) => {
            const isLargeTile = (index + 1) % 4 === 1;
            const tileClass = isLargeTile ? "tile large-tile" : "tile";

            return (
              <div key={index} className={tileClass}>
                {isLargeTile ? (
                  <LargeCardPage news={news} showDescription={false} />
                ) : (
                  <CardPage news={news} showDescription={false} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default NewsGrid;
