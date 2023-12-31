import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Classes from "../pages/Classes/classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import AddaClass from "../pages/Dashboard/Instrator/AddaClass/AddaClass"
import MyClasses from "../pages/Dashboard/Instrator/MyClasses/MyClasses";
import ManageUser from "../pages/Dashboard/Admin/ManageUser/ManageUser";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Pay from "../pages/Dashboard/Student/Pay/Pay";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import MyEnrolledClasses from "../pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses";
import Instructor from "../pages/Instructor/Insructor/Instructor";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


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
        {
            path:'instructor',
            element:<Instructor/>
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
          path:'/dashboard/pay/:id',
          element:<PrivateRoute><Pay/></PrivateRoute>,
          loader:({params})=>fetch(`${import.meta.env.VITE_mainURL}/payment-class/${params.id}`),
        },
        {
          path:'/dashboard/paymentHistory',
          element:<PrivateRoute><PaymentHistory/></PrivateRoute>
        },
        {
          path:'/dashboard/enrolled',
          element:<PrivateRoute><MyEnrolledClasses/></PrivateRoute>
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
      path:'*',
      element:<ErrorPage/>
    }
  ]);
  export default router;