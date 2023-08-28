import { HEADER_LOGO } from "../utils/contants";
import React, { useState } from "react";
export const Header = () => {
  const [login, setLogin] = useState("Login");
  var btnName = "Login";
  console.log("Haeder render");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
