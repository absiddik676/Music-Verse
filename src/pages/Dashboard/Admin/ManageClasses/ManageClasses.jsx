import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const ManageClasses = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_mainURL}/classes`)
            return res.data
        }
    })
    console.log(classes);
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-4'>Manage all classes</h1>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Class Image</th>
                                <th>Class name</th>
                                <th> Instructor name</th>
                                <th>Instructor email</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map(singleClass => <tr key={singleClass._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleClass.imgURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {singleClass.className}
                                    </td>
                                    <td>{singleClass.InstructorName}</td>
                                    <th>
                                        {singleClass.InstructorEmail}
                                    </th>
                                    <th>
                                        {singleClass.AvailableSeats}
                                    </th>
                                    <th>
                                        ${singleClass.price}
                                    </th>
                                    <th>
                                        {singleClass.status}
                                    </th>
                                    <th>
                                        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded">
                                            Approve
                                        </button>
                                    </th>
                                    <th>
                                        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded">
                                            Deny
                                        </button>
                                    </th>
                                    <th>
                                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded">
                                            Feedback
                                        </button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;