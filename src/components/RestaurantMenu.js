import React, { useState } from "react";
import { CDN_URL, ResMenu } from "../utils/constants";

const RestaurantMenu = () => {
  const [show , setShow] = useState(true)
  console.log("ResMenu", ResMenu);

  return (
    <div className="w-3/4 bg-gray-200 mx-auto mt-3.5" >
      <div onClick={()=>setShow(!show)}  className="flex justify-between p-2.5 bg-gray-300 cursor-pointer" >
      <h1 className="font-bold text-2xl">Recommended</h1>
      <span>⬇️</span>
      </div>

    {show &&  ResMenu.map((item) => {
        const { name, price, category, id ,description , imageId} = item?.card?.info;
        return (
          <div key={id} className="border-b-2 border-gray-300 p-2.5 mt-0.5 flex justify-between">
<div className="">
            <h1 className="text-[18px] font-medium">{name}</h1>
            <h2>{price}</h2>
            <h2>{category}</h2>
            <p>{description}</p>
            </div>
            <div className="w-[100] h-[100]">
              <img className="w-[100] h-[100]" src={CDN_URL+imageId} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
