import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { FaCreditCard } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
const SingleSelectedClass = ({myClass,refetch}) => {
    const handelDeleteClass = id =>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_mainURL}/selected-class/${id}`)
                .then(res=>{
                    refetch()
                    if(res.data.deletedCount>0){
                        Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                              )
                    }
                })
            }
          })
    }
    console.log(myClass);
    return (
        <div className='mx-5'>
            <div className="card w-full bg-base-100 ">
                <figure><img className='h-52' src={myClass.image} alt="Shoes" /></figure>
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
                            onClick={()=>handelDeleteClass(myClass._id)}
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