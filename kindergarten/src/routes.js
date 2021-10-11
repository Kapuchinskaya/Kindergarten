import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header_footer/Header";
import HeaderBS from "./Components/Header_footer/Header-bs";
import Footer from "./Components/Header_footer/Footer";
import Home from "./Components/Home/index";
import NewsPage from "./Components/Articles/index";
import BigArticle from "./Components/Articles/Big_article";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import ForParentsSection from "./Components/ForParents";
import Gallery from "./Components/Gallery/Gallery";
import GalleryItem from "./Components/Gallery/GalleryItem";
import NewsHoc from "./Components/Hoc/newsRequest";
import UpButton from "./Components/Utils/upButton";
import ContactsSection from "./Components/Contacts/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <HeaderBS />
        <UpButton />
        <Switch>
          <Route path="/kontakty" component={ContactsSection} />
          <Route path="/galeria/:id" exact component={GalleryItem} />
          <Route path="/galeria" component={Gallery} />
          <Route path="/dla_rodzicow" component={ForParentsSection} />
          <Route
            path="/actualnosci/bigArticle/:id"
            exact
            component={BigArticle}
          />
          <Route path="/actualnosci/:type" exact component={NewsHoc} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routes;
