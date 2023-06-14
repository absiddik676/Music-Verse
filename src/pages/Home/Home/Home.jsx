import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import BestInstructor from '../BestInstructor/BestInstructor';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClasses/>
            <BestInstructor/>
        </div>
    );
};

export default Home;