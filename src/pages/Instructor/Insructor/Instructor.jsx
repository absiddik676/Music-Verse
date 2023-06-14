import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import SingleInstructor from '../SingleInstructor/SingleInstructor';
import Spinner from '../../../component/Spinner';

const Instructor = () => {
    const { data: instructorData = [], isLoading } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_mainURL}/all-instructor`)
            return res.data
        }
    })
    console.log({ isLoading });
    return (
        <div className='max-w-7xl mx-auto'>
            {
                isLoading ? <Spinner/> : <div className='pt-24 grid md:grid-cols-3 gap-5'>
                    {
                        instructorData.map(instructor => <SingleInstructor key={instructor._id} instructor={instructor}></SingleInstructor>)
                    }
                </div>
            }
        </div>
    );
};

export default Instructor;