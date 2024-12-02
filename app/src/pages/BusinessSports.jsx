import React, { useState } from "react";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { newsList } from "../utils/data";
import CardPage from "../components/CardPage";

import "../styles/BusinessSportsStyle.css";

const BusinessSports = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="about-main"
    >
      <div className="business-sports-main">
        <div className="grid">
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="title">Business</div>
              <Link
                className="page-link icon"
                to={`/trending-news?category=Business`}
              >
                <i class="bi bi-arrow-right-circle-fill"></i>
              </Link>
            </div>

            <div className="col-one">
              {newsList
                .filter((news) => news.category === "Business")
                .slice(0, 2)
                .map((news, index) => (
                  <CardPage key={index} news={news} showDescription={false} />
                ))}
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="title">Sports</div>
              <Link
                className="page-link icon"
                to={`/trending-news/category=Sports`}
              >
                <i class="bi bi-arrow-right-circle-fill"></i>
              </Link>
            </div>

            <div className="col-two">
              {newsList
                .filter((news) => news.category === "Sports")
                .slice(0, 2)
                .map((news, index) => (
                  <CardPage key={index} news={news} showDescription={false} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessSports;
