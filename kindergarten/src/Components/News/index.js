import React from "react";
import Article from "./Article.js";

const Articles = () => {
  const news = [
    {
      title: "Lorem ipsum",
      content:
        "Nam risus turpis, aliquet at pretium porta, hendrerit ut massa. Aliquam dapibus posuere ligula, sit amet egestas dolor. Donec sed sem purus. Aenean molestie sodales enim id pellentesque. ",
    },
    {
      title: "NeLorem ipsum",
      content:
        "NeNam risus turpis, aliquet at pretium porta, hendrerit ut massa. Aliquam dapibus posuere ligula, sit amet egestas dolor. Donec sed sem purus. Aenean molestie sodales enim id pellentesque. ",
    },
  ];
  return news.map((item, index) => (
    <Article title={item.title} content={item.content} key={index}></Article>
  ));
};

export default Articles;
