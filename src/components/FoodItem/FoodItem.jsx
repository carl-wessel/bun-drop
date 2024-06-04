import React, { useState } from "react";
import "./FoodItem.css";

const FoodItem = (props) => {
  const [foodCount, setFoodCount] = useState(0);
  return (
    <div className="food-card">
      <img className="food-image" src={`${props.image}`} alt="" />
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <p>${props.price}</p>
      {!foodCount ? (
        <img
          onClick={() => setFoodCount((count) => count + 1)}
          className="add-item"
          src="src/assets/icons8-plus-50.png"
          alt=""
        />
      ) : (
        <div className="food-counter">
          <img
            onClick={() => setFoodCount((count) => count - 1)}
            src="src/assets/icons8-redminus-60.png"
            alt=""
          />
          <p>{foodCount}</p>
          <img
            onClick={() => setFoodCount((count) => count + 1)}
            src="src/assets/icons8-greenplus-60.png"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default FoodItem;
