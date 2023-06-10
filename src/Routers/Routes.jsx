import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Classes from "../pages/Classes/classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import AddaClass from "../pages/Dashboard/Instrator/AddaClass/AddaClass";
import Test from "../pages/Dashboard/Instrator/AddaClass/test";
import MyClasses from "../pages/Dashboard/Instrator/MyClasses/MyClasses";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'signup',
            element:<SignUp/>
        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'classes',
            element:<Classes/>
        },
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard/>,
      children:[
        {
          path:'/dashboard/selected',
          element:<MySelectedClasses/>
        },
        {
          path:'/dashboard/addaClass',
          element:<AddaClass/> // instructor page
        },
        {
          path:'/dashboard/myClasses',
          element:<MyClasses/> // instructor page
        },
      ]
    },
    {
      path:'test',
      element:<Test/>
    }
  ]);
  export default router;