import React, { useContext } from 'react';
import img from '../../../assets/img/home_hero_01.png'
import bgImg from '../../../assets/img/wave.svg'
import Img1 from '../../../assets/img/floating_notes_01.png'
import Img2 from '../../../assets/img/floating_notes_02.png'
import BouncingMusicNode from '../../../component/AnimatedImage';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { AuthContext } from '../../../Provider/AuthProvider';
AOS.init();
const Banner = () => {
    const {isDarkMode} = useContext(AuthContext)
    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className={` bg-no-repeat bg-bottom md:pt-24 mb-20 ${isDarkMode ? 'bg-[#1a1919]':'bg-[#f8d9e8]'}`}>
            <div className='mx-auto max-w-7xl bg-no-repeat relative px-3 md:px-0 pt-24 md:flex items-center justify-evenly'>
                <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='md:w-1/2 pb-32'>
                    <h3 className='text-2xl font-bold text-red-500'>ARE YOU LOOKING FOR</h3>
                    <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode?'text-white':''}`}>Music Courses <br />
                        Just For You?</h1>
                </div>
                <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='md:w-1/2'>
                    <img src={img} alt="" />
                </div>
                <div className='absolute top-24  left-80'>
                <BouncingMusicNode translateY1={'-5px'} translateY2={'10px'} img={Img1}/>
                </div>
                <div className='absolute top-80 md:top-5 w-24 md:w-full'>
                <BouncingMusicNode translateY1={'10px'} translateY2={'15px'} img={Img2} />
                </div>
            </div>
        </div>
    );
};

export default Banner;