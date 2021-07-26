import React from "react";
import SmallArticle from "./Small_article.js";
import c_1 from "../../Resources/carousel_images/c_1.jpg";
import c_2 from "../../Resources/carousel_images/c_2.jpg";
import c_3 from "../../Resources/carousel_images/c_3.jpg";

const Articles = () => {
  const news = [
    {
      title: "Lorem ipsum",
      content:
        "Nam risus turpis, aliquet at pretium porta, hendrerit ut massa. Aliquam dapibus posuere ligula, sit amet egestas dolor. Donec sed sem purus. Aenean molestie sodales enim id pellentesque. ",
      time: "2021/06/01 8:40",
      image: c_1,
    },
    {
      title: "NeLorem ipsum",
      content:
        "NeNam risus turpis, aliquet at pretium porta, hendrerit ut massa. Aliquam dapibus posuere ligula, sit amet egestas dolor. Donec sed sem purus. Aenean molestie sodales enim id pellentesque. ",
      time: "2021/07/01 11:50",
      image: c_2,
    },
    {
      title: "ipsum NeLorem",
      content:
        "Risus turpis, aliquet at pretium porta, hendrerit ut massa. Aliquam dapibus posuere ligula, sit amet egestas dolor. Donec sed sem purus. Aenean molestie sodales enim id pellentesque. ",
      time: "2021/07/22 15:50",
      image: c_3,
    },
  ];
  return news.map((item, index) => (
    <SmallArticle
      key={index}
      title={item.title}
      content={item.content}
      time={item.time}
      image={item.image}
    ></SmallArticle>
  ));
};

export default Articles;
