import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // state variable restaurantsList with data resList and has a function setRestaurantsList
    // we use hooks for creating powerful state variable which keeps sync with UI and data
    const [restaurantsList, setRestaurantsList] = useState(resList); // This is array destructuring
    // we can even write like
    // const arr = useState(resList);
    // restaurantsList = arr[0];
    // setRestaurantsList(arr[1]);
    return (
        <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = resList.filter(res => res.info.avgRating >= 4); 
                // we keep the filtered list in the setRestaurantsList function to update the restaurantsList 
                // to keep sync with UI and data
                setRestaurantsList(filteredList);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {restaurantsList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
        </div>
        </div>
    )
}

export default Body;