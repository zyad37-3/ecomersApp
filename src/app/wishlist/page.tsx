"use client"
import React, { useContext, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { TbPointFilled } from 'react-icons/tb'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaHeart, FaTrash } from 'react-icons/fa';
import { FaArrowLeftLong, FaCheck } from 'react-icons/fa6';
import creatWishlist, { deledWishlist, tokenWishlist } from '../_action/Wishlist.Action';
import { WishlistContext } from '../_context/WishlistContextProvider';
import { ProductWishlist } from '@/Types/Wishlist';
import { CardContext } from '../_context/CardContextProvider';
import { toast } from 'sonner';
import addproductToCard from '../_action/CardAction';
import Link from 'next/link';

export default function wishlist() {
    const { productWishlist, getprodWishlist } = useContext(WishlistContext)!
    const { setnumberOfCardItem, setcartproducts, cartproducts, settotalCartPrice } = useContext(CardContext)!
    const [looding, setlooding] = useState(false)

    const [error, seterror] = useState(false)
    async function deledWishlistfn(id: string) {
        try {
            const res = await deledWishlist(id)
            console.log("delet", res);
            await getprodWishlist()

        } catch (error) {
            console.log("deletError", error);
        }

    }

    async function handeladdToCard(productId: string) {
        setlooding(true)


        try {
            const res = await addproductToCard(productId)
            console.log(res, productId);
            setcartproducts(res.data.products)
            
            // setTimeout(() => setsuccess(false), 1000)
            setnumberOfCardItem(res.numOfCartItems)
            settotalCartPrice(res.data.totalCartPrice)
            setcartproducts(res.data.products)

        } catch (error) {
            console.log("false", error);
            seterror(true)
            toast.error("not succes")


        } finally {
            setlooding(false)


        }


    }

    console.log("prouductWishlist", productWishlist);

    return <>

        <div className=''>
            <div className='flex-item gap-4 px-4 py-8'>
                <div className='w-12 h-12 rounded-md bg-[#FEF2F2] flex-center'>
                    <FaHeart className='text-[#FB2C36] ' />
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>My Wishlist</h1>
                    <p className='font-medium text-[#6A7282]'>5 items saved</p>
                </div>
            </div>


            {/* body? */}
            <div className=' mx-auto px-4 pb-8'>
                <div className='hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500'>
                    <div className='col-span-6'>Product</div>
                    <div className='col-span-2 text-center'>Price</div>
                    <div className='col-span-2 text-center'>Status</div>
                    <div className='col-span-2 text-center'>Actions</div>
                </div>
                <div className=''>
                    {productWishlist?.data?.map((item: ProductWishlist) => {
                        const isInCart = cartproducts.some(
                            (p) => p.product.id === item.id
                        )
                        return (<div className='border border-[#F3F4F6] p-4 rounded-md grid md:grid-cols-12'>
                            {/* img? */}
                            <div className='flex-item gap-4 md:col-span-6'>

                                <div className='w-20 h-20 rounded-md'>
                                    <img src={item.imageCover} className='w-19.5 h-19.5 object-cover' alt={item.title} />

                                </div>
                                <div>

                                    <p className='text-2xl font-medium'>{item.title}</p>
                                    <p className="font-medium text-[#99A1AF] text-[14px]">{item.category.name}</p>
                                </div>
                            </div>
                            {/* price/ */}

                            <div className='font-semibold text-[#101828] flex-item gap-2 md:m-0 my-4 md:col-span-2      md:flex-center'>
                                <p className='md:hidden text-[#6A7282] font-medium'>Price:</p>
                                <div className="">
                                    <p >{item.priceAfterDiscount ?? item.price}</p>
                                    {item.priceAfterDiscount && <p className='line-through text-[#99A1AF] font-medium text-[14px]'>{item.price}</p>}

                                </div>
                            </div>

                            {/* instock */}
                            <div className='font-semibold text-[#101828] flex-item gap-2 mb-4 md:m-0 md:col-span-2 md:flex-center'>
                                <p className='md:hidden text-[#6A7282] font-medium'>Status:</p>
                                <div className='bg-[#F0FDF4] py-1 px-3 rounded-lg flex-item gap-1.5 w-fit '>
                                    <TbPointFilled className='text-[#00C950] w-2 h-2' />
                                    <p className='text-[#008236] text-[14px]'>In Stock</p>
                                </div>

                            </div>
                            {/* addtocarad */}
                            <div className='flex-item sm:gap-1 md:gap-2 gap-2 sm:flex-center md:col-span-2'>
                                {isInCart ?
                                    <Link href={"/cart"} onClick={() => handeladdToCard(item.id)} className=' bg-gray-100 text-gray-700  justify-center  sm:m-0 md:w-fit lg:w-full w-full m-auto py-2.5 px-4 flex-item gap-2 rounded-lg '>
                                        <FaCheck className='text-xs text-green-600' />
                                        <p className='font-medium md:hidden lg:block'>View Cart</p>
                                    </Link>
                                    :
                                    <button onClick={() => handeladdToCard(item.id)} className='bg-[#16A34A] justify-center  sm:m-0 md:w-fit lg:w-full w-full m-auto hover:bg-[#15803d] text-white py-2.5 px-4 flex-item gap-2 rounded-lg '>
                                        <RiShoppingCart2Fill />
                                        <p className='font-medium md:hidden lg:block'>Add to Cart</p>
                                    </button>

                                }

                                <button onClick={() => deledWishlistfn(item.id)} className='flex-center rounded-lg text-[#99A1AF] border border-[#E5E7EB] hover:text-red-500 hover:border-red-200 hover:bg-red-50 w-10 h-10 '>
                                    <FaTrash />
                                </button >
                            </div>

                        </div>
                        )
                    }
                    )}
                </div>


            </div>
            <div className='border-t border-[#E5E7EB] py-6 px-4 flex items-center justify-between'>
                <Link href={"/"} className='cursor-pointer text-gray-500 hover:text-[#16A34A] font-medium text-[14px]  flex items-center gap-2'>
                    <FaArrowLeftLong />
                    <p className=''>Continue Shopping</p>
                </Link>

            </div>



            {/* md:col-span-2 flex items-center gap-2 md:justify-center */}

        </div>
    </>

}
