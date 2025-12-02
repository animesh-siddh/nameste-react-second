import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/createContext";

const RestaurantCard = (props) => {
  const data = useContext(UserContext);

  console.log("data", data);

  const { name, avgRating, locality, areaName, cloudinaryImageId, cuisines } =
    props;
  return (
    <div className="items-center ">
      <img
        className="h-[250px] p-2.5 rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <div className="justify-center items-center p-2.5">
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{areaName}</h4>
        <h4>{avgRating}</h4>
        <h4>{data.loggedInUserName}</h4>
      </div>
    </div>
  );
};



export default RestaurantCard;

export const RestaurantCardPromoted = () => {
  return (props) => {
    return (
      <div>
        <label htmlFor="">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
