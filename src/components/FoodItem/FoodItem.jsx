import React, { useState, useEffect } from "react";
import "./FoodItem.css";

const FoodItem = (props) => {
  const [foodCount, setFoodCount] = useState(0);
  const [orderStorage, setOrderStorage] = useState({});

  async function addFoodToCart() {
    const orderObject = {
      count: foodCount,
      title: props.title,
      price: props.price,
      image: props.image,
    };
    setOrderStorage(orderObject);

    await localStorage.setItem("orders", JSON.stringify(orderStorage));
  }
  console.log(foodCount);
  console.log(orderStorage);

  return (
    <div className="food-card">
      <img className="food-image" src={`${props.image}`} alt="" />
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <p>${props.price}</p>
      {!foodCount ? (
        <img
          onClick={() => {
            setFoodCount(foodCount + 1);
            addFoodToCart();
          }}
          className="add-item"
          src="src/assets/icons8-plus-50.png"
          alt=""
        />
      ) : (
        <div className="food-counter">
          <img
            onClick={() => {
              setFoodCount(foodCount - 1);
              addFoodToCart();
            }}
            src="src/assets/icons8-redminus-60.png"
            alt=""
          />
          <p>{foodCount}</p>
          <img
            onClick={() => {
              setFoodCount(foodCount + 1);
              addFoodToCart();
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
