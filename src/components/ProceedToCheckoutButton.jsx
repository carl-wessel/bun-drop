import React from "react";
import { Link } from "react-router-dom";

const ProceedToCheckoutButton = () => (
  <div>
    <Link to="/checkout">
      <button>Proceed to Checkout</button>
    </Link>
  </div>
);

export default ProceedToCheckoutButton;
