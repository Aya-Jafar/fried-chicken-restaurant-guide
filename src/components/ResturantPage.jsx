import React, { useState } from "react";
import Resturant from "./Resturant";
import Input from "./Input";

function ResturantPage() {
  let intialResturants = [
    { name: "Meal king", location: "baghdad", rate: 5 },
    { name: "Meal king", location: "baghdad", rate: 5 },
  ];

  const [updatedResturants, setUpdatedResturants] = useState(intialResturants);

  const addResturant = (newRestaurant) => {
    setUpdatedResturants([...updatedResturants, newRestaurant]);
  };


  const deleteRestaurant = (index) => {
    const updatedList = updatedResturants.filter((_, i) => i !== index);
    setUpdatedResturants(updatedList);
  };


  return (
    <>
      <Input onSubmit={addResturant} />

      {updatedResturants.map((res, index) => {
        return (
          <Resturant
            key={index}
            name={res.name}
            location={res.location}
            rate={res.rate}
            onDelete={()=>deleteRestaurant(index)}
          />
        );
      })}
    </>
  );
}

export default ResturantPage;