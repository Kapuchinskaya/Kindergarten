import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header_footer/Header";
import Footer from "./Components/Header_footer/Footer";
import Home from "./Components/Home/index";
import Articles from "./Components/News";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Articles />

      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
