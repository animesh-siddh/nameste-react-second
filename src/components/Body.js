import React, { useState } from "react";
import { RastaurantCard } from "../utils/constants";
import RestaurantCard from "./Restaurant";
import RastaurantCard from "../utils/constants";

const Body = () => {
  const { restaurants } =
    RastaurantCard?.card?.card?.gridElements?.infoWithStyle;

  const [topRatedRestaurat, setTopRatedRestaurent] = useState(restaurants);


  console.log(restaurants)

  const handleFilter = () => {
    const topFilter = topRatedRestaurat.filter((item) => {
      return item?.info?.avgRating > 4;
    });

    setTopRatedRestaurent(topFilter);
  };

  return (
<>

<button onClick={handleFilter}>Top Retad Restaurent</button>


    <div className="res-container">
      {/* {[
      <RestaurantCard
        key="1"
        name="Meghana Foods"
        cuisines="SouthIndian , salads, desets"
        address="satkar chowk"
        rating="4.4"
      />,
      <RestaurantCard
        key="2"
        name="Food of indians"
        cuisines="Chinise , briverages"
        address="Shanichara bazar"
        rating="3.9"
      />,
    ]} */}

    

      {topRatedRestaurat?.map(
        (resData) => {
          const {
            name,
            avgRating,
            locality,
            areaName,
            cloudinaryImageId,
            cuisines,
            id,
          } = resData?.info;

          return (
            <RestaurantCard
              key={id}
              name={name}
              avgRating={avgRating}
              cuisines={cuisines}
              areaName={areaName}
              cloudinaryImageId={cloudinaryImageId}
              locality={locality}
            />
          );
        }
      )}
    </div>
    </>
  );
};

export default Body;
