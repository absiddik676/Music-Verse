import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import SingleBestInstructor from '../SingleBestInstructor/SingleBestInstructor';

const BestInstructor = () => {
    const { data: bestInstructor = [] } = useQuery({
        queryKey: ['bestInstructor'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_mainURL}/best-instructor`)
            return res.data
        }
    })
    console.log(bestInstructor);
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className="text-4xl my-14 text-center font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Popular Instructors
            </h1>
            <div className='grid grid-cols-3 gap-5'>
            {
                bestInstructor.map(instructor=><SingleBestInstructor key={instructor._id} instructor={instructor}/>)
            }
            </div>
        </div>
    );
};

export default BestInstructor;