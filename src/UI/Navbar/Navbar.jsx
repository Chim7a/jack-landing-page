import React from "react";
import { TbWorld } from "react-icons/tb";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="logo">
        <h1>JACK</h1>
      </div>

      <div className="lang">
        <span>
          <TbWorld />
        </span>
        <p>ENGLISH</p>
      </div>
    </header>
  );
};

export default Navbar;
