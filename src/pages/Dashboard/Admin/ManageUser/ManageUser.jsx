import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { RiUserAddLine , RiAdminLine } from 'react-icons/ri';
import { useToasts } from 'react-toast-notifications';
const ManageUser = () => {
    const { addToast, toastStack } = useToasts();
    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const res = await axios.get(`${import.meta.env.VITE_mainURL}/user`)
        return res.data
    })
    const handelMakeInstructor = async (user) =>{
        console.log(user._id);
        const res = await axios.patch(`${import.meta.env.VITE_mainURL}/make-instructor/${user._id}`)
        if(res.data.modifiedCount){
            addToast(`${user.name} is instructor now`, { appearance: 'success', autoDismiss: true, });
            refetch()
        }
    }

    const handelMakeAdmin = async (user) =>{
        const res = await axios.patch(`${import.meta.env.VITE_mainURL}/make-admin/${user._id}`);
        if(res.data.modifiedCount){
            addToast(`${user.name} is admin now`, { appearance: 'success', autoDismiss: true, });
            refetch()
        }
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
                                {console.log(user.role === 'instructor')}
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <td className='flex justify-center'>
                                    <button
                                        className={`flex text-xs items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500 ${user.role === 'instructor' ? 'btn-disabled  bg-green-300':''}`}
                                        onClick={()=>handelMakeInstructor(user)}
                                    >
                                        <RiUserAddLine className="mr-2" />
                                        Make Instructor
                                    </button>
                                </td>
                                <td >
                                   <div className='flex justify-center'>
                                   <button
                                        className={`flex text-xs items-center px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500 ${user.role === 'admin' ?'btn-disabled bg-purple-300':''}`}
                                        onClick={()=>handelMakeAdmin(user)}
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