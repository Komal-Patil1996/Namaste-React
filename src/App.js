import React, { Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import BodyComponent from "./components/Body";
import AboutComponent from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"))

const Appcomponent = () => {

  const [userName, setUserName] = useState();

  useEffect(() =>{
  const data = {
    name: "Komal Sourabh"
  }
   setUserName(data.name);

  },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
     <Header/>
     <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
} 

const appRouter = createBrowserRouter([
{
  path:"/",
  element: <Appcomponent/>,
  children:[
    {
      path:"/",
      element: <BodyComponent/>,
    },
    {
      path:"/about",
      element: <AboutComponent/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    {
      path:"/restaurant/:resId",
      element: <RestaurantMenu/>
    },
    {
      path:"/grocery",
      element: <Suspense fallback={<h1>Loading....!!</h1>}> <Grocery/> </Suspense>
    },
    {
      path:"/cart",
      element: <Cart/>
    }
  ],
  errorElement:<Error/>
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);