import React, { useState } from "react";
import RestaurantDetails from "./ResturantDetails";

function Resturant(props) {
  const { index, name, location, rate, onDelete  , link} = props;
  const [currentRate, setCurrentRate] = useState(rate);

  const increaseRate = () => {
    setCurrentRate((prevRate) => prevRate + 1);
  };

  const decreaseRate = () => {
    setCurrentRate((prevRate) => Math.max(prevRate - 1, 0));
  };

  return (
    <a href={link} >
      <div className="restaurant" key={index}>
        <div className="name-loc">
          <h2>{name}</h2>
          <h3>{location}</h3>

          <button onClick={onDelete}>Delete</button>
        </div>

        <div className="rate">
          <button onClick={increaseRate} style={{ backgroundColor: "#f9f9f9" }}>
            increase
          </button>
          <h2>{currentRate}</h2>
          <button onClick={decreaseRate} style={{ backgroundColor: "#f9f9f9" }}>
            decrease
          </button>
        </div>
      </div>
    </a>
  );
}

export default Resturant;
