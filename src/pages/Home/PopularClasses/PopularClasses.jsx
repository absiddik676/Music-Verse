import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import SinglePopularClasses from '../SinglePopularClasses/SinglePopularClasses';
import { FaChair, FaUsers } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
const PopularClasses = () => {
    const { data: bestClasses = [] } = useQuery({
        queryKey: ['bestClasses'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_mainURL}/bes-classes`)
            return res.data
        }
    })

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-4xl text-center my-6 font-semibold '>Best selling Courses</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    bestClasses.map(classes => <SinglePopularClasses classes={classes} key={classes._id}></SinglePopularClasses>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;