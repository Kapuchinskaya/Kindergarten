import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Resources/images/icon-white.png";

const footerContent = [
  {
    name: "Lokalizacja",
    descriptionOne: "ul. Podhalańska 4",
    descriptionTwo: "34-700 Rabka-Zdrój",
  },
  {
    name: "Godziny otwarcia",
    descriptionOne: "Poniedziałek - Piątek",
    descriptionTwo: "8:00 – 16:00",
  },
  {
    name: "Kontakt",
    descriptionOne: "tel. 11 22 33 444",
    descriptionTwo: "e-mail: kontakt@przedszkola.pl",
  },
];

const Footer = () => {
  const footerSections = () => {
    return footerContent.map((section, index) => (
      <div className="footer-section" key={index}>
        <div className="footer-section-head">{section.name}</div>
        <div className="footer-section-description">
          {section.descriptionOne}
        </div>
        <div className="footer-section-description">
          {section.descriptionTwo}
        </div>
      </div>
    ));
  };
  return (
    <footer>
      <Link to={"/"}>
        <img src={logo} alt="logo" className="headerLogo" />
      </Link>
      <div className="footer-columns"> {footerSections()}</div>
    </footer>
  );
};

export default Footer;
