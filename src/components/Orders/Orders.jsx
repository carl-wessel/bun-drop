import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./Orders.css";
import { Link } from "react-router-dom";

const Orders = () => {
  const { getCart, removeFromCart } = useLocalStorage();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartItems = getCart();
    setCart(cartItems);
    calculateTotalPrice(cartItems);
  }, []);

  const calculateTotalPrice = (cartItems) => {
    let total = 0;
    cartItems.map((item) => {
      total += item.price * item.count;
    });
    setTotalPrice(total);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    const updatedCart = getCart();
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  return (
    <div className="cart-wrapper">
      {cart.length === 0 ? (
        <div className="cart">
          <div className="cart-placeholder">
            <h1>Your Cart is Empty!</h1>
            <Link to="/menu">
              <button>Order Now!</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          {cart.map(({ id, title, price, count, image }) => (
            <div key={id} className="cart-orders">
              <img src={image} alt={title} />
              <div className="food-div">
                <h3>Name</h3>
                <p>{title}</p>
              </div>
              <div className="food-div">
                <h3>Quantity</h3>
                <p>{count}</p>
              </div>
              <div className="food-div">
                <h3>Price</h3>
                <p>${price}</p>
              </div>
              <img
                onClick={() => handleRemoveFromCart(id)}
                id="remove-item"
                src="src/assets/ClearFilter.png"
                alt=""
              />
            </div>
          ))}
          <div className="cart-checkout">
            <div id="checout-button">
              <button>Proceed to Checkout</button>
            </div>
            <div id="total-price">
              <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
