import React from "react";
import "./Navbar.style.css";
import Navoption from "./Navoption/Navoption.component";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__navigation">
        <img
          src="https://application.cogniable.us/resources/images/HeaderLogo.png"
          alt="Cogniable"
          className="navbar__logo"
        />
        <Navoption icon={<i class="fas fa-home "></i>} text="Dashboard" />
        <Navoption icon={<i class="fas fa-restroom "></i>} text="Family" />
        <Navoption icon={<i class="fas fa-book "></i>} text="Therapy" />
        <Navoption icon={<i class="far fa-calendar "></i>} text="Schedule" />
        <Navoption icon={<i class="fas fa-history "></i>} text="Daily Vitals" />
        <Navoption icon={<i class="far fa-file-video "></i>} text="Tutorials" />
        <Navoption icon={<i class="fas fa-chart-line "></i>} text="Reports" />
      </div>
      <div className="navbar__navigation wrap">
        <Navoption icon={<i class="far fa-bell "></i>} text="Notification" />
        <Navoption icon={<i class="fas fa-undo "></i>} text="Back" />
        <Navoption icon={<i class="fas fa-sign-out-alt "></i>} text="Logout" />
      </div>
    </div>
  );
};

export default Navbar;
