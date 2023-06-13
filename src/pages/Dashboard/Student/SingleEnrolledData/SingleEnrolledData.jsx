import React from 'react';

const SingleEnrolledData = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className="card w-full bg-base-100 ">
                <figure><img className='h-52' src={data.image} alt="Shoes" /></figure>
                <div className="card-body p-5 hover:shadow-md ">
                    <h2 className="card-title">Name: {data.name}</h2>
                    <h1>Instructor Name: {data.InstructorName}</h1>
                    <div className="card-actions justify-between">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEnrolledData;