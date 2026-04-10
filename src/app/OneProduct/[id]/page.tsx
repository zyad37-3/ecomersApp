import SaleBuy from '@/app/_commponens/SaleBuy';
import SliderOne from '@/app/_commponens/SliderOne';
import StarRating from '@/app/_commponens/StarRating';
import { getProductById } from '@/servise/product'
import React from 'react'
import { TbPointFilled } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import TowButton from '@/app/_commponens/TowButton';

interface Params {
    params: { id: number; }
}

export default async function page({ params }: Params) {

    const app = await params
    let product = await getProductById(app.id)
    console.log(product);

    return (
        <div className='grid grid-cols-3  gap-2 p-4'>
            <div className='p-4 border rounded-md col-span-3 md:col-span-1'>
                <SliderOne product={product} />

            </div>
            <div className='gap-2 rounded-[12px] shadow-md p-10 col-span-3 md:col-span-2'>
                <div className='flex items-center '>
                    <div >
                        <p className='bg-[#F0FDF4] w-fit py-2 px-3 rounded-[33554400px] font-medium text-[#15803D] text-[12px]'>{product.category.name}</p>
                    </div>
                    <div>
                        <p className=' w-fit py-2 px-3 rounded-[33554400px] bg-[#F3F4F6] font-medium text-[#364153] text-[12px]'>{product.brand.name}</p>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-[#101828] my-2'>Woman Shawl</h1>
                    <div className='flex items-center gap-3'>


                        <StarRating rating={product.ratingsAverage} />



                        <p className='font-medium  leading-4 text-[#6A7282] mb-2'>{`${product.ratingsAverage} (${product.ratingsQuantity} reviews)`}</p>
                    </div>

                    <h1 className='font-bold text-[#1E2939] '>{product.price} EGP</h1>

                    <div className='flex items-center  w-fit py-2 px-3 rounded-full bg-[#F0FDF4]'>
                        <TbPointFilled className='text-[#008236]' />
                        <p className='text-[#008236] font-medium text-[14px]'>In Stock</p>
                    </div>
                </div>

                <div className='mt-5'>
                    <p className='font-medium text-[12px] text-[#4A5565]'>Material Polyester Blend Colour Name
                        Multicolour Department Women</p>
                    <div>
                        <p className='text-[#364153] font-medium'>Quantity</p>

                        <SaleBuy price={product.price} />



                    </div>
                </div>

                <div>
                    <TowButton fromId={product.id}/>
                </div>

















            </div>

        </div>
    )
}
