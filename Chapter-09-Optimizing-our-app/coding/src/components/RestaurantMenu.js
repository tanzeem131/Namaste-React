import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)

    if  (resInfo === null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage,locality} = resInfo?.cards[2]?.card?.card?.info;    
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")} - {costForTwoMessage} </h2>
        <h3>{locality}</h3>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) => <li key={resInfo.id}>{item?.card?.info?.name} - Rs.{(item?.card?.info?.price/100).toFixed(2)}</li>)}
        </ul>
    </div>
  )
}

export default RestaurantMenu;