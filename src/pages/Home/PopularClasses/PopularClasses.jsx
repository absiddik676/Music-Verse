import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import SinglePopularClasses from '../SinglePopularClasses/SinglePopularClasses';
import { FaChair, FaUsers } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
const PopularClasses = () => {
    const { data: bestClasses = [], isLoading:instructorLoading } = useQuery({
        queryKey: ['bestClasses'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_mainURL}/best-classes`)
            return res.data
        }
    })
    console.log({instructorLoading});
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className="text-4xl my-16 text-center font-bold bg-gradient-to-r from-[#ee9ca7] via-pink-500 to-[#ffdde1] text-transparent bg-clip-text">
            Popular Classes
            </h1>

            <div className='grid grid-cols-3 gap-5'>
                {
                    bestClasses.map(classes => <SinglePopularClasses classes={classes} key={classes._id}></SinglePopularClasses>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;