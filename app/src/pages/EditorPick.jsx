import React, { useState, useEffect } from "react";
import { newsList } from "../utils/data";
import { Link } from "react-router-dom";
import CardPage from "../components/CardPage";
import LargeCardPage from "../components/LargeCardPage.jsx";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";

import "../styles/EditorPickStyle.css";
import "../styles/ComponentStyles/LargeCardPageStyle.css";

const EditorPick = () => {
  const [currentIndex, setCurrentIndex] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 5) % newsList.length);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const currentNews = newsList.slice(currentIndex, currentIndex + 5);

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="about-main"
    >
      <div className="editor-pick-main">
        <div className="d-flex justify-content-between align-items-center">
          <div className="title">Editor's Pick</div>
          <Link className="page-link icon" to="/trending-news">
            <i class="bi bi-arrow-right-circle-fill"></i>
          </Link>
        </div>
        <div className="editor-pick-grid">
          <div className="row-one">
            {currentNews[0] && (
              <LargeCardPage news={currentNews[0]} showDescription={true} />
            )}
          </div>
          <div className="row-two">
            {currentNews.slice(1, 5).map((news, index) => (
              <CardPage key={index} news={news} showDescription={false} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EditorPick;
