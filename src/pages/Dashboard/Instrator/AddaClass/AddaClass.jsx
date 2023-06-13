import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { AuthContext } from '../../../../Provider/AuthProvider';
const VITE_IMGBB_TOKEN = import.meta.env.VITE_IMGBB_TOKEN
const AddaClass = () => {
    const {user} = useContext(AuthContext)
    
    const { addToast, toastStack } = useToasts();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${VITE_IMGBB_TOKEN}`
    const { register, handleSubmit,setValue, reset, formState: { errors } } = useForm({
        defaultValues: {
            InstructorEmail: user.email,
            InstructorName: user.displayName
          },
         
    });
    useEffect(() => {
        setValue('InstructorEmail', user.email);
        setValue('InstructorName', user.displayName);
      }, [user.email, setValue]);


    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image',data.image[0])
        fetch(img_hosting_url,{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imageData => {
            const imgURL = imageData.data.display_url
            const {AvailableSeats,InstructorEmail,InstructorName,className,price,} = data
            const saveClassData = {
                AvailableSeats:parseInt(AvailableSeats),
                InstructorEmail,
                InstructorName,
                price:parseInt(price),
                className,
                imgURL,
                status:'pending'
            }

            axios.post(`${import.meta.env.VITE_mainURL}/classes`,saveClassData)
            .then(res=>{
                console.log(res.data);
                reset()
                if(res.data.insertedId){
                    addToast('Your class added successfully', { appearance: 'success', autoDismiss: true, });
                }
            })
            console.log(saveClassData);
        })
        
    }
    return (
        <div className='mx-6 my-2'>
             <h1 className='text-3xl font-semibold text-center my-3'>Add A New Class</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className='flex gap-5'>
                    <div className='w-1/2'>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Class Name
                        </label>
                        <input
                            id="className"
                            type="text"
                            autoComplete="name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Name"
                            {...register("className", { required: true })}

                        />
                        {errors.className?.type === 'required' && <p className='text-red-600'>Class Name is required </p>}
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Available seats
                        </label>
                        <input
                            id="AvailableSeats"
                            name="AvailableSeats"
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Available Seats"
                            {...register("AvailableSeats", { required: true })}
                        />
                        {errors.AvailableSeats?.type === 'required' && <p className='text-red-600'> Available Seats number is required </p>}
                    </div>
                    
                </div>
                <div className='flex gap-5'>
                <div className='w-1/2'>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                           Price
                        </label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder='Price '
                            {...register("price", { required: true })}
                        />

                        {errors.price?.type === 'required' && <p className='text-red-600'> Price is required </p>}
                        
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Instructor name
                        </label>
                        <input
                           defaultValue={user.displayName}
                           readOnly
                            id="InstructorName"
                            name="address"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Instructor Name"
                            {...register("InstructorName")}
                        ></input>
                    </div>

                </div>
                <div className='flex gap-5'>
                <div className='w-1/2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Instructor email
                        </label>
                        <input
                            defaultValue={user.email}
                            readOnly
                            id="InstructorEmail"
                            type="email"
                            autoComplete="email"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Instructor email"
                            {...register("InstructorEmail")}
                        />
                    </div>
                    <div className='w-1/2'>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Class Image
                        </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-md  file-input-accent w-full max-w-xs" />
                    {errors.image?.type === 'required' && <p className='text-red-600'> Image is required </p>}
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Class
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddaClass;