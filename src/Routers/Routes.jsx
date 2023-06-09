import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Classes from "../pages/Classes/Classes";

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
  ]);
  export default router;