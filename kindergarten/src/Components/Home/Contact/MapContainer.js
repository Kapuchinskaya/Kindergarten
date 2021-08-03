import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "400px",
  // height: "300px",
};

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 51.1078852, lng: 17.0385376 }}
    >
      <Marker position={{ lat: 51, lng: 17 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCDH0tqhJfsV-0L8wXIToE5V-5SlfIMvgg",
})(MapContainer);
