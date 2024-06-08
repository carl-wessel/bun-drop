import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./Orders.css";
import { Link } from "react-router-dom";
import ProceedToCheckoutButton from "../ProceedToCheckoutButton";
import RemoveButtonForCart from "../RemoveButtonForCart";

const Orders = ({
  showRemoveButton = true,
  showCheckoutButton = true,
  showFoodPrice = true,
}) => {
  const { getCart, removeFromCart, calculateFoodPrice } = useLocalStorage();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
    calculateFoodPrice();
  }, []);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    const updatedCart = getCart();
    setCart(updatedCart);
    calculateFoodPrice(updatedCart);
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
              {showRemoveButton && (
                <RemoveButtonForCart onClick={() => handleRemoveFromCart(id)} />
              )}
            </div>
          ))}
          <div className="cart-checkout">
            {showCheckoutButton && <ProceedToCheckoutButton />}
            {showFoodPrice && (
              <div id="food-price">
                <h3>Food: ${parseFloat(calculateFoodPrice()).toFixed(2)}</h3>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
