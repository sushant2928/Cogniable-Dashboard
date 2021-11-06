import React from "react";
import "./Details.style.css";

const Details = ({ title, value, heading }) => {
  return (
    <div className="details">
      <p className={`${heading && "heading"}`}>{title}</p>
      <p style={heading && { color: "blue", cursor: "pointer" }}>
        {heading ? <i class="far fa-edit"></i> : value}
      </p>
    </div>
  );
};

export default Details;
