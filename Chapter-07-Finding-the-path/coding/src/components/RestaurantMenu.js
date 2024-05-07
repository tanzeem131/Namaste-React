import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    }

    const {name,costForTwo,locality} = resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info || {};

    return resInfo === null ? <Shimmer/> : (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{costForTwo}</h2>
        <h2>{locality}</h2>
    </div>
  )
}

export default RestaurantMenu;