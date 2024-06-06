import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState("/");

  const [whereAmI, setWhereAmI] = useState(window.location.pathname);
  useEffect(() => {
    setNavbar(whereAmI);
  }, [whereAmI]);

  return (
    <div className="navbar">
      <img src="src/assets/logo color.png" alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to="/">
          <li
            onClick={() => setNavbar("/")}
            className={navbar === "/" ? "active" : ""}
          >
            Home
          </li>
        </Link>

        <Link to="/menu">
          <li
            onClick={() => setNavbar("/menu")}
            className={navbar === "/menu" ? "active" : ""}
          >
            Menu
          </li>
        </Link>

        <Link to="/cart">
          <li
            onClick={() => setNavbar("/cart")}
            className={navbar === "/cart" ? "active" : ""}
          >
            Orders
          </li>
        </Link>
        <Link to="/about-us">
          <li
            onClick={() => setNavbar("/about-us")}
            className={navbar === "/about-us" ? "active" : ""}
          >
            About us
          </li>
        </Link>
      </ul>
      <div className="navbar-right">
        <div className="navbar-cart-icon">
          <img className="cart-icon" src="src/assets/Cart.png" alt="" />
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
