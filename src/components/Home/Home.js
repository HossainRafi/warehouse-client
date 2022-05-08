import React from 'react';
import Carousel from '../Carousel/Carousel';
import Inventory from '../Inventory/Inventory';
import Logo from '../Logo/Logo';
import Ratting from '../Ratting/Ratting';

const Home = () => {
    return (
        <div className='bg-gray-200'>
            <Carousel />
            <Inventory />
            <Ratting/>
            <Logo/>
        </div>
    );
};

export default Home;