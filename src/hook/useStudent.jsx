import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useStudent = () => {
    const { user, loading } = useContext(AuthContext)
    const { data: isStudent, isLoading:isStudentLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_mainURL}/user/student/${user?.email}`)
            // console.log(res.data.student);
            return res.data.student
        }
    })
    return [isStudent, isStudentLoading]
};

export default useStudent;