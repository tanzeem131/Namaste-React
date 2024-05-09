import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(RESTAURANT_MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    if  (resInfo === null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage,locality} = resInfo?.cards[2]?.card?.card?.info;    

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")} - {costForTwoMessage} </h2>
        <h3>{locality}</h3>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item)=> <li key={resInfo.id}>{item?.card?.info?.name} - Rs.{(item?.card?.info?.price/100).toFixed(2)}</li>)}
        </ul>
    </div>
  )
}

export default RestaurantMenu;