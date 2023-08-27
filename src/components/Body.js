import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import React, { useState } from "react";
const Body = () => {
  //nrml js varaible
  let listofRestJS = [
    {
      name: "Meghana",
      avgRating: 4.5,
      cusine: ["briyani", "cooldrin", "wswd"],
      deliveryTime: "30 mins",
      costforTwo: 2000,
      imgLink: "82e249f0349f72c653648e7ae9eb1cea",
    },
    {
      name: "Dominaos",
      avgRating: 3,
      cusine: ["briyani", "cooldrin", "wswd"],
      deliveryTime: "30 mins",
      costforTwo: 2000,
      imgLink: "82e249f0349f72c653648e7ae9eb1cea",
    },
    {
      name: "Dominaos",
      avgRating: 4.3,
      cusine: ["briyani", "cooldrin", "wswd"],
      deliveryTime: "30 mins",
      costforTwo: 2000,
      imgLink: "82e249f0349f72c653648e7ae9eb1cea",
    },
  ];
  //local state varaible
  const arr = useState(resList);
  console.log(arr);
  const [listofRest, setListofRest] = arr;
  let id = Math.random(1, 200).toFixed(2);
  console.log(id);
  return (
    <div className="body">
      <div className="search">
        <input type="text"></input>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const list = listofRest.filter((obj) => obj.avgRating > 4);
            setListofRest(list);
            console.log(list);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {listofRest.map((obj, i) => {
          return <RestroCard key={i} resData={obj} />;
        })}
      </div>
    </div>
  );
};

export default Body;
