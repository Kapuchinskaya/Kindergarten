import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ReusableButton from "../../Utils/ReusableButton";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px",
  },
  rootWrapper: { position: "relative", height: "100%" },
  media: {
    height: 140,
  },
  content: {
    flex: "1 0 auto",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: "0px",
    left: "50%",
    transform: "translateX(-50%)",
  },
});

const ArticleOverviewElement = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.rootWrapper}>
        <div class="card-content-wrapper">
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <CardContent className={classes.content}>
            <p className="article-title">{props.title}</p>
            <div className="article-time-wrapper">
              <ScheduleIcon />
              <div className="article-time">{props.time}</div>
            </div>
            <p className="article-content">{props.content.slice(0, 100)}...</p>
          </CardContent>
          <CardActions className={classes.buttonWrapper}>
            <ReusableButton text="MORE" path={"/actualnosci"} arrow="right" />
          </CardActions>
        </div>
      </div>
    </Card>
  );
};

export default ArticleOverviewElement;
