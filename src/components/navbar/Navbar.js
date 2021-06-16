import React, { useState } from "react";

import "./Navbar.css";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  const [toggle, setToggle] = useState(2);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
        <Link to="/pharmacist">Pharmacist</Link>
        <Link to="/doctor" onClick={() => toggleTab(3)}>
          Doctor
        </Link>
        <Link
          to="/main"
          onClick={() => toggleTab(1)}
          className={toggle === 1 ? "active_link" : ""}
        >
          Admin
        </Link>

        <Link to="/driver">Driver</Link>

        <Link to="/patient">Patient</Link>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
        <a href="#">
          <i className="fa fa-clock-o"></i>
        </a>
        <a href="#">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
