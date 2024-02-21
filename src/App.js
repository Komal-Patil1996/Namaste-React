import React, { Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import BodyComponent from "./components/Body";
import AboutComponent from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy } from "react";

const Grocery = lazy(() => import("./components/Grocery"))

const Appcomponent = () => {
  return (
    <div className="app">
     <Header/>
     <Outlet/>
    </div>
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
        }
  ],
  errorElement:<Error/>
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);