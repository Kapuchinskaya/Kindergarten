import React from "react";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  linkToArticle: {
    textDecoration: "none",
  },
  moreBtn: {
    // margin: "0px 10px",
    padding: "10px 10px 10px 20px",
    backgroundColor: "#336666",
    color: "#fff",
    borderRadius: "30px",
    border: "none",
    "&:hover": {
      backgroundColor: "#e67e22",
    },
  },
}));

const SmallArticle = (props) => {
  const classes = useStyles();
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
          <div className="article-content">{props.content} </div>
          <Link to={"/" + props.title} className={classes.linkToArticle}>
            <Button className={classes.moreBtn}>
              More
              <ChevronRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallArticle;
