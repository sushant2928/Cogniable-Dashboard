import React from "react";
import "./Navoption.style.css";

const Navoption = ({ icon, text }) => {
  return (
    <div className="navoption">
      <div>{icon}</div>
      <p className="navoption__text">{text}</p>
    </div>
  );
};

export default Navoption;
