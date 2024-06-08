import React from "react";
import { Link } from "react-router-dom";

const ProceedToCheckoutButton = () => (
  <Link to="/checkout">
    <button>Proceed to Checkout</button>
  </Link>
);

export default ProceedToCheckoutButton;
