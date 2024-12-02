import React from "react";
import Card from "react-bootstrap/Card";
import { images } from "../utils/images.js";
import { useNavigate } from "react-router-dom";

import "../styles/ComponentStyles/CardPageStyle.css";

const CardPage = ({ news, showDescription = true }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/selected-news", { state: { selectedNews: news } });
  };

  return (
    <Card className="full-card">
      <img
        className="card-image"
        src={news.image || images.defaultImg}
        onError={(e) => {
          e.currentTarget.src = images.defaultImg;
          e.currentTarget.onerror = null;
        }}
      />
      <div className="news-logo">
        <img
          src={news.logo}
          onError={(e) => {
            e.currentTarget.src = images.defaultUser;
            e.currentTarget.onerror = null;
          }}
        />
        <span>{news.source} &nbsp; | </span>
        <span className="read-time">{news.timeAgo}</span>
      </div>
      <div className="news-title" onClick={handleNavigation}>
        {news.title}
      </div>

      {showDescription && <div className="news-desc">{news.description}</div>}

      <Card.Footer className="card-footer">
        <div className="news-category">
          <span className="category">{news.category}</span>
          <i class="bi bi-dot"></i>
          <span>{news.readTime}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CardPage;
