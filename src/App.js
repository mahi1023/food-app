import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
// lazing loading,code cucking, dynamic impoer etc..,
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
import UserContext from "./Utils/UseContext";
const AppLayout = () => {
  //authentication
  const [userName, setUserInfo] = useState();

  useEffect(() => {
    const data = [
      {
        name: "Maheswari",
      },
    ];
    setUserInfo(data[0].name);
  }, []);
  return (
    //Default value
    <UserContext.Provider value={{ loggedInUser: userName , setUserInfo }}>
       {/* wi have Maheswari */}
      <div className="app">
        {/* //in header can have jaya as value */}
        <UserContext.Provider value={{loggedInUser:
        userName}}>
        <Header></Header>
        </UserContext.Provider>
        <Outlet />
        <Footer></Footer>
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loaing the dataa</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturants/:resID",
        element: <ResturantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Hello I am loaidng the Grocery store</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
