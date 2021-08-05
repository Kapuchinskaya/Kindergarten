import React from "react";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ReusableButton from "../Utils/ReusableButton";

const SmallArticle = (props) => {
  return (
    <div>
      <div className="article-wrapper">
        <img
          className="article-column article-image"
          src={props.image}
          alt="article image"
        ></img>
        <div className="article-column article-body   ">
          <div className="article-title">{props.title} </div>
          <div className="article-time-wrapper">
            <ScheduleIcon />
            <div className="article-time">{props.time}</div>
          </div>
          <div className="article-content">
            {props.content?.slice(0, 100)}...
          </div>
          <ReusableButton
            text="WIĘCEJ"
            path={"/actualnosci/bigArticle/" + props.id}
            arrow="right"
          />
        </div>
      </div>
    </div>
  );
};

export default SmallArticle;
