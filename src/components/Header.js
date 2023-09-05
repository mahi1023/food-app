import { HEADER_LOGO } from "../utils/contants";
import React, { useState ,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { FaCheck } from "react-icons/fa";
import UserContext from "../Utils/UseContext";
export const Header = () => {
  const [login, setLogin] = useState("Login");
  var btnName = "Login";
  console.log("Haeder render");
 const onlineStatis = useOnlineStatus();
 const {loggedInUser} = useContext(UserContext);
 console.log(loggedInUser)
  //if no dependecny array => useEffect is called on every render
  // if depency array is empty = [] =>useEffect is cakked on inital render (just once);
  //if depenecy array is [login] -> useEffect is called everyime when login state varaible is updated.
  // use Effect alsways calls on inital render
  useEffect(()=>{
    console.log("useEffect render")
  },[login])
  return (
    <div className="flex justify-between bg-orange-400 h-[60px] shadow-lg mb-2 sm:bg-orange-400 lg:bg-orange-400">
      <div className="logo-container">
        <img className=" w-20" src={HEADER_LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <FaCheck color={onlineStatis?'green':'gray'} ></FaCheck>
          {/* <li>online Sttaus :{onlineStatis?'green':'orange'}</li> */}
          <li><Link className="px-4" to ='/'>Home</Link></li>
          <li><Link className="px-4" to="/about">About</Link></li>
          <li><Link  className="px-4" to="/contact">Contact Us</Link></li>
          <li><Link   className="px-4" to ='/grocery'>Grocery</Link></li>
          <li>Cart</li>
          <button
            className="px-4"
            onClick={() => {
              // btnName ='LogOut';
              login === "Login" ? setLogin("LogOut") : setLogin("Login");
              // console.log(login)
            }}
          >
            {login}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
