import React from "react";
import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar ">
      <div className="wrapper">
        <div className="left">
          <a href="#contact" className="logo">
            Genius
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>(+374) 33 33 33 33</span>
          </div>
        </div>
        <div className="itemContainer">
          <Mail className="icon" />
          <span>argishtikhurshudyan@gmail.com</span>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line 1"></span>
          <span className="line 2"></span>
          <span className="line 3"></span>
        </div>
      </div>
    </div>
  );
}
