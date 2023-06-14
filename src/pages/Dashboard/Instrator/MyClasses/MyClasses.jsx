import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { RiRefreshLine } from 'react-icons/ri';
import axios from 'axios';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../hook/useAxiosSecure';

const MyClasses = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: myClasses = [], refetch } = useQuery({
        queryKey: ['instructor-classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-classes/${user.email}`);
            return res.data
        }
    })
    console.log(myClasses);
    return (
        <div >
            <h1 className='text-3xl font-semibold text-center my-3'>my classes</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>class Name</th>
                            <th>Price</th>
                            <th>Total Enrolled</th>
                            <th>Status</th>
                            <th>Update </th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((myClass, index) => <tr key={myClass._id}>
                                <th>{index + 1}</th>
                                <td>{myClass.className}</td>
                                <td>{myClass.price}</td>
                                <td >{myClass.enrolledStudentNumber ? myClass.enrolledStudentNumber : 0}</td>
                                <td>{myClass.status}</td>
                                <td><button
                                    className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => {
                                        // Add your update logic here
                                    }}
                                >
                                    <RiRefreshLine className="mr-2" />
                                    Update
                                </button></td>
                                {
                                    myClass.feedback?<td>{myClass.feedback}</td>:null
                                }
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;