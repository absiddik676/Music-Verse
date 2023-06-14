import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import bgImg from '../../../assets/img/Violet-symbol-outlines.png'
import user from '../../../assets/img/user.png'
import user2 from '../../../assets/img/user2.png'
import user3 from '../../../assets/img/user3.png'
import user4 from '../../../assets/img/user4.png'
import { AuthContext } from "../../../Provider/AuthProvider";
const AboutUs = () => {
    const {isDarkMode} = useContext(AuthContext)
    return (
        <div className={`${isDarkMode ? 'bg-[#1a1919]':''}`}>
            <div className="md:flex max-w-7xl  gap-20 mx-auto">
            <div style={{ backgroundImage: `url(${bgImg})` }} className="md:w-1/2 h-screen bg-no-repeat flex items-center">

                <Swiper
                    
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper "
                >
                    <SwiperSlide>

                        <div className="flex flex-col items-center">
                            <img src={user} alt="" />
                            <p className={`${isDarkMode?'text-white':''} text-2xl px-10`}>"Fantastic online music classes! Talented instructors, engaging lessons, and great community support. Highly recommend!</p>
                            <h1 className="text-xl font-semibold pt-4 text-red-500">James</h1>
                            <h1 className={`${isDarkMode?'text-white':''} text-lg px-10`}>Student</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex flex-col items-center">
                            <img src={user2} alt="" />
                            <p className={`${isDarkMode?'text-white':''} text-2xl px-10`}>Incredible online music classes! The instructors go above and beyond to help students succeed.</p>
                            <h1 className="text-xl font-semibold pt-4 text-red-500">Emma</h1>
                            <h1 className={`${isDarkMode?'text-white':''} text-lg px-10`}>Student</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex flex-col items-center">
                            <img src={user3} alt="" />
                            <p className={`${isDarkMode?'text-white':''} text-2xl px-10`}>"Highly satisfied with the online music classes. Quality instruction and a supportive learning environment.</p>
                            <h1 className="text-xl font-semibold pt-4 text-red-500">Amelia</h1>
                            <h1 className={`${isDarkMode?'text-white':''} text-lg px-10`}>Student</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex flex-col items-center">
                            <img src={user4} alt="" />
                            <p className={`${isDarkMode?'text-white':''} text-2xl px-10`}>"Best online music classes ever! Convenient, interactive, and inspiring. I've learned so much</p>
                            <h1 className="text-xl font-semibold pt-4 text-red-500">Isabella</h1>
                            <h1 className={`${isDarkMode?'text-white':''} text-lg px-10`}>Student</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
            <div className="md:w-1/2 px-2 flex flex-col justify-center ">
                <h1 className="text-2xl text-red-600 font-semibold">ABOUT US</h1>
                <h1 className={`text-5xl font-semibold py-3 ${isDarkMode ? 'text-white':''}`}>MusicVerse Music Courses</h1>
                <p className={`${isDarkMode?'text-white':''}`}>Normcore proident sed selvage. Post-ironic ugh master cleanse etsy you probably haven’t heard of them mustache mollit readymade kombucha pug minim.</p>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;