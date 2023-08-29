import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contants";
const ResturantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  //   const[listMenu,setListMenu] = useState([]);
  const {resID}= useParams();
console.log(resID)
  useEffect(() => {
    fetchResturantData();
  }, []);

  const fetchResturantData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`
    
    );
    const res = await data.json();
    console.log(res);
    setResMenu(res.data);
  };

  if (resMenu.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards.map((obj) => {
          return (
            <>
              <li key={obj.card.info.id}>
                {obj.card.info.name} - {" Rs."}
                {obj.card.info.defaultPrice / 100 || obj.card.info.price / 100}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default ResturantMenu;
