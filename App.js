import React, { lazy, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Head from "./src/components/Header";
import { Provider } from "react-redux";
import Search from "./src/components/Search";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/createContext";
import appStore from "./src/utils/store";


const About = lazy(()=>import("./src/components/About"))

const AppLayout = () => {
const [userInfo , setUserInfo] = useState("Animesh siddh");

  return (
    <div>
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUserName:userInfo , setUserInfo}}>
      <Head />
      {/* <Search /> */}
     <Outlet/>
     </UserContext.Provider>
     </Provider>
    </div>
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
        element: <Suspense fallback={<h1>This is Loading.....</h1>}>
          <About />
        </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"restaurantMenu/:resId",
        element:<RestaurantMenu/>
      }
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
