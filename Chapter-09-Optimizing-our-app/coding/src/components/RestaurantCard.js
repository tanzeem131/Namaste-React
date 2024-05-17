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
    <div className="res-card">
      <img className="res-logo" src={CLD_ID + cloudinaryImageId} />
      <div className="resDetails">
        <h3>{name}</h3>
        <h4>
          {avgRating}⭐ {sla.slaString}
        </h4>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
