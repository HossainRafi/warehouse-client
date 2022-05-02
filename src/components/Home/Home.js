import React from 'react';
import Carousel from '../Carousel/Carousel';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div className='bg-gray-200'>
            <Carousel />
            <Inventory/>
        </div>
    );
};

export default Home;