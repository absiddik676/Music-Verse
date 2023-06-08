import React from 'react';
import img from '../../../assets/img/home_hero_01.png'
import bgImg from '../../../assets/img/wave.svg'
import Img1 from '../../../assets/img/floating_notes_01.png'
import Img2 from '../../../assets/img/floating_notes_02.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className='bg-[#f8d9e8] bg-no-repeat bg-bottom  mb-60'>
            <div className='mx-auto max-w-7xl bg-no-repeat relative pt-24 flex items-center justify-evenly'>
                <div className='w-1/2 pb-32'>
                    <h3 className='text-2xl font-bold text-red-500'>ARE YOU LOOKING FOR</h3>
                    <h1 className='text-6xl font-bold'>Music Courses <br />
                        Just For You?</h1>
                </div>
                <div className='w-1/2'>
                    <img src={img} alt="" />
                </div>
                <div className='absolute top-24 left-80'>
                    <img src={Img1} alt="" />
                </div>
                <div className='absolute top-24'>
                    <img src={Img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;