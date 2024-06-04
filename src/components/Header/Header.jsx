import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <h1>The Fastest and Healthiest delivery in</h1>
        <h1 className="your-city">Your City</h1>
        <p className="header-text-desc">
          We pride ourselves in delivering the best food to your doorstep in
          record time
        </p>
        <button>Order Now</button>
      </div>

      <div className="items-wrapper">
        <div className="item">
          <img src="src/assets/alfredo.png" alt="" />
          <h2>Fettuccine Alfredo</h2>
          <p>Price: $13.99</p>
          <p>Creamy fettuccine Alfredo with Parmesan cheese and parsley.</p>
          <button>Add to Cart</button>
        </div>
        <div className="item">
          <img src="src/assets/burger-8.png" alt="" />
          <h2>BBQ Bacon Burger</h2>
          <p>Price: $9.99</p>
          <p>
            Beef burger with BBQ sauce, crispy bacon, cheddar cheese, and onion
            rings.
          </p>
          <button>Add to Cart</button>
        </div>
        <div className="item">
          <img src="src/assets/alfredo.png" alt="" />
          <h2>Fettuccine Alfredo</h2>
          <p>Price: $13.99</p>
          <p>Creamy fettuccine Alfredo with Parmesan cheese and parsley.</p>
          <button>Add to Cart</button>
        </div>
        <div className="item">
          <img src="src/assets/alfredo.png" alt="" />
          <h2>Fettuccine Alfredo</h2>
          <p>Price: $13.99</p>
          <p>Creamy fettuccine Alfredo with Parmesan cheese and parsley.</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
