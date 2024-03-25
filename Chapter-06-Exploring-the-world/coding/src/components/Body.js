import restaurantList from "../utils/mockData"; // Change the import name
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantData, setRestaurantList] = useState(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448869999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
  };

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
