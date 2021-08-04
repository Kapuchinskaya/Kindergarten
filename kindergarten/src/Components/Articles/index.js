import React from "react";
import SmallArticle from "./Small_article";

const NewsPage = (props) => {
  const generateSmallArticles = props.news.map((item, index) => {
    return (
      <SmallArticle
        key={index}
        title={item.title}
        content={item.content}
        time={item.time}
        image={item.image}
        id={item.id}
      ></SmallArticle>
    );
  });

  return (
    <div className="news">
      <h2>Aktualnosci</h2>
      {generateSmallArticles}
    </div>
  );
};

export default NewsPage;
