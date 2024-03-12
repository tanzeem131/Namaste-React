import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurantList = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setrestaurantList(filterRestaurantList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((res) => {
          return <RestaurantCard key={res.data.id} {...res.data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
