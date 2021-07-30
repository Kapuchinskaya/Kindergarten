import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
  media: {
    height: 140,
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "8px",
  },
});

const ArticleOverviewElement = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div class="card-content-wrapper">
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <p className="article-title">{props.title}</p>
          <p className="article-content">{props.content}</p>
        </CardContent>
      </div>
      <CardActions className={classes.buttonWrapper}>
        <ReusableButton text="MORE" path={"/actualnosci"} arrow="right" />
      </CardActions>
    </Card>
  );
};

export default ArticleOverviewElement;
