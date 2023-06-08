
import Img2 from '../../assets/img/image-removebg-preview.png'
import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/img/88567-music.json';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const LottieAnimation = () => {
        const animationContainer = useRef(null);

        useEffect(() => {
            const anim = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
            });

            return () => {
                anim.destroy();
            };
        }, []);

        return <div ref={animationContainer} />;
    };
    return (
        <div >
            <div className="min-h-screen pt-14 bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-4/6 bg-white relative rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                            Sign up for Music Courses
                        </h2>
                        <form className="space-y-6">
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Full Name"

                                    />
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        autoComplete="tel"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <input
                                        id="address"
                                        name="address"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Address"
                                    ></input>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                        Gender
                                    </label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                                        Photo URL
                                    </label>
                                    <input
                                        id="photoURL"
                                        name="photoURL"
                                        type="text"
                                        autoComplete="url"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Photo URL"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                        <p className='text-center py-5 '>Already registered? <Link to='/login' className='text-blue-600'>Go to log in</Link></p>
                       <div className='flex justify-center'>
                       <button
                            className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md flex items-center justify-center space-x-2"

                        >
                            <FaGoogle size={20} />
                            <span>Sign In with Google</span>
                        </button>
                       </div>
                    </div>

                </div>
                <div className='w-48 absolute bottom-9 left-6'><LottieAnimation /></div>
                <div className='w-48 z-0 absolute right-0 top-9'><LottieAnimation /></div>
            </div>

        </div>
    );
};

export default SignUp;