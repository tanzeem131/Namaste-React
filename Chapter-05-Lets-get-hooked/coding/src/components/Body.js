import restaurantList from "../utils/mockData"; // Change the import name
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [restaurantData, setRestaurantList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filterRestaurantList = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setRestaurantList(filterRestaurantList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantData.map((res) => {
          return <RestaurantCard key={res.data.id} {...res.data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
