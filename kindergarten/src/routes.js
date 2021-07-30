import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header_footer/Header";
import Footer from "./Components/Header_footer/Footer";
import Home from "./Components/Home/index";
import News from "./Components/Articles/index";
import BigArticle from "./Components/Articles/Big_article";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import ForParentsSection from "./Components/ForParents";
import Gallery from "./Components/Gallery/Gallery";
import GalleryItem from "./Components/Gallery/GalleryItem";

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route path="/galeria/:id" exact component={GalleryItem} />
          <Route path="/galeria" component={Gallery} />
          <Route path="/dla_rodzicow" component={ForParentsSection} />
          <Route path="/actualnosci/:id" exact component={BigArticle} />
          <Route path="/actualnosci" component={News} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routes;
