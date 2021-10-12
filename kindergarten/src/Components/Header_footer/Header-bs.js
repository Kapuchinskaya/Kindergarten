import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Resources/images/icon.png";

const HeaderBS = () => {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top navbar-customization">
      <div className="container-fluid">
        <Link to={"/"} className="logo-wraper">
          <img src={logo} alt="logo" className="headerLogo" />
        </Link>
        <button
          className="navbar-toggler toggler-customization"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link
              className="nav-link active link-customization"
              to="/actualnosci/newsPage"
            >
              aktualności
            </Link>
            <Link
              className="nav-link active link-customization"
              to="/dla_rodzicow"
            >
              dla rodziców
            </Link>
            <Link className="nav-link active link-customization" to="/galeria">
              galeria
            </Link>
            <Link className="nav-link active link-customization" to="/kontakty">
              kontakty
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBS;
