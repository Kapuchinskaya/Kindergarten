import React from "react";

import ArticleOverviewElement from "./Articles_overview_element";
import news from "../../../Resources/data/newsData";
import ReusableButton from "../../Utils/ReusableButton";

const ArticleOverview = () => {
  const getArticleElements = () => {
    return news.map((item, index) => (
      <ArticleOverviewElement
        key={index}
        title={item.title}
        content={item.content}
        time={item.time}
        image={item.image}
      ></ArticleOverviewElement>
    ));
  };
  return (
    <div className="article-overview">
      <div className="cards-wrapper">{getArticleElements()}</div>
      <div className="all-news-btn">
        <ReusableButton text="ALL NEWS" path="/actualnosci"></ReusableButton>
      </div>
    </div>
  );
};

export default ArticleOverview;
