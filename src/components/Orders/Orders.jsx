import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./Orders.css";

const Orders = ({ id, title, price, count, image }) => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="cart">
        <div className="cart-placeholder">
          <img src="" alt="" />
          <h3>Name</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>
        <div className="cart-orders">
          <img src={image} alt="" />
          <h3>{title}</h3>
          <h3>{price}</h3>
          <h3>{count}</h3>
        </div>
      </div>
    </>
  );
};

export default Orders;
