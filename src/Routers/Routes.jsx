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
import ManageUser from "../pages/Dashboard/Admin/ManageUser/ManageUser";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";


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
      element:<PrivateRoute><Dashboard/></PrivateRoute>,
      children:[
        {
          path:'/dashboard/selected',
          element:<PrivateRoute><MySelectedClasses/></PrivateRoute>
        },
        {
          path:'/dashboard/addaClass',
          element:<InstructorRoute><AddaClass/></InstructorRoute> // instructor page
        },
        {
          path:'/dashboard/myClasses',
          element:<InstructorRoute><MyClasses/></InstructorRoute> // instructor page
        },
        {
          path:'/dashboard/ManageUser',
          element:<AdminRoute><ManageUser/></AdminRoute> // admin page
        },
        {
          path:'/dashboard/ManageClasses',
          element:<AdminRoute><ManageClasses/></AdminRoute> // admin page
        },
      ]
    },
    {
      path:'test',
      element:<PrivateRoute><Test/></PrivateRoute>
    }
  ]);
  export default router;