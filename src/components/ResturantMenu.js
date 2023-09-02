import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API } from "../utils/contants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { FaStar } from "react-icons/fa";
const ResturantMenu = () => {
  // const [resMenu, setResMenu] = useState([]);
  //   const[listMenu,setListMenu] = useState([]);
  const { resID } = useParams();
  const resMenu = useRestaurantMenu(resID);
  console.log(resID);
  // useEffect(() => {
  //   fetchResturantData();
  // }, []);

  // const fetchResturantData = async () => {
  //   const data = await fetch(
  //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`

  //   );
  //   const res = await data.json();
  //   console.log(res);
  //   setResMenu(res.data);
  // };

  if (resMenu === null) {
    return <Shimmer />;
  }
  console.log(resMenu?.cards[0]?.card?.card?.info);

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, locality, areaName, city } =
    resMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="m-8">
      <div className="flex flex-row justify-around">
        <div className="flex flex-col items-start">
          <h1 className=" text-lg font-bold">{name}</h1>
          <p>{locality},{areaName},{city}</p>
          <h3 className=" text-lg font-normal">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
        </div>
        <div className="flex flex-col border-2 border-gray-200 rounded-lg px-2 h-[60px] ">
          <h4 className="flex flex-row justify-center items-center px-1"><FaStar color='green'></FaStar>{avgRating}</h4>
          <div className="flex border-1 border-b-2 border-x-blue-800	"></div>
          <h4 className=" text-sm font-light">{totalRatingsString}</h4>
        </div>
        <div className="flex border-1 border-b-2 border-x-blue-800	"></div>
      </div>
      <h3 className="flex flex-row justify-center text-lg font-bold">Recommanded</h3>
      <div className="flex flex-row justify-evenly">
        
      <ul className="flex flex-col ">
        {itemCards.map((obj) => {
          return (
            <>
              <li  className="flex flex-row justify-center items-center"key={obj.card.info.id}>
                {obj.card.info.name} - {" Rs."}
                {obj.card.info.defaultPrice / 100 || obj.card.info.price / 100}
                <img className=" flex flex-row justify-end w-[100px] h-[60px] mx-2 my-2 border-2  rounded-lg" src={CDN_URL+obj.card.info.imageId}/>

              </li>
            </>
          );
        })}
      </ul>
      </div>
    </div>
  );
};
export default ResturantMenu;
