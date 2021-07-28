import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  linkTo: {
    textDecoration: "none",
  },
  moreBtn: {
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

const ReusableButton = (props) => {
  const classes = useStyles();
  return (
    <Link to={props.path} className={classes.linkTo}>
      <Button className={classes.moreBtn}>
        {props.text}
        <ChevronRightIcon />
      </Button>
    </Link>
  );
};

export default ReusableButton;
