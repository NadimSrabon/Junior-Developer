import React, { useEffect, useState } from 'react';
import PopularItem from './PopularItem';

const PopularMenu = () => {

    const [menu , setMenu] = useState([]);

    useEffect(()=> {
        fetch('menu.json')
        .then(res=> res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    },[])
    return (
        <section>
            <div className='mx-auto text-center md:w-4/12 my-20'>
                <p className='font-inter text-yellow-600 mb-2'>---Popular Menu---</p>
                <h3 className='text-4xl font-inter uppercase border-y-4 py-4'>From Our Menu</h3>
            </div>

            <div className='grid md:grid-cols-2 gap-4'>
                {
                    menu.map(item => <PopularItem item={item}></PopularItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;