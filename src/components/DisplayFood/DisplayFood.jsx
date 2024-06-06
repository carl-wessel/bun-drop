import React, { useState, useEffect } from "react";
import "./DisplayFood.css";
import FoodItem from "../FoodItem/FoodItem";
import FilterImages from "../FilterImages/FilterImages";

const DisplayFood = () => {
  const [menu, setMenu] = useState([]);
  const [updatedMenu, setUpdatedMenu] = useState([]);
  const [filterString, setFilterString] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setUpdatedMenu(filterFunction(menu, filterString));
  }, [filterString]);

  function fetchData() {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setUpdatedMenu(data);
      });
  }

  function filterFunction(menu, filterString) {
    if (filterString === "") {
      return menu;
    } else {
      const filteredMenu = menu.filter(
        (f) => f.category === filterString.toLowerCase()
      );
      return filteredMenu;
    }
  }
  return (
    <>
      <FilterImages setFilterString={setFilterString} />
      <div className="main-wrapper" id="main-wrapper">
        {updatedMenu.map((item) => (
          <div key={item.id} className="wrapper-card">
            <FoodItem
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.category}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayFood;
