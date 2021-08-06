import React, { useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  btn: {
    position: "fixed",
    bottom: "100px",
    right: "30px",
    backgroundColor: "#336666",
    opacity: "0.8",
    color: "#fff",
    borderRadius: "50px",
    border: "none",
    zIndex: "1",
    "&:hover": {
      backgroundColor: "#e67e22",
      opacity: "1",
    },
  },
}));

const UpButton = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 120) {
      setVisible(true);
    } else if (scrolled <= 120) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div style={{ display: visible ? "inline" : "none" }}>
      <Button className={classes.btn}>
        <ArrowUpwardIcon onClick={scrollToTop} />
      </Button>
    </div>
  );
};

export default UpButton;
