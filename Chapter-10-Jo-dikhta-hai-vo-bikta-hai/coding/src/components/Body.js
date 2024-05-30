import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // local state variable = superpowerful variable
  const [restaurantData, setRestaurantList] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);

  const [textSearch, settextSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>No internet!!!!!!!!!!</h1>

  // conditional rendering
  return restaurantData.length === 0 ? <Shimmer/> :
   (
    <div className="body">
      <div className="filter">
        <div className="searchContainer">
          <input type="text" className="search" value={textSearch} onChange={(e)=>{
            settextSearch(e.target.value);
          }}></input>
          <button className="search-btn" onClick={()=>{
            const filteredRestaurants = restaurantData.filter( (res) =>
                res.info.name.toLowerCase().includes(textSearch.toLowerCase()) ||
                res.info.locality.toLowerCase().includes(textSearch.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}>Search</button>
        </div>
        <div className="filter-div">
          <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filterRestaurantList = restaurantData.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filterRestaurantList);
          }}
        >
          Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((res) => {
          return <Link key={res.info.id} to={"/restaurantmenu/" + res.info.id}><RestaurantCard resData={res} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
