import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <img src="src/assets/logo color.png" alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/menu">
          <li>Menu</li>
        </Link>

        <Link to="/about-us">
          <li>About us</li>
        </Link>
      </ul>
      <div className="navbar-right">
        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img className="cart-icon" src="src/assets/Cart.png" alt="" />
          </Link>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
