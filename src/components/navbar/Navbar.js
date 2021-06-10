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
        <Link
          to="/pharmacist"
          // className={toggle === 2 ? "active_link" : ""}
          // onClick={() => toggleTab(2)}
        >
          Pharmacist
        </Link>
        <Link
          to="/doctor"
          // className={"!/doctor" ? "active_link navbar__left" : "active_link"}
          onClick={() => toggleTab(3)}
        >
          Doctor
        </Link>
        <Link
          to="/dashboard"
          onClick={() => toggleTab(1)}
          className={toggle === 1 ? "active_link" : ""}
        >
          Admin
        </Link>

        <Link
          to="/driver"
          // className={toggle === 4 ? "active_link" : ""}
          // onClick={() => toggleTab(4)}
        >
          Driver
        </Link>

        <Link
          to="/patient"
          // className={toggle === 5 ? "active_link" : ""}
          // onClick={() => toggleTab(5)}
        >
          Patient
        </Link>
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
