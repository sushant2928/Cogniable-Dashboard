import React from "react";
import Details from "./Details/Details.component";
import "./ProfilePanel.style.css";
const ProfilePanel = () => {
  return (
    <div className="profilePanel">
      <header className="profilePanel__header">Profile</header>
      <div className="profilePanel__imageContainer">
        <img
          className="profilePanel__image"
          src="https://www.thewodge.com/wp-content/uploads/2019/11/avatar-icon.png"
          alt="user"
        />
        <p className="profilePanel__name">Sushant</p>
      </div>
      <main>
        <div className="profilePanel__details">
          <Details title="User Details" heading />
          <Details title="Name:" value="Sushant" />
          <Details title="Email:" value="sb.bhutani12@gmail.com" />
          <Details title="Phone Number:" value="" />
          <Details title="Address:" value="" />
        </div>
        <div className="profilePanel__details">
          <Details title="Parent Details" heading />
        </div>
        <div className="profilePanel__details">
          <Details title="Email Notifications" heading />
          <Details title="Session Remainder:" value="Disabled" />
          <Details title="Medical Remainder:" value="Disabled" />
          <Details title="Data Recording Remainder:" value="Disabled" />
        </div>
        <div className="profilePanel__details">
          <Details title="Change Language" heading />
        </div>
      </main>
    </div>
  );
};

export default ProfilePanel;
