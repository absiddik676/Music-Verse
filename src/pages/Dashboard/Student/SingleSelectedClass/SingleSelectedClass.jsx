import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { FaCreditCard } from 'react-icons/fa';
const SingleSelectedClass = ({myClass}) => {
    return (
        <div className='mx-5'>
            <div className="card w-full bg-base-100 ">
                <figure><img src={myClass.image} alt="Shoes" /></figure>
                <div className="card-body p-5 hover:shadow-md ">
                    <h2 className="card-title">Name: {myClass.name}</h2>
                    <h2 className="card-title">Price: ${myClass.price}</h2>

                    <div className="card-actions justify-between">
                    <button 
                            type="button"
                            className="px-3 py-2 mt-7 bg-yellow-500 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                        >
                            <span className="ml-2"><span className='flex items-center gap-2'><FaCreditCard size={'20'}/> Pay now</span></span>
                        </button>
                        <button 
                            type="button"
                            className="px-3 py-2 mt-7 bg-red-500 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                        >
                            <span className="ml-2"><span className='flex items-center gap-2'><RiDeleteBin2Line size={'20'}/> Delete</span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSelectedClass;