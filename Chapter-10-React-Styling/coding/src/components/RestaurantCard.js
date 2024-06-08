import { CLD_ID } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    locality,
    sla,
    costForTwo,
    avgRating,
  } = resData?.info;

  return (
    <div className="w-[275] p-2 hover:bg-gray-100 hover:rounded-lg hover:transform hover:scale-90 transition-transform duration-300">
      <img className="rounded-lg" src={CLD_ID + cloudinaryImageId} />
      <div className="p-2">
        <h3 className="font-semibold my-1 text-lg">{name}</h3>
        <h4>{avgRating}⭐ {sla.slaString}</h4>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
