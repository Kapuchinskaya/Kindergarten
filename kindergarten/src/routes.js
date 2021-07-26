import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Header_footer/Layout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default Routes;
