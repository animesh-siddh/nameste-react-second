import { useEffect, useState } from 'react'

const useRestaurantHook = () => {
    const [myRestaurant , setMyRestaurant] = useState([])
  const [topRatedRestaurat, setTopRatedRestaurent] = useState([]);



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



      return {myRestaurant , topRatedRestaurat , setTopRatedRestaurent}

}

export default useRestaurantHook