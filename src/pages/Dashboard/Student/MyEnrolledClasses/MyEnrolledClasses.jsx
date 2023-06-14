import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SingleEnrolledData from '../SingleEnrolledData/SingleEnrolledData';
import Spinner from '../../../../component/Spinner';
import useAxiosSecure from '../../../../hook/useAxiosSecure';

const MyEnrolledClasses = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: enrolledData = [], isLoading } = useQuery({
        queryKey: ['enrolled-data'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolled-data/${user.email}`)
            return res.data
        }
    })
    console.log(enrolledData);
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-4'>My Enrolled classes</h1>
            {
                isLoading ? <Spinner /> : <div className='grid grid-cols-3 gap-5'>
                    {
                        enrolledData.map(data => <SingleEnrolledData data={data} key={data._id}></SingleEnrolledData>)
                    }
                </div>
            }

        </div>

    );
};

export default MyEnrolledClasses;