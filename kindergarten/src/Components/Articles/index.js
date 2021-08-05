import React from "react";
import SmallArticle from "./Small_article";
import ToHomeButtonLayout from "./../Hoc/ToHomeButtonLayout";

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
    <ToHomeButtonLayout>
      <h2>Aktualnosci</h2>
      {generateSmallArticles}
    </ToHomeButtonLayout>
  );
};

export default NewsPage;
