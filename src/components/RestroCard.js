const styleCard = {
  backgroundColor: "white",
};

const RestroCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
    const {deliveryTime} = resData?.info?.sla;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="list-items">
        <h4>{avgRating}</h4>
        <h4>{costForTwo }</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};
import { CDN_URL } from "../utils/contants";
export default RestroCard;
