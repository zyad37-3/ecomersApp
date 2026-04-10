import { ProductType } from '@/Types/Product.type'
import React from 'react'
import { FaStar } from "react-icons/fa6";

import StarRating from './StarRating';
import { CiHeart } from "react-icons/ci";
import { MdLoop } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import Link from 'next/link';
import AddToCardBtn from './AddToCardBtn';
import AddWishlist from './AddWishlist';


interface ProductCard {
    product: ProductType
}

export default function ProductCard({ product }: ProductCard) {



    const price = Number(product.price);
    const discount = Number(product.priceAfterDiscount);



    return <>


        <div className=' hover:-translate-y-1.25 transition-transform hover:shadow-lg   border border-[#E5E7EB] rounded-md relative'>
            <div className='absolute top-2 right-2 '>
                <div className='w-8 h-8 flex justify-center items-center rounded-full shadow-md bg-white hover:text-red-500'>
                    <AddWishlist ProductId={product?.id as string} />

                </div>
                <div className='my-2 w-8 h-8 flex justify-center items-center rounded-full shadow-md bg-white hover:text-[#16a34a]'>

                    <MdLoop className='text-2xl' />
                </div>
                <Link href={`/OneProduct/${product._id}`} className='w-8 h-8 flex justify-center items-center rounded-full shadow-md bg-white hover:text-[#16a34a]'>

                    <FaRegEye className='text-2xl' />
                </Link>

            </div>
            {discount != null && discount > 0 && discount < price ? (
                <div className='absolute top-3 left-1 flex-center text-white w-11 h-6 rounded-sm bg-red-500 py-1 px-2'>
                    <p>
                        -{Math.round(((price - discount) / price) * 100)}%
                    </p>
                </div>
            ) : null}            <div className=' pt-0.5'>

                <img src={product.imageCover} className='  h-60 m-auto  ' alt={product.title} />
            </div>
            <div className=' p-4'>
                <div className='bg-white'>


                    <p className='font-medium text-[#6A7282]  text-sm  m-0'>{product.category.name}</p>

                    <p className=' font-medium text-[16px]  text-[#364153]  line-clamp-2'>{product.title}</p>
                    <div className='flex items-center gap-3'>


                        <StarRating rating={product.ratingsAverage} />



                        <p className='font-medium text-[12px] leading-4 text-[#6A7282]'>{`${product.ratingsAverage} (${product.ratingsQuantity})`}</p>
                    </div>

                </div>
                <div className='flex justify-between items-center pt-1'>
                    {product.priceAfterDiscount ? <div className='flex items-center gap-1'>

                        <p className='font-bold text-[#16A34A]'>{`${product.price} EGP`}</p>
                        <p className='font-medium text-[#6A7282] line-through'>{`${product.priceAfterDiscount} EGP`} </p>
                    </div>
                        : <p className='font-bold text-[#1E2939] '>{product.price} EGP</p>
                    }

                    <AddToCardBtn productId={product.id} />
                </div>
            </div>
        </div>


    </>
}
