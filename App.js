import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
/*
Components
 Header 
    - Logo
    - Nav Item
 Body
    - search Comp
    - retro main card
    - retro card
        - image
        -Name of resturant 
        -cusines
        -star Ratings, delivery time

Footer
    - copyright
    - links
*/
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestroCard = (props) => {
  const { resData } = props;
  const { imgLink, name, cusine, avgRating, costforTwo, deliveryTime } =
    resData;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
          imgLink
        }
      />
      <h3>{name}</h3>
      <h4>{cusine.join(", ")}</h4>
      <div className="list-items">
        <h4>{avgRating} stars</h4>
        <h4>{costforTwo / 100}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};
const resList = [
  {
    name: "Meghana",
    avgRating: 4.5,
    cusine: ["briyani", "cooldrin", "wswd"],
    deliveryTime: "30 mins",
    costforTwo: 2000,
    imgLink: "82e249f0349f72c653648e7ae9eb1cea",
  },
  {
    name: "KFC",
    avgRating: 3.5,
    cusine: ["french fries", "cooldrink", "finger-licking"],
    deliveryTime: "10 mins",
    costforTwo: 2000,
    imgLink: "849ebba84be915320df297403db336df",
  },
  {
    name: "Dumb Briyani",
    avgRating: 2.5,
    cusine: ["muuton briyani", "cooldrin", "wswd"],
    deliveryTime: "20 mins",
    costforTwo: 2000,
    imgLink: "nedd2b7hwpgne3kzdnok",
  },
  {
    name: "Meghana",
    avgRating: 4.5,
    cusine: ["briyani", "cooldrin", "wswd"],
    deliveryTime: "30 mins",
    costforTwo: 2000,
    imgLink: "82e249f0349f72c653648e7ae9eb1cea",
  },
  {
    name: "KFC",
    avgRating: 3.5,
    cusine: ["french fries", "cooldrink", "finger-licking"],
    deliveryTime: "10 mins",
    costforTwo: 2000,
    imgLink: "849ebba84be915320df297403db336df",
  },
  {
    name: "Dumb Briyani",
    avgRating: 2.5,
    cusine: ["muuton briyani", "cooldrin", "wswd"],
    deliveryTime: "20 mins",
    costforTwo: 2000,
    imgLink: "nedd2b7hwpgne3kzdnok",
  },
  {
    name: "Meghana",
    avgRating: 4.5,
    cusine: ["briyani", "cooldrin", "wswd"],
    deliveryTime: "30 mins",
    costforTwo: 2000,
    imgLink: "82e249f0349f72c653648e7ae9eb1cea",
  },
  {
    name: "KFC",
    avgRating: 3.5,
    cusine: ["french fries", "cooldrink", "finger-licking"],
    deliveryTime: "10 mins",
    costforTwo: 2000,
    imgLink: "849ebba84be915320df297403db336df",
  },
  {
    name: "Dumb Briyani",
    avgRating: 2.5,
    cusine: ["muuton briyani", "cooldrin", "wswd"],
    deliveryTime: "20 mins",
    costforTwo: 2000,
    imgLink: "nedd2b7hwpgne3kzdnok",
  },
];
const Body = () => {
    let id = Math.random(1,200).toFixed(2);
    console.log(id)
  return (
    <div className="body">
      <div className="search">
        <input type="text"></input>
      </div>
      <div className="res-container">
        {resList.map((obj, i) => {
         return <RestroCard  key={i}resData={obj} />;
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>CopyRight</p>
      </div>
      <div className="social-links">
        <ul>
          <li>facebook</li>
          <li>insta</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
