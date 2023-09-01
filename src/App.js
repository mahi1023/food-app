import React,{lazy,Suspense} from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import  Body  from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
// lazing loading,code cucking, dynamic impoer etc..,
const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import('./components/About'))
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
      element:<Suspense fallback
      ={<h1>Loaing the dataa</h1>}><About/></Suspense>,
    },{
      path:'/contact',
      element:<Contact />,
    
    },{
      path:'/resturants/:resID',
      element:<ResturantMenu/>
    },{
      path:'/grocery',
      element:<Suspense fallback={<h1>Hello I am loaidng the Grocery store</h1>}><Grocery/></Suspense>
    }
  ]
},])
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
