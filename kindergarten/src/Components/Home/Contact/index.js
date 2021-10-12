import React from "react";
// import MapContainer from "./MapContainer";
import MapContainerWithoutApi from "./MapContainerWithoutApi";

const Contacts = () => {
  return (
    <div className="contacts-wrapper">
      <h2>Kontakty</h2>
      <div className="contacts-body">
        <div className="contacts-column">
          <h3>Organ Prowadzący:</h3>
          <p>Pellentesque eget urna magna. </p>
          <p>Proin accumsan volutpat elit sed dapibus. </p>
          <p>tel. 11 22 333 444 </p>
          <p>e-mail. kapuchinskaya.study@gmail.com </p>
        </div>
        <div className="contacts-column map">
          <MapContainerWithoutApi />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
