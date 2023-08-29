import React from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import  Body  from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
const AppLayout = () => {
  console.log(<Body ></Body>)
  return (
    <div className="app">
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </div>
  );
};
const appRouter = createBrowserRouter([{
  path:'/',
  element:<AppLayout />,
  errorElement:<Error/>,
  children:[
    {
      path:'/',
      element:<Body/>
    },
    {
      path:'/about',
      element:<About/>,
    },{
      path:'/contact',
      element:<Contact />,
    
    },{
      path:'/resturants/:resID',
      element:<ResturantMenu/>
    }
  ]
},])
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
