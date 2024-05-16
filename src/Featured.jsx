import React from 'react';
import featuring from '../src/assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {

    return (
        <div className='featured-item'>

            <div className='mx-auto text-center md:w-4/12 my-20'>
                <p className='font-inter text-yellow-600 mb-2'>---Check It Out---</p>
                <h3 className='text-4xl font-inter uppercase border-y-4 py-4'>From Our Menu</h3>
            </div>
            <div className='font-inter flex justify-center items-center gap-5 mx-8'>

                <div>
                    <img src={featuring} alt="" />
                </div>

                <div>
                    <p>17 May ,2024</p>
                    <p className='text-xl text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sunt eum, ullam vel odio iste ipsa itaque ipsam reprehenderit aliquam! Soluta sequi asperiores odio possimus molestiae repellendus molestias atque recusandae.</p>

                    <button className="btn btn-outline border-b-orange-400 mt-6">Default</button>
                </div>

            </div>
        </div>
    );
};

export default Featured;