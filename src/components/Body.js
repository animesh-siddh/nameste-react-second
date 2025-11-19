import React, { useEffect, useState } from "react";
import { RastaurantCard } from "../utils/constants";
import RestaurantCard from "./Restaurant";
import RastaurantCard from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const { restaurants } =
    RastaurantCard?.card?.card?.gridElements?.infoWithStyle;

  const [topRatedRestaurat, setTopRatedRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [myRestaurant , setMyRestaurant] = useState([])

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();


    const { restaurants } =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle;

    setTopRatedRestaurent(restaurants);
    setMyRestaurant(restaurants)
  };

  const handleFilter = () => {
    const topFilter = topRatedRestaurat.filter((item) => {
      return item?.info?.avgRating > 4;
    });

    setTopRatedRestaurent(topFilter);
  };

  if (topRatedRestaurat?.length === 0) {
    return <Shimmer />;
  }

  const handleSearchFilter = () => {
    const data = myRestaurant.filter((item) => {

      return item.info.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setTopRatedRestaurent(data);
  };

  return (
    <>
      <button onClick={handleFilter}>Top Retad Restaurent</button>

      <div>
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />{" "}
        <button onClick={() => handleSearchFilter()}>search</button>
      </div>

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

        {topRatedRestaurat?.map((resData) => {
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
        <Link  key={id} to={{pathname:`${"restaurantMenu/"+id}`}}>    <RestaurantCard
             
              name={name}
              avgRating={avgRating}
              cuisines={cuisines}
              areaName={areaName}
              cloudinaryImageId={cloudinaryImageId}
              locality={locality}
            />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
