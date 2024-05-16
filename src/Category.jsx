
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../src/assets/home/slide1.jpg'
import img2 from '../src/assets/home/slide2.jpg'
import img3 from '../src/assets/home/slide3.jpg'
import img4 from '../src/assets/home/slide4.jpg'
import img5 from '../src/assets/home/slide5.jpg'
import img6 from '../src/assets/home/grill.jpg'
import img7 from '../src/assets/home/chowmin.jpg'
import img8 from '../src/assets/home/burger.jpg'



const Category = () => {
    return (
        <section>

            <div className='mx-auto text-center md:w-4/12 my-10'>
                <p className='font-inter text-yellow-600 mb-2'>---From 11am To 10 pm---</p>
                <h3 className='text-4xl font-inter uppercase border-y-4 py-4'>Online Order</h3>
            </div>
            <div className='mt-12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                        <h3 className='text-3xl text-center font-cinzel -mt-12 text-white'>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                        <h3 className='text-3xl text-center font-cinzel -mt-12 text-white'>Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        <h3 className='text-3xl text-center font-cinzel -mt-12 text-white'>Soup</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                        <h3 className='text-3xl text-center font-cinzel -mt-12 text-white'>Pastry</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                        <h3 className='text-3xl text-center font-cinzel -mt-12 text-white'>Snacks</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[290px] w-[415px]' src={img6} alt="" />
                        <h3 className='text-3xl text-center font-cinzel -mt-12 text-white'>Grill</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[290px] w-[415px]' src={img7} alt="" />
                        <h3 className='text-3xl text-center font-cinzel -mt-12 text-white'>Chaomin</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[290px] w-[415px]' src={img8} alt="" />
                        <h3 className='text-3xl text-center font-cinzel -mt-12 text-white'>Burger</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;