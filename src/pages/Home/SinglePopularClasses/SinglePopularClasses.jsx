import React, { useContext } from 'react';
import { FaChair, FaUsers } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { AuthContext } from '../../../Provider/AuthProvider';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import useAdmin from '../../../hook/useAdmin';
import useInstructor from '../../../hook/useInstructor';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

const SinglePopularClasses = ({ classes }) => {
    const { user } = useContext(AuthContext)
    const { addToast, toastStack } = useToasts();
    const [isAdmin, isAdminLoading] = useAdmin()
    const [isInstructor, isInstructorLoading] = useInstructor()
    const handelSelectClass = (classes) => {
        const selectedClass = { classId: classes._id, name: classes.className, price: classes.price, studentEmail: user?.email, image: classes.imgURL, InstructorName: classes.InstructorName }

        axios.post(`${import.meta.env.VITE_mainURL}/selected-class`, selectedClass)
            .then(res => {
                console.log(res.data.insertedId);
                if (res.data.insertedId) {
                    addToast('Your class save successfully', { appearance: 'success', autoDismiss: true, });
                }
            })
    }

    const handelShowMessage = () => {
        addToast(' log in before selecting the course', { appearance: 'error', autoDismiss: true, });
    }
    return (

        <div  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" gap-5 space-y-4 md:space-y-0">
            <div className="max-w-sm relative bg-white px-6 pt-6 pb-2 h-[500px] rounded-xl shadow-lg transform  transition duration-500">
                <h3 className="mb-3 text-xl font-bold text-indigo-600">{classes?.className}</h3>
                <div className="relative">
                    <img className="w-full h-40 rounded-xl" src={classes?.imgURL} alt="Colors" />
                    <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Best selling</p>
                </div>
                <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">Instructor Name: {classes?.InstructorName}</h1>
                <div className="my-4">
                    <div className="flex text-lg space-x-1 items-center">
                        <FaChair size={24} />
                        <p className='font-semibold'>Available Site: {classes?.AvailableSeats}</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <AiOutlineDollarCircle size={24} />
                        <p className='text-lg font-semibold'>Price: ${classes?.price}</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <FaUsers size={24} />
                        <p className='text-lg font-semibold'>Enrolled Student: {classes?.enrolledStudentNumber}</p>
                    </div>

                    {
                        user ? <>
                            <button
                                onClick={() => handelSelectClass(classes)}
                                type="button"
                                className={`px-3 py-2 mt-7 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex ${isAdmin || isInstructor ? 'btn-disabled' : ''}`}
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                                <span className="ml-2">Select this class</span>
                            </button>
                        </> : <>
                            <button
                                onClick={handelShowMessage}
                                type="button"
                                className={`px-3 py-2 mt-7 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex ${isAdmin || isInstructor ? 'btn-disabled' : ''}`}
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                                <span className="ml-2">Select this class</span>
                            </button>
                        </>
                    }
                </div>
            </div>
            
        </div>

    );
};

export default SinglePopularClasses;