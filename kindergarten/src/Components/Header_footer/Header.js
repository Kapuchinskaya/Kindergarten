import React from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../Resources/flowers.png";

const useStyles = makeStyles(() => ({
  appBar: {
    display: "flex",
    backgroundColor: "#fafafa",
    height: "120px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2%",
    // boxShadow: "none",
  },
  headerLogo: {
    width: "70px",
    height: "70px",
  },
  toolbar: {
    justifyContent: "flex - end",
    padding: "0px",
  },
  appbarLink: {
    color: "#336666",
    fontWeight: "500",
    textDecoration: "none",
    textTransform: "uppercase",
    margin: "0px 10px",
    "&:hover": {
      borderBottom: "2px solid #e67e22",
      color: "#e67e22",
    },
    "&:active": {
      //TODO краткая запись
      borderBottom: "2px solid #e67e22",
      color: "#e67e22",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar class={classes.appBar} position="fixed">
      <div className={classes.headerLogo}>
        <img linkTo={"/"} src={logo} alt="logo" />
      </div>

      <Toolbar className={classes.toolbar}>
        <Link className={classes.appbarLink} to="/actualnosci">
          Actualnosci
        </Link>
        <Link className={classes.appbarLink} to="/dla_rodzicow">
          Dla rodzicow
        </Link>
        <Link className={classes.appbarLink} to="/galeria">
          Galeria
        </Link>
        <Link className={classes.appbarLink} to="/kontakt">
          Kontakt
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
