import React from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import  Body  from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  console.log(<Body ></Body>)
  return (
    <div className="app">
      <Header></Header>
      <Body ></Body>
      <Footer></Footer>
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
