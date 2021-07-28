import React from "react";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ReusableButton from "../Utils/ReusableButton";
// import { useHistory, useParams } from 'react-router-dom'
import news from "../../Resources/data/newsData";

const BigArticle = (props) => {
  const article = news.find(
    (newsItem) => newsItem.id === props.match.params.id
  );
  console.log(article, props.match.params.id);
  if (!article) return null;

  return (
    <div className="big-article-wrapper">
      <img src={article.image} alt={article.title}></img>
      <div className="big-article-body">
        <div className="article-title">{article.title} </div>
        <div className="article-time-wrapper">
          <ScheduleIcon />
          <div className="article-time">{article.time}</div>
        </div>
        <div className="article-content">{article.content} </div>
      </div>
      <ReusableButton text="BACK" path="/actualnosci"></ReusableButton>
    </div>
  );
};

export default BigArticle;
