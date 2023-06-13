import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SingleEnrolledData from '../SingleEnrolledData/SingleEnrolledData';

const MyEnrolledClasses = () => {
    const { user } = useContext(AuthContext)
    const { data: enrolledData = [] } = useQuery({
        queryKey: ['enrolled-data'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_mainURL}/enrolled-data/${user.email}`)
            return res.data
        }
    })
    console.log(enrolledData);
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-4'>My Enrolled classes</h1>
           <div className='grid grid-cols-3 gap-5'>
           {
                enrolledData.map(data =><SingleEnrolledData data={data} key={data._id}></SingleEnrolledData>)
            }
           </div>
        </div>

    );
};

export default MyEnrolledClasses;