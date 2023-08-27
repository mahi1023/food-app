const styleCard = {
  backgroundColor: "white",
};

const RestroCard = (props) => {
  const { resData } = props;
  const { imgLink, name, cusine, avgRating, costforTwo, deliveryTime } =
    resData;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={CDN_URL + imgLink} />
      <h3>{name}</h3>
      <h4>{cusine.join(", ")}</h4>
      <div className="list-items">
        <h4>{avgRating} stars</h4>
        <h4>{costforTwo / 100}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};
import { CDN_URL } from "../utils/contants";
export default RestroCard;
