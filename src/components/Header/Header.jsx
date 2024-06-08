import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <h1>The Fastest and Healthiest delivery in</h1>
        <h1 className="your-city">Your City</h1>
        <p className="header-text-desc">
          We pride ourselves in delivering the best food to your doorstep in
          record time. Whether it's a quick lunch break or a cozy dinner at
          home, we ensure that every meal is prepared with care and delivered
          fresh to you. Experience the convenience and delight of our speedy
          delivery service today!
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
      <div className="header-wrapper">
        <div className="items-wrapper-text">
          <h1>Our most popular foods!</h1>
        </div>
        <div className="items-wrapper">
          <div className="item">
            <img src="src/assets/alfredo.png" alt="" />
            <h2>Fettuccine Alfredo</h2>
            <p>Price: $13.99</p>
          </div>
          <div className="item">
            <img src="src/assets/burger-8.png" alt="" />
            <h2>BBQ Bacon Burger</h2>
            <p>Price: $9.99</p>
          </div>
          <div className="item">
            <img src="src/assets/garlic-fries.png" alt="" />
            <h2>Garlic Parmesan Fries</h2>
            <p>Price: $5.99</p>
          </div>
          <div className="item">
            <img src="src/assets/four-cheese.png" alt="" />
            <h2>Four Cheese Pizza</h2>
            <p>Price: $8.49</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
