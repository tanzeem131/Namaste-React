import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuList from "./RestaurantMenuList";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex]=useState(null);

    const dummy = "props drilling"

    if  (resInfo === null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage,locality} = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    const handleSetShowIndex = (index) => {
        setShowIndex(showIndex === index ? null : index);
    };

    return (
    <div className="text-center">
        <h1 className="text-3xl font-bold my-6">{name}</h1>
        <h2 className="text-emerald-500 font-semibold">{cuisines.join(" | ")}<a className="mx-2 bg-yellow-300 p-2 rounded-xl font-semibold text-black">{costForTwoMessage}</a></h2>
        <h2 className="font-semibold">{locality}</h2>
        {categories.map((category,index)=>(
            //Controlled component
            <RestaurantMenuList key={category?.card?.card?.title} data={category.card?.card} showItem={ index === showIndex ? true : false} setShowIndex={()=>handleSetShowIndex(index)} dummy={dummy}/>
        ))}
    </div>
  )
}

export default RestaurantMenu;