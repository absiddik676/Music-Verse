import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { RiHistoryFill } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { TfiBlackboard } from "react-icons/tfi";
import { FiUsers, FiSettings } from 'react-icons/fi';
import { IoIosAdd } from 'react-icons/io';
import { FaGraduationCap ,   } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import useAdmin from '../hook/useAdmin';
import useStudent from '../hook/useStudent';
import useInstructor from '../hook/useInstructor';
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin,isAdminLoading] = useAdmin();
    const [isInstructor,isInstructorLoading] = useInstructor();
    const [isStudent,isStudentLoading] = useStudent();
    return (
        <div>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet />
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <div className='bg-[#1d1d1d] flex gap-3 p-4'>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <div>
                                <p className='text-white font-semibold '>{user?.displayName}</p>
                                <p className='text-white font-semibold '>{isAdmin && 'admin' || isInstructor && 'Instructor' || isStudent && 'Student'}</p>
                            </div>
                        </div>
                        <ul className="menu p-4 w-64 font-semibold text-lg text-[#9a9a9a] h-full bg-[#262626]">
                            {/* Sidebar content here */}
                            {
                                isAdmin && <>
                                <NavLink to='/dashboard/ManageClasses' className='mb-3'><span className='flex items-center'><FiSettings   className="mr-2" size={'24'} />Manage Classes</span></NavLink>
                                <NavLink to='/dashboard/ManageUser'><span className='flex items-center'><BsPeopleFill    className="mr-2" size={'24'} />Manage Users</span></NavLink>
                                </>
                            }
                            {
                                isInstructor && <>
                                <NavLink to='/dashboard/addaClass'><span className='flex items-center'><IoIosAdd className="mr-2" size={'24'} />Add a Class</span></NavLink>
                                <NavLink to='/dashboard/myClasses'><span className='flex items-center'><FaGraduationCap className="mr-2" size={'24'} />My Classes</span></NavLink>
                                </>
                            }
                            {
                                isStudent && <>
                                    <NavLink to='/dashboard/selected'><span className='flex items-center'><FaBook className="mr-2" size={'24'} />My Selected Classes</span></NavLink>
                                    <NavLink to='/dashboard/enrolled' className='py-3'><span className='flex items-center'><BsCheckCircle className="mr-2" size={'24'} /> My Enrolled Classes</span> </NavLink>
                                    <NavLink to='/dashboard/paymentHistory'><span className='flex items-center'><RiHistoryFill className="mr-2" size={'24'} />Payment History</span> </NavLink>
                                </>
                            }
                            <div className="divider bg-white h-[2px]"></div>
                            <NavLink to='/'><span className='flex items-center'><AiOutlineHome className="mr-2" size={'24'} />Home</span> </NavLink>
                            <NavLink to='/classes' className='py-3'><span className='flex items-center'><TfiBlackboard size={'24'} className="mr-2" />Classes</span> </NavLink>
                            <NavLink to='/classes'><span className='flex items-center'><FiUsers className="mr-2" size={'24 '} />Instructors</span> </NavLink>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;