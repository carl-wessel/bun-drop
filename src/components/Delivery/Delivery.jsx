import React from "react";
import "./Delivery.css";
const Delivery = () => {
  function getRandomTimeInterval(min1, max1, min2, max2) {
    const startTime = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    const endTime = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

    if (startTime > endTime) {
      return getRandomTimeInterval(min1, max1, min2, max2);
    }

    return [startTime, endTime];
  }

  const [start, end] = getRandomTimeInterval(15, 20, 30, 40);

  return (
    <div>
      <h1>Time until delivery: {`${start} - ${end} minutes`}</h1>
    </div>
  );
};

export default Delivery;
