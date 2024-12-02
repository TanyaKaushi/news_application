import React from "react";
import { newsList } from "../../utils/data";
import Slider from "react-slick";

import "../../styles/selectedNewsStyle/TrendingNewsStyle.css";

const TrendingNews = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="trending-top-creators">
      <div className="title">Trending News</div>
      <div className="trending-news-main">
        {newsList.slice(0, 4).map((news, index) => (
          <>
            <div className="title-row" key={index}>
              <div className="index-number">{index + 1}</div>
              <div>
                <div className="news-topic">{news.title}</div>
                <div className="news-category">
                  <span className="category">{news.category}</span>
                  <i class="bi bi-dot"></i>
                  <span>{news.readTime}</span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="top-creator-name">
        <div className="title">Top Creators</div>
        <div className="slider-container">
          <Slider {...settings}>
            {newsList.map((creator, index) => (
              <div key={index}>
                <div className="card-grid">
                  <div className="col-one">
                    <img src={creator.logo} className="user-image" />
                  </div>
                  <div className="col-two">
                    <div className="creator-name">{creator.source}</div>
                    <div className="creator-source">{creator.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
