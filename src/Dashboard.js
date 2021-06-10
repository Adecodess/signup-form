import React, { useState } from "react";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Pharmacist from "./components/pharmacist/Pharmacist";
import Doctor from "./components/doctor/Doctor";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="dash-container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Dashboard;
