const styleCard = {
  backgroundColor: "grey",
};

const RestroCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
    const {deliveryTime} = resData?.info?.sla;
  return (
    <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img className="rounded-lg px-2 w-[280px] h-[170px]" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
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
