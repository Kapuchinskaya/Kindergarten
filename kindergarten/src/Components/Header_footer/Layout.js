import { makeStyles } from "@material-ui/core";
import "../../Resources/css/App.css";
import Header from "./Header";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {children}
      
    </div>
  );
};

export default Layout;
