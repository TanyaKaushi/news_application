import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { newsList } from "../utils/data";
import LargeCardPage from "../components/LargeCardPage.jsx";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";
import { images } from "../utils/images.js";

import "../styles/MustReadStyle.css";

const MustRead = () => {
  const [currentIndex, setCurrentIndex] = useState(4);

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
      <div className="must-read-main">
        <div className="d-flex justify-content-between align-items-center">
          <div className="title">Must Read</div>
          <Link className="page-link" to="/trending-news">
            <i class="bi bi-arrow-right-circle-fill"></i>
          </Link>
        </div>
        <div className="card-grid">
          {currentNews[0] && (
            <Card className="full-card">
              <img
                className="first-image"
                src={currentNews[0].image}
                alt={currentNews[0].title}
                onError={(e) => {
                  e.currentTarget.src = images.defaultImg;
                  e.currentTarget.onerror = null;
                }}
              />
              <div className="news-logo">
                <img
                  src={currentNews[0].logo}
                  alt={currentNews[0].source}
                  onError={(e) => {
                    e.currentTarget.src = images.defaultUser;
                    e.currentTarget.onerror = null;
                  }}
                />
                <span>{currentNews[0].source}</span>
                <i className="bi bi-dot"></i>
                <span>{currentNews[0].timeAgo}</span>
              </div>
              <Link className="page-link" to="/trending-news">
                <div className="news-title">{currentNews[0].title}</div>
              </Link>
              <div className="news-desc">{currentNews[0].description}</div>
              <Card.Footer className="card-footer">
                <div className="news-category">
                  <span className="category">{currentNews[0].category}</span>
                  <i className="bi bi-dot"></i>
                  <span>{currentNews[0].readTime}</span>
                </div>
              </Card.Footer>
            </Card>
          )}

          <div>
            {currentNews[1] && (
              <LargeCardPage news={currentNews[1]} showDescription={true} />
            )}
          </div>

          <div className="rows">
            {currentNews.slice(2).map((newsItem, index) => (
              <div key={newsItem.id || index}>
                <Card className="full-card">
                  <img
                    className="rows-image"
                    src={newsItem.image}
                    alt={newsItem.title}
                    onError={(e) => {
                      e.currentTarget.src = images.defaultImg;
                      e.currentTarget.onerror = null;
                    }}
                  />
                  <div className="news-logo">
                    <img
                      src={newsItem.logo}
                      alt={newsItem.source}
                      onError={(e) => {
                        e.currentTarget.src = images.defaultUser;
                        e.currentTarget.onerror = null;
                      }}
                    />
                    <span>{newsItem.source}</span>
                    <i className="bi bi-dot"></i>
                    <span>{newsItem.timeAgo}</span>
                  </div>
                  <Link className="page-link" to="/trending-news">
                    <div className="news-title">{newsItem.title}</div>
                  </Link>
                  <Card.Footer className="card-footer">
                    <div className="news-category">
                      <span className="category">{newsItem.category}</span>
                      <i className="bi bi-dot"></i>
                      <span>{newsItem.readTime}</span>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MustRead;
