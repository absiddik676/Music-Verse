import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";

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
      ]
    },
  ]);
  export default router;