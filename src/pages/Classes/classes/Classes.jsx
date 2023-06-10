import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import SingleClass from '../SingleClass/SingleClass';
import axios from 'axios';

const Classes = () => {

    const {data:classes=[],isLoading} = useQuery({
        queryKey:['class'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/classes`)
            return res.json()
        }
    })
 

    console.log(classes);
    return (
        <div className='max-w-7xl grid grid-cols-3 gap-5 mx-auto pt-24'>
            {
                classes.map(singleClass => <SingleClass key={singleClass._id} singleClass={singleClass}/>)   
            }
        </div>
    );
};

export default Classes;