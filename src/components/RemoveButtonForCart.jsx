import React from "react";

const RemoveButtonForCart = ({ onClick }) => (
  <img
    onClick={onClick}
    id="remove-item"
    src="src/assets/ClearFilter.png"
    alt="Remove item"
  />
);

export default RemoveButtonForCart;
