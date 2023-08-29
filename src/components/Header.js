import { HEADER_LOGO } from "../utils/contants";
import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [login, setLogin] = useState("Login");
  var btnName = "Login";
  console.log("Haeder render");

  //if no dependecny array => useEffect is called on every render
  // if depency array is empty = [] =>useEffect is cakked on inital render (just once);
  //if depenecy array is [login] -> useEffect is called everyime when login state varaible is updated.
  // use Effect alsways calls on inital render
  useEffect(()=>{
    console.log("useEffect render")
  },[login])
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              // btnName ='LogOut';
              login === "Login" ? setLogin("LogOut") : setLogin("Login");
              // console.log(login)
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
