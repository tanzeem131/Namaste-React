import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)

    if  (resInfo === null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage,locality} = resInfo?.cards[2]?.card?.card?.info;    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);

    return (
    <div className="text-center">
        <h1 className="text-3xl font-bold my-6">{name}</h1>
        <h2 className="text-emerald-500 font-semibold">{cuisines.join(" | ")} <a className="mx-2 bg-yellow-300 p-2 rounded-xl font-semibold text-black">{costForTwoMessage}</a></h2>
        <h2 className="font-semibold">{locality}</h2>
        {/* <h2>Menu</h2>
        <ul>
            {itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{(item?.card?.info?.price/100).toFixed(2)}</li>)}
        </ul> */}
    </div>
  )
}

export default RestaurantMenu;