import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { RiUserAddLine , RiAdminLine } from 'react-icons/ri';
const ManageUser = () => {
    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const res = await axios.get(`${import.meta.env.VITE_mainURL}/user`)
        return res.data
    })
    console.log(users);
    const handelMakeInstructor = id =>{
        console.log(id);
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-4'>All User</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role </th>
                            <th className='text-center'>Action </th>
                            <th className='text-center'>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <td className='flex justify-center'>
                                    <button
                                        className="flex text-xs items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                        onClick={()=>handelMakeInstructor(user._id)}
                                    >
                                        <RiUserAddLine className="mr-2" />
                                        Make Instructor
                                    </button>
                                </td>
                                <td >
                                   <div className='flex justify-center'>
                                   <button
                                        className="flex text-xs items-center px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        
                                    >
                                        <RiAdminLine className="mr-2" />
                                        Make Admin
                                    </button>
                                   </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;