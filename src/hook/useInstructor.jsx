import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const useInstructor = () => {
    const {user,loading} = useContext(AuthContext)
    const {data:isInstructor,isLoading:isInstructorLoading} = useQuery({
        queryKey:['isInstructor',user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axios.get(`${import.meta.env.VITE_mainURL}/user/instructor/${user?.email}`)
            return res.data.instructor
        }
    })
    return [isInstructor,isInstructorLoading]
};

export default useInstructor;