import React, { useContext, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Provider/AuthProvider';
const Test = () => {
    const { user } = useContext(AuthContext);
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm();
    useEffect(()=>{
        setValue('InstructorEmail', user.email);
    },[user])
    const onSubmit = (data) => {
      console.log(data);
    };
      
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        {/* ...other form fields... */}
        <div className='flex gap-5'>
          <div className='w-1/2'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Instructor email
            </label>
            <input
              defaultValue={user.email}
              readOnly
              id='InstructorEmail'
              type='email'
              autoComplete='email'
              className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='Instructor email'
              {...register('InstructorEmail', { readOnly: true })}
            />
          </div>
          {/* ...other form fields... */}
        </div>
        {/* ...other form fields... */}
        <div>
          <button
            type='submit'
            className='w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Add Class
          </button>
        </div>
      </form>
        </div>
    );
};

export default Test;