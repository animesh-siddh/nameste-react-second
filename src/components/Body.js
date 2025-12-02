import React, { useContext, useEffect, useState } from "react";
import { RastaurantCard } from "../utils/constants";
import RestaurantCard, { RestaurantCardPromoted } from "./Restaurant";
import RastaurantCard from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantHook from "../utils/useRestaurantHook";
import UserContext from "../utils/createContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const {setUserInfo} = useContext(UserContext)

  const { myRestaurant, setTopRatedRestaurent, topRatedRestaurat } =
    useRestaurantHook();

  const RestroCardHigerOderComponent = RestaurantCardPromoted();

  console.log("RestaurantCardPromoted", RestaurantCardPromoted());

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
    <div className="m-3 p-1.5">
      <button onClick={handleFilter}>Top Retad Restaurent</button>

      <div className="m-2 p-0.5 border-black ">
        <input
          className="border p-0.5 rounded-lg"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setUserInfo(e.target.value)
          }}
        />{" "}
        <button
          className="bg-green-200 p-3 rounded-lg ml-0.5"
          onClick={() => handleSearchFilter()}
        >
          search
        </button>
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

        <div className="mt-3.5 flex flex-wrap">
          {topRatedRestaurat?.map((resData) => {
            console.log("resData",resData)
            const {
              name,
              avgRating,
              locality,
              areaName,
              cloudinaryImageId,
              cuisines,
              id,
              isOpen,
            } = resData?.info;

            return (
              <div key={id} className="w-[250px] h-[410px] bg-gray-300 m-2.5 items-center rounded-2xl">
                <Link  to={{ pathname: `${"restaurantMenu/" + id}` }}>
                  {" "}
                  {isOpen ? (
                    <RestroCardHigerOderComponent
                      name={name}
                      avgRating={avgRating}
                      cuisines={cuisines}
                      areaName={areaName}
                      cloudinaryImageId={cloudinaryImageId}
                      locality={locality}
                    />
                  ) : (
                    <RestaurantCard
                      name={name}
                      avgRating={avgRating}
                      cuisines={cuisines}
                      areaName={areaName}
                      cloudinaryImageId={cloudinaryImageId}
                      locality={locality}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
