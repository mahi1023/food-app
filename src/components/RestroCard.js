import { FaClock, FaStar } from "react-icons/fa";
const styleCard = {
  backgroundColor: "grey",
};

const RestroCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    
  return (
    <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200 relative bottom-[30px] left-0 right-0 " >
      <img className="rounded-lg px-2 w-[280px] h-[170px]" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="flex flex-row  justify-start my-2">
        <h4 className="flex flex-row justify-center items-center px-1"><FaStar color ='green'></FaStar>{avgRating}</h4>
        
        <h4 className="flex flex-row justify-center items-center px-8"><FaClock color="gray"></FaClock> {deliveryTime} mins</h4>
      </div>
      <h4 className=""><label className=" text-lg font-bold">Cost </label> {costForTwo }</h4>
    </div>
  );
};
import { CDN_URL } from "../utils/contants";
export default RestroCard;
