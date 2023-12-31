import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import SingleClass from '../SingleClass/SingleClass';
import axios from 'axios';
import Spinner from '../../../component/Spinner';

const Classes = () => {

    const { data: classes = [], isLoading } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-absiddik676.vercel.app/approve-classes`)
            return res.json()
        }
    })


    console.log(classes);
    return (
        <div className='max-w-7xl  mx-auto pt-24'>
            {
                isLoading ? <Spinner /> : <div className='grid md:grid-cols-3 gap-5'>
                    {
                        classes.map(singleClass => <SingleClass key={singleClass._id} singleClass={singleClass} />)
                    }
                </div>
            }
        </div>
    );
};

export default Classes;