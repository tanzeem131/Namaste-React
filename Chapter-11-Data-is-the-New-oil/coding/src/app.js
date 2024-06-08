import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/shimmer";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";

const Grocery = lazy(()=>import("./components/Grocery"))
const About = lazy(()=>import("./components/About"))

const AppLayout = () => {
  const[userName,setUserName]=useState();

  //Authentication logic
  useEffect(()=>{
    //Make an api call
    const data = {
      name: "Tanzeem",
    };
    setUserName(data.name);
  },[]);

  return (
    <UserContext.Provider value = {{loggedInUser:userName}}>
      <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurantmenu/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
      },
    ],
    errorElement: <Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
