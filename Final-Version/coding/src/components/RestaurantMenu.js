import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuList from "./RestaurantMenuList";
import { useState, useEffect } from "react";
import ItemlistShimmer from "./ItemlistShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  }, []);

  const { resInfo, fetchError } = useRestaurantMenu(
    resId,
    location.lat,
    location.lng
  );
  const [showIndex, setShowIndex] = useState(null);

  if (error || fetchError) return <div>Error: {error || fetchError}</div>;
  if (resInfo === null) return <ItemlistShimmer />;

  const info = resInfo?.cards?.[2]?.card?.card?.info;

  if (!info) {
    return <div>Unable to fetch restaurant information</div>;
  }

  const { name, cuisines, costForTwoMessage, locality } = info;

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleSetShowIndex = (index) => {
    setShowIndex(showIndex === index ? null : index);
  };

  return (
    <div className="mb-96">
      <div className="text-center">
        <h1 className="text-3xl font-bold my-6">{name}</h1>
        <h2 className="text-emerald-500 font-semibold">
          {cuisines.join(" | ")}
          <a className="mx-2 bg-yellow-300 px-2 py-1 rounded-xl font-semibold text-black">
            {costForTwoMessage}
          </a>
        </h2>
        <h2 className="font-semibold">{locality}</h2>
        {categories?.map((category, index) => (
          <RestaurantMenuList
            key={category?.card?.card?.title}
            data={category.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => handleSetShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
