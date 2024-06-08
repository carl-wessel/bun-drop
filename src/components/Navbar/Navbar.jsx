import React, { useState, useEffect } from "react";
import "./Navbar.css";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { getCart } = useLocalStorage();
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const cart = getCart();
    setCartItems(cart);
  }, [cartItems]);

  const isConfirmationPage = location.pathname === "/confirmation";

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
          {!isConfirmationPage && cartItems.length > 0 && (
            <div className="dot"></div>
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
