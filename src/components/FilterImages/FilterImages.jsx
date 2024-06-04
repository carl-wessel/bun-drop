import React, { useState } from "react";
import { menu_list } from "../../assets/assets";
import "./FilterImages.css";

function FilterImages({ setFilterString }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index, menuName) => {
    setSelectedItem(index);
    setFilterString(menuName);
  };

  return (
    <div className="food-item">
      {menu_list.map((menu, index) => (
        <div
          key={index}
          className={
            "food-item-container" + (selectedItem === index ? " selected" : "")
          }
          onClick={() => handleItemClick(index, menu.menu_name)}
        >
          <img
            className="food-item-image"
            src={menu.menu_image}
            alt={menu.menu_name}
          />
          <p>{menu.menu_name}</p>
        </div>
      ))}
      <img
        className="clearFilterX"
        src="src/assets/ClearFilter.png"
        alt=""
        onClick={() => handleItemClick(null, "")}
      />
    </div>
  );
}

export default FilterImages;
