import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    console.log(props);
    const { name, avgRating, locality, areaName, cloudinaryImageId, cuisines } =
      props;
    return (
      <div className="restaurantcard">
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt=""
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{areaName}</h4>
        <h4>{avgRating}</h4>
      </div>
    );
  };


  export default RestaurantCard