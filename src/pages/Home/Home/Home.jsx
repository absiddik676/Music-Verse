import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
        </div>
    );
};

export default Home;