import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Pharmacist from "./components/pharmacist/Pharmacist";
import Doctor from "./components/doctor/Doctor";
import Patient from "./components/patient/Patient";
import Driver from "./components/driver/Driver";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/main">
          <Dashboard />
        </Route>

        <Route path="/doctor">
          <Doctor />
        </Route>
        <Route path="/pharmacist">
          <Pharmacist />
        </Route>
        <Route path="/driver">
          <Driver />
        </Route>
        <Route path="/patient">
          <Patient />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
