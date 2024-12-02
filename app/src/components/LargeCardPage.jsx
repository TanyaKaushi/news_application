import React from "react";
import { images } from "../utils/images";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "../styles/ComponentStyles/LargeCardPageStyle.css";

const LargeCardPage = ({ news, showDescription = true }) => {
  return (
    <div>
      <Card className="large-full-card">
        <div className="overlay"></div>
        <img
          className="card-image"
          src={news.image || images.defaultImg}
          onError={(e) => {
            e.currentTarget.src = images.defaultImg;
            e.currentTarget.onerror = null;
          }}
        />
        <div className="card-details">
          <div
            className="news-logo"
            onError={(e) => {
              e.currentTarget.src = images.defaultUser;
              e.currentTarget.onerror = null;
            }}
          >
            <img
              src={news.logo}
              onError={(e) => {
                e.currentTarget.src = images.defaultUser;
                e.currentTarget.onerror = null;
              }}
            />
            <span>{news.source}&nbsp;&nbsp; | </span>
            <span className="read-time">{news.timeAgo}</span>
          </div>
          <Link className="page-link" to="/trending-news">
            <div className="news-title">{news.title}</div>
          </Link>

          {showDescription && (
            <div className="news-desc">{news.description}</div>
          )}

          <div className="news-category">
            <span className="category">{news.category}</span>
            <i class="bi bi-dot"></i>
            <span>{news.readTime}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LargeCardPage;
