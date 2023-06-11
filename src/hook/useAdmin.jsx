import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const useAdmin = () => {
    const {user,loading} = useContext(AuthContext)
    const {data:isAdmin,isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axios.get(`${import.meta.env.VITE_mainURL}/user/admin/${user?.email}`)
            // console.log(res.data.admin);
            return res.data.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;