import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API } from "../utils/contants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { FaStar } from "react-icons/fa";
import RestaurantCategory from "./RestaurantCategory";

const ResturantMenu = () => {
  const { resID } = useParams();
  const resMenu = useRestaurantMenu(resID);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    locality,
    areaName,
    city,
  } = resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((obj)=>{
      return obj.card?.card?.["@type"] ==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
    })
    // console.log(categories)
  return (

    <div className="text-center">
            <div className="flex flex-row justify-around px-4 my-4">
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-bold">{name}</h1>
          <p>
            {locality}, {areaName}, {city}
          </p>
          <h3 className="text-lg font-normal">
            {cuisines.join(", ")} - {costForTwoMessage}
          </h3>
        </div>
        <div className="flex flex-col border-2 border-gray-200 rounded-lg px-2 sm:h-[70px] md:h-[60px] lg:h-[50px]">
          <h4 className="flex flex-row justify-center items-center px-1">
            <FaStar color="green" />
            {avgRating}
          </h4>
          <div className="flex border-1 border-b-2 border-x-blue-800" />
          <h4 className="text-sm font-light">{totalRatingsString}</h4>
        </div>
      </div>
      <div className="w-6/12 m-auto border-1 border-b-2 border-x-blue-800" />
{/* s      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(',')}
      </p> */}
      {/* create a accordain */}
      {categories.map((category)=>{
       return  <RestaurantCategory key={category?.card?.card.title} resCategory = {category?.card?.card}></RestaurantCategory>
      })}
    </div>

//     <div className="m-8">
      // <div className="flex flex-row justify-between px-4">
      //   <div className="flex flex-col items-start">
      //     <h1 className="text-lg font-bold">{name}</h1>
      //     <p>
      //       {locality}, {areaName}, {city}
      //     </p>
      //     <h3 className="text-lg font-normal">
      //       {cuisines.join(", ")} - {costForTwoMessage}
      //     </h3>
      //   </div>
      //   <div className="flex flex-col border-2 border-gray-200 rounded-lg px-2 sm:h-[70px] md:h-[60px] lg:h-[50px]">
      //     <h4 className="flex flex-row justify-center items-center px-1">
      //       <FaStar color="green" />
      //       {avgRating}
      //     </h4>
      //     <div className="flex border-1 border-b-2 border-x-blue-800" />
      //     <h4 className="text-sm font-light">{totalRatingsString}</h4>
      //   </div>
      // </div>
      // <div className="flex flex-col h-[1px] border-2 border-gray-200 mx-4 my-2" />
//       <h3 className="flex justify-center text-lg font-bold my-4">
//         Recommended
//       </h3>

//       {itemCards.map((obj) => (
//         <div
//           className="flex flex-row justify-between items-center border-2 border-gray-200 my-4 rounded-md p-4 hover:bg-gray-200 "
//           key={obj.card.info.id}
//         >
//           <div className="flex flex-col items-start">
//             <p>{obj.card.info.name}</p>
//             <p>{"Rs. "}{(obj.card.info.defaultPrice || obj.card.info.price) / 100}</p>
//           </div>
//           <img
//             className="w-[100px] h-[60px] mx-2 my-2 border-2 rounded-lg"
//             src={CDN_URL + obj.card.info.imageId}
//             alt={obj.card.info.name}
//           />
//         </div>
//       ))}
//     </div>
  );
};

export default ResturantMenu;
