import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClasses/>
        </div>
    );
};

export default Home;