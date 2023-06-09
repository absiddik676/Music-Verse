import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useViewportScroll, useTransform } from 'framer-motion';
import AnimatedImage from '../../component/AnimatedImage';
import BouncingMusicNode from '../../component/AnimatedImage';
const Classes = () => {
    const datta = [
        {
            "image": "https://tabula.bold-themes.com/wavy/wp-content/uploads/sites/3/2019/05/inner_image_07.jpg",
            "name": "Guitar Basics",
            "instructor": "John Smith",
            "seats": 15,
            "price": 50
        },
        {
            "image": "https://tabula.bold-themes.com/wavy/wp-content/uploads/sites/3/2019/05/inner_image_08.jpg",
            "name": "Piano Masterclass",
            "instructor": "Emily Johnson",
            "seats": 10,
            "price": 75
        },
        {
            "image": "https://tabula.bold-themes.com/wavy/wp-content/uploads/sites/3/2019/05/inner_image_09.jpg",
            "name": "Drumming 101",
            "instructor": "Michael Davis",
            "seats": 8,
            "price": 60
        }
    ]

    return (
        <div className='max-w-7xl grid grid-cols-3 gap-5 mx-auto pt-24'>
            {
                datta.map(data =>
                    <div className="card w-96 bg-base-100 ">
                        <figure><img src={data.image} alt="Shoes" /></figure>
                        <div className="card-body hover:shadow-md ">
                            <h2 className="card-title">{data.name}</h2>
                            <h2 className='text-xl  '>Instructor name: {data.instructor}</h2>
                            <div className='flex justify-between'>
                                <h1 className='text-xl font-semibold'>Available seats: {data.seats}</h1>
                                <h1 className='text-xl font-semibold'>price: ${data.price}</h1>
                            </div>
                            <div className="card-actions justify-end">
                                <button
                                    type="button"
                                    className="px-3 py-2 mt-7 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                                >
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>

                                    <span class="ml-2">Select this class</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Classes;