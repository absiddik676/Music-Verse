import React from 'react';

const SingleClass = ({singleClass}) => {
    return (
        <div>
                <div className="card w-96 bg-base-100 ">
                        <figure><img src={singleClass.image} alt="Shoes" /></figure>
                        <div className="card-body hover:shadow-md ">
                            <h2 className="card-title">{singleClass.name}</h2>
                            <h2 className='text-xl  '>Instructor name: {singleClass.instructor}</h2>
                            <div className='flex justify-between'>
                                <h1 className='text-xl font-semibold'>Available seats: {singleClass.seats}</h1>
                                <h1 className='text-xl font-semibold'>price: ${singleClass.price}</h1>
                            </div>
                            <div className="card-actions justify-end">
                                <button
                                    type="button"
                                    className="px-3 py-2 mt-7 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>

                                    <span className="ml-2">Select this class</span>
                                </button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default SingleClass;