import React from 'react';
import img from '../../Utilities/pageNotFound.gif'

const Error = () => {
    return (
        <div>
            <img src={img} alt="" className='mx-auto h-[445px]' />
        </div>
    );
};

export default Error;