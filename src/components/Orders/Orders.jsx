import React, { useState } from "react";
import "./Orders.css";

const Orders = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localStorageOrders = JSON.parse(localStorage.getItem("items"));
    if (localStorageOrders) {
      setItems(localStorageOrders);
    }
  }, []);

  console.log(items);
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
        <div className="cart-orders"></div>
      </div>
    </>
  );
};

export default Orders;
