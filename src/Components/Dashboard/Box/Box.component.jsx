import React from "react";
import "./Box.style.css";
const Box = ({ title, color }) => {
  return (
    <div className="dashboardBox" style={{ borderTop: `2px solid ${color}` }}>
      <header>{title}</header>
      <main>
        <div className="dashboardBox__noData">
          <i class="far fa-folder-open fa-lg"></i>
          <p className="text">No Data</p>
        </div>
      </main>
    </div>
  );
};

export default Box;
