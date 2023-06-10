import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';

const SingleClass = ({singleClass}) => {
    const {user} = useContext(AuthContext)
    const { addToast, toastStack } = useToasts();
    const handelSelectClass = (classes)=>{

        const selectedClass = {classId:classes._id,name:classes.className,price:classes.price,studentEmail:user?.email,image:classes.imgURL}

        axios.post(`${import.meta.env.VITE_mainURL}/selected-class`,selectedClass)
        .then(res =>{
            console.log(res.data.insertedId);
            if(res.data.insertedId){
                addToast('Your class save successfully', { appearance: 'success', autoDismiss: true, });
            }
        })
    }
    console.log(singleClass);
    return (
        <div>
                <div className="card w-96 bg-base-100 ">
                        <figure><img className='h-52 rounded-t-lg' src={singleClass.imgURL} alt="Shoes" /></figure>
                        <div className="card-body hover:shadow-md ">
                            <h2 className="card-title">{singleClass.className}</h2>
                            <h2 className='text-xl  '>Instructor name: {singleClass.InstructorName}</h2>
                            <div className='flex justify-between'>
                                <h1 className='text-xl font-semibold'>Available seats: {singleClass.AvailableSeats}</h1>
                                <h1 className='text-xl font-semibold'>price: ${singleClass.price}</h1>
                            </div>
                            <div className="card-actions justify-end">
                                <button
                                onClick={()=>handelSelectClass(singleClass)}
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