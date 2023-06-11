import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Spinner from '../component/Spinner';
import useInstructor from '../hook/useInstructor';


const InstructorRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation()
    if(loading || isInstructorLoading){
        return <Spinner/>
    }
    if(user && isInstructor){
        return children
    }
    return <Navigate to='/' state={{form:location}} replace></Navigate>;
};

export default InstructorRoute;