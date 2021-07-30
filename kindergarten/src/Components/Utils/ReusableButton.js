import React from "react";

import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles(() => ({
  linkTo: {
    textDecoration: "none",
  },
  btn: {
    padding: "10px",
    backgroundColor: "#336666",
    color: "#fff",
    borderRadius: "30px",
    border: "none",
    "&:hover": {
      backgroundColor: "#e67e22",
    },
  },
}));

const ReusableButton = (props) => {
  const classes = useStyles();
  return (
    <Link to={props.path} className={classes.linkTo}>
      <Button className={classes.btn}>
        {props.arrow === "left" ? <ChevronLeftIcon /> : null}
        {props.text}
        {props.arrow === "right" ? <ChevronRightIcon /> : null}
      </Button>
    </Link>
  );
};

export default ReusableButton;
