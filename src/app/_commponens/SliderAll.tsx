"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from "aos";
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
interface SliderAllType {
    ListOfemg: string[],
    slidesPerView?: number,
    spaceBetween?: number,
}

export default function SliderAll({ slidesPerView = 1, spaceBetween = 0, ListOfemg }: SliderAllType) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination]}

            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation
            loop
            pagination={{ clickable: true, bulletActiveClass: "bg-white! opacity-100! w-[32px]! h-[12px]! rounded-[6px]!" }}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
        >

            {ListOfemg.map((img) => <SwiperSlide>
                <div className='  w-full h-full overlay relative z-10'>

                    <img className='w-full overlay  h-100  object-cover ' src={img} alt="photo" />
                    <div className=' py-20 p-4 absolute inset-0 bg-linear-to-r from-green-500/90 to-green-400/50 z-10 '>
                        <div data-aos="fade-up" data-aos-duration="3000" className='text-white py-8.5 px-15 my-7.5'>
                            <h1 className='font-bold text-3xl w-[356px]'>Fresh Products Delivered
                                to your Door</h1>
                            <p className='font-medium '>Get 20% off your first order</p>
                            <div className='flex-item gap-2 mt-3'>
                                <button className='py-2 px-6 border-2 font-semibold rounded-md text-[#00C950] bg-white border-white hover:scale-105 transition-transform'>Shop Now</button>
                                <button className='py-2 px-6 border-2 font-semibold rounded-md text-white border-white hover:scale-105 transition-transform'>View Deals</button>
                            </div>
                        </div>

                    </div>

                </div>
            </SwiperSlide>)}


        </Swiper>
    );
};
