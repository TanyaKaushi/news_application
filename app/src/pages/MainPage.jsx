import React, { useEffect } from "react";
import Header from "./Header";
import LatestNews from "./LatestNews";
import MustRead from "./MustRead";
import EditorPick from "./EditorPick";
import BusinessSports from "./BusinessSports";
import TopCreaters from "./TopCreaters";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Header />
      <LatestNews />
      <MustRead />
      <TopCreaters />
      <EditorPick />
      <BusinessSports />
    </>
  );
};

export default MainPage;
