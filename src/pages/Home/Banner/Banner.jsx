import React from 'react';
import img from '../../../assets/img/home_hero_01.png'
const Banner = () => {
    return (
        <div className='bg-purple-400 '>
            <div className='mx-auto max-w-7xl pt-24 flex justify-center items-center'>
                <div className='w-1/2'>
                    <h3 className='text-2xl font-semibold'>ARE YOU LOOKING FOR</h3>
                    <h1 className='text-5xl font-semibold'>Music Courses <br />
                        Just For You?</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,170.7C672,203,768,245,864,250.7C960,256,1056,224,1152,224C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </div>
                <div className='w-1/2'>
                    <img src={img} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Banner;