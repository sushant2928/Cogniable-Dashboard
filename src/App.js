import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard.component";
import Navbar from "./Components/Navbar/Navbar.component";
import ProfilePanel from "./Components/Profile Panel/ProfilePanel.component";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <ProfilePanel />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
