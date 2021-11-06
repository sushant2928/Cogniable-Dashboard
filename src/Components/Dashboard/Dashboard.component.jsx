import React from "react";
import Box from "./Box/Box.component";
import "./Dashboard.style.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <p className="selected">My Dashboard</p>
        <p>My Profile</p>
      </header>
      <main className="dashboard__content">
        <Box title="Appointments" data={[]} color="red" />
        <Box title="Tasks" data={[]} color="blue" />
        <Box title="Graph" data={[]} color="green" />
        <Box title="Chat Messages" data={[]} color="yellow" />
        <Box title="Long Term Goals" data={[]} color="orange" />
        <Box title="Short Term Goals" data={[]} color="purple" />
        <Box title="Sessions" data={[]} color="brown" />
        <Box title="Daily Vitals" data={[]} color="black" />
      </main>
    </div>
  );
};

export default Dashboard;
