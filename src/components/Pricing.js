import React from 'react';
import PriceOptions from './PriceOptions';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0 },
        { id: 2, name: 'Medium', price: 9.99 },
        { id: 3, name: 'Premium', price: 19.99 },
    ]




    return (
        <div>
            <h2 className='text-5xl my-6 text-center py-5 font-bold bg-indigo-300 text-white'>Best Deal of the Town</h2>
            <div className='grid grid-cols-3 gap-3'>
            {
                pricingOptions.map(option => <PriceOptions
                
                    key={option.id}
                    option={option}
                />)
            }
            </div>
        </div>
    );
};

export default Pricing;