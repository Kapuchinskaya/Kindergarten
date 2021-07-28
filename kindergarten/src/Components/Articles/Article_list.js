import React from "react";
import SmallArticle from "./Small_article.js";

import news from "../../Resources/data/newsData";

const Articles = () => {
  return news.map((item, index) => (
    <SmallArticle
      key={index}
      title={item.title}
      content={item.content}
      time={item.time}
      image={item.image}
      id={item.id}
    ></SmallArticle>
  ));
};

export default Articles;
