import React from "react";

const MapContainerWithoutApi = () => {
  return (
    <div className="map-responsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.518795605!2d2.7814043174438443!3d48.86738580000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61d19ca7ae2bd%3A0x57faf8cb6310e660!2z0JTQuNGB0L3QtdC50LvQtdC90LQg0J_QsNGA0LjQtg!5e0!3m2!1sru!2spl!4v1627647978305!5m2!1sru!2spl"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default MapContainerWithoutApi;
