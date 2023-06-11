import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import useAdmin from '../hook/useAdmin';
import Spinner from '../component/Spinner';


const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        return <Spinner/>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' state={{form:location}} replace></Navigate>;
};

export default AdminRoute;