import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./FoodItem.css";

const FoodItem = ({ id, title, price, image, description }) => {
  const { addToCart, removeFromCart, getCart } = useLocalStorage();
  const [cart, setCart] = useState([]);

  function handleAddFoodToCart() {
    addToCart({ id, title, price, image });
    setCart(getCart());
  }

  function handleRemoveFromCart() {
    removeFromCart(id);
    setCart(getCart());
  }

  useEffect(() => {
    setCart(getCart());
  }, []);
  return (
    <div className="food-card">
      <img className="food-image" src={`${image}`} alt="" />
      <h1>{title}</h1>
      <h3>{description}</h3>
      <p>${price}</p>
      {!cart.find((c) => c.id === id) ? (
        <img
          onClick={() => {
            handleAddFoodToCart();
          }}
          className="add-item"
          src="src/assets/icons8-plus-50.png"
          alt=""
        />
      ) : (
        <div className="food-counter">
          <img
            onClick={() => {
              handleRemoveFromCart();
            }}
            src="src/assets/icons8-redminus-60.png"
            alt=""
          />
          <p>{cart.find((c) => c.id === id).count}</p>
          <img
            onClick={() => {
              handleAddFoodToCart();
            }}
            src="src/assets/icons8-greenplus-60.png"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default FoodItem;
