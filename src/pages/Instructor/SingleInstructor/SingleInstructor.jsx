import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
const SingleInstructor = ({ instructor }) => {
    console.log(instructor);
    return (
        <div data-aos="fade-up" data-aos-offset="20" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                <img className="w-full h-56 object-cover object-center" src={instructor.img} alt="avatar" />

                <div className="py-4 px-6">
                    <h1 className="text-2xl font-semibold text-gray-800">{instructor.name}</h1>
                    <div className="flex items-center mt-4 text-gray-700">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                            <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                        </svg>
                        <h1 className="px-2 text-sm">{instructor?.address}</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                        </svg>
                        <h1 className="px-2 text-sm">{instructor?.email}</h1>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <h1 className='text-lg font-semibold'>Fallow me on </h1>
                        <div className='flex  gap-6'>
                            <FaFacebook className='text-2xl text-blue-700 cursor-pointer'/>
                            <FaInstagram className='text-2xl text-red-400 cursor-pointer'/>
                            <FaTwitter className='text-2xl text-blue-400 cursor-pointer'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleInstructor;