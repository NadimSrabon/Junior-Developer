import React from 'react';

const PopularItem = ({item}) => {

    const {name,image,price,recipe} = item
    return (
        <div className='flex space-x-4 font-inter mt-8'>

        <img style={{ borderRadius: '0 200px 200px 200px' }} className='h-[80px] w-[100px]' src={image} alt="" />

        <div>
            <h2 className='uppercase'>{name}----------------</h2>
            <p>{recipe}</p>
        </div>
        <p className='text-yellow-500'>{price}</p>

            
        </div>
    );
};

export default PopularItem;