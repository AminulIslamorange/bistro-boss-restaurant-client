
import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/SignUp/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivetRoutes from "./PrivetRoutes";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";






export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivetRoutes><DashBoard></DashBoard></PrivetRoutes>,
      children:[
       { path:'cart',
        element:<Cart></Cart>

       },
      //  adimin routes
      {
        path:'users',
        element:<AllUsers></AllUsers>
      }
      ]
      
    }
   
  ]);