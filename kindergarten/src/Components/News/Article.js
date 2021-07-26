import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

const Article = (props) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader title={props.title} />
        <CardContent>{props.content}</CardContent>
      </Card>
    </div>
  );
};

export default Article;
