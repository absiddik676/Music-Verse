import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import BestInstructor from '../BestInstructor/BestInstructor';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClasses/>
            <BestInstructor/>
            <AboutUs/>
        </div>
    );
};

export default Home;