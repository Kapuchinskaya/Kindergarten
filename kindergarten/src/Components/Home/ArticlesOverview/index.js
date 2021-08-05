import React from "react";
import ArticleOverviewElement from "./Articles_overview_element";
import ReusableButton from "../../Utils/ReusableButton";

const ArticleOverview = (props) => {
  const getArticleElements = () => {
    return props.news
      .slice(0, 3)
      .map((item, index) => (
        <ArticleOverviewElement
          key={index}
          title={item.title}
          content={item.content}
          time={item.time}
          image={item.image}
          id={item.id}
        ></ArticleOverviewElement>
      ));
  };

  return (
    <div className="article-overview">
      <div className="cards-wrapper">{getArticleElements(props)}</div>
      <div className="all-news-btn">
        <ReusableButton
          text="Wszystkie aktualności"
          path="/actualnosci/newsPage"
          arrow="right"
        ></ReusableButton>
      </div>
    </div>
  );
};

export default ArticleOverview;
