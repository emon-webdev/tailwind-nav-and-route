import React from 'react';

const PriceOptions = ({ option }) => {
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-6'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-white'>{option.price}<span className='text-xl'>/month</span></h2>
                <p>{option.name}</p>
            </div>

        </div>
    );
};

export default PriceOptions;