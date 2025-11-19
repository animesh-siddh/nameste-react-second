import React from "react";
import { ResMenu } from "../utils/constants";


const RestaurantMenu = () => {
  return (
    <div>
      {ResMenu.map((item) => {
        const { name, price, category ,id} = item?.card?.info;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <h2>{category}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
