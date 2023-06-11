import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Spinner from '../component/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    console.log(loading);
    const location = useLocation();
    if(loading){
        return <Spinner/>
    }
    if(user?.email){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;