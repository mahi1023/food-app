import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import React, { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Body = () => {
  //local state varaible
  console.log("body render");
  const arr = useState([]);
  console.log(arr);
  const [listofRest, setListofRest] = arr;
  const [searchText, setSearchText] = useState("");
  const [filterRestro,setFileterRestro] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    if(data.ok){
    const res = await data.json();
    console.log(res);
    //updaing the stat e to render the latest data
    setListofRest(
      res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFileterRestro(res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    else{
      alert("error with api")
    }
  };
  let id = Math.random(1, 200).toFixed(2);
  console.log(id);
  // conditional Rendering
  // if(listofRest.length === 0){
  //   return <Shimmer></Shimmer>
  // }
  const onTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return <h1>U are offline</h1>
  }
  return listofRest.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={onTextChange}
            value={searchText}
          ></input>
          <button className="search-btn"
            onClick={() => {
              //Fileter restro card based on search
              console.log(searchText);
              const filteredRestro = listofRest.filter((obj) => {
                return obj.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFileterRestro(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const list = listofRest.filter((obj) => {
            return   obj.info.avgRating > 4;
            })

            setListofRest(list);
            setFileterRestro(list)
            console.log(list);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {filterRestro.map((obj, i) => {
          return <Link  className="link-restro-cards" to ={'/resturants/'+obj.info.id}key={obj.info.id}><RestroCard  resData={obj} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
