import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantData, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.7923123251677&lng=86.41775261610746&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);

    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filterRestaurantList = restaurantData.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filterRestaurantList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantData?.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
