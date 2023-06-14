import React from 'react';
import img from '../../../assets/img/home_hero_01.png'
import bgImg from '../../../assets/img/wave.svg'
import Img1 from '../../../assets/img/floating_notes_01.png'
import Img2 from '../../../assets/img/floating_notes_02.png'
import BouncingMusicNode from '../../../component/AnimatedImage';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className='bg-[#f8d9e8] bg-no-repeat bg-bottom pt-24 mb-20'>
            <div className='mx-auto max-w-7xl bg-no-repeat relative pt-24 flex items-center justify-evenly'>
                <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='w-1/2 pb-32'>
                    <h3 className='text-2xl font-bold text-red-500'>ARE YOU LOOKING FOR</h3>
                    <h1 className='text-6xl font-bold'>Music Courses <br />
                        Just For You?</h1>
                </div>
                <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='w-1/2'>
                    <img src={img} alt="" />
                </div>
                <div className='absolute top-24 left-80'>
                <BouncingMusicNode translateY1={'-5px'} translateY2={'10px'} img={Img1}/>
                </div>
                <div className='absolute top-24'>
                <BouncingMusicNode translateY1={'10px'} translateY2={'15px'} img={Img2} />
                </div>
            </div>
        </div>
    );
};

export default Banner;