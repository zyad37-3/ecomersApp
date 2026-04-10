"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Navigation, Pagination } from 'swiper/modules';

import { ProductType } from '@/Types/Product.type';
interface ProductoneType{
    product:ProductType
}


export default function SliderOne({product}:ProductoneType) {
    console.log(product.images);
    
  return (
    <Swiper
     modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
     
        pagination={{ clickable: true ,renderBullet:function (index:number, className:string ) {
      return `<img src="${product.images[index]}" class="${className} w-[29px]! h-[125px]! object-cover! rounded-none! border! opacity-100!" />`;
    },bulletActiveClass:"rounded-none! w-20!"}}
    >
    {product?.images?.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} className="w-full  rounded-md" alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};