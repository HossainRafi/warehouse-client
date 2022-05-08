import React from 'react';
import Carousel from '../Carousel/Carousel';
import Inventory from '../Inventory/Inventory';
import Logo from '../Logo/Logo';

const Home = () => {
    return (
        <div className='bg-gray-200'>
            <Carousel />
            <Inventory />
            <Logo/>
        </div>
    );
};

export default Home;