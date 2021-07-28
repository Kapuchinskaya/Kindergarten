import React from "react";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

const PaperItem = () => {
  const classes = useStyles();

  return (
    <Link to={"/"}>
      <Paper></Paper>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default PaperItem;
