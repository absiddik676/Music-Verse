import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import SingleBestInstructor from '../SingleBestInstructor/SingleBestInstructor';
import { AuthContext } from '../../../Provider/AuthProvider';

const BestInstructor = () => {
    const {isDarkMode} = useContext(AuthContext)
    const { data: bestInstructor = [] } = useQuery({
        queryKey: ['bestInstructor'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_mainURL}/best-instructor`)
            return res.data
        }
    })
    console.log(bestInstructor);
    return (
        <div className={` ${isDarkMode?'bg-[#111111]':''}`}>
            <div className='max-w-7xl mx-auto'>
            <h1 className="text-4xl py-14 text-center font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Popular Instructors
            </h1>
            <div className='grid md:grid-cols-3 gap-5'>
            {
                bestInstructor.map(instructor=><SingleBestInstructor key={instructor._id} instructor={instructor}/>)
            }
            </div>
        </div>
        </div>
    );
};

export default BestInstructor;