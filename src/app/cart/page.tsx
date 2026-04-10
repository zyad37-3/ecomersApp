"use client"
import { LoaderIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

import React, { useContext, useState } from 'react'
import { FaShieldAlt, FaShoppingCart } from "react-icons/fa";
import imgd from "../../assests/images/deletimg.jpg"
import { IoCheckmarkSharp } from "react-icons/io5";
import {  FaArrowRight, FaBoxOpen, FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { CardContext } from '../_context/CardContextProvider';
import { CartItemType } from '@/Types/card.Type';
import { clearUserCart, deletUserCart, updateUserCart } from '../_action/CardAction';
import { toast } from 'sonner';
import { FaLock } from "react-icons/fa";
import { Product } from '@/servise/product';
import Link from "next/link"
export default function CartPage() {
  const [looding, setlooding] = useState<string | null>(null)
  const { getfronApi,numberOfCardItem, cartproducts, totalCartPrice, setnumberOfCardItem, setcartproducts, settotalCartPrice } =useContext(CardContext)



  
  async function deletCart(productId: string) {
    const res = await deletUserCart(productId)
    // setnumberOfCardItem(res.numOfCartItems)
    // settotalCartPrice(res.data.totalCartPrice)
    // setcartproducts(res.data.products)
    toast.success(res.message,{position:"top-center",richColors:true})
   await getfronApi()
  }
  async function clearCart() {
    const res = await clearUserCart()
    // setnumberOfCardItem(res.numOfCartItems)
    // settotalCartPrice(res.data.totalCartPrice)
    // setcartproducts(res.data.products)
    toast.success(res.message)
      await getfronApi()

  }
  async function updateCart(id: string, count: number) {
    setlooding(id)
    const res = await updateUserCart(id, count)
    console.log("loodd");

    if (res.status == "success") {
      console.log(res);

      console.log("yessss");
      // setnumberOfCardItem(res.numOfCartItems)
      // settotalCartPrice(res.data.totalCartPrice)
      // setcartproducts(res.data.products)
      await getfronApi() 
      toast.success(res.message, { position: "top-center", richColors: true })

    } else {
      toast.error(res.message, { position: "top-center", richColors: true })
    }
    setlooding(null)
  }
  return <>

    <div className='p-3'>
      {/* Shopping Cart */}
      <div>
        <div className='flex items-center gap-3'>
          <div className='bg-red-500 w-12 h-12 rounded-[12px] flex justify-center items-center' >

            <FaShoppingCart className='text-white w-[33px] h-[30px]' />
          </div>
          <h1 className='font-bold text-[#101828] text-[30px]'>Shopping Cart</h1>
        </div>
        <p className='mt-2 font-medium text-[16px] text-[#6A7282]'>You have <span className='font-semibold text-[#16A34A]'>{numberOfCardItem} items</span> in your cart</p>
      </div>

      <div className='grid grid-cols-4 gap-8 mt-8'>

        <div className='col-span-4 md:col-span-3'>
          {/* Product (img)*/}
          {cartproducts && cartproducts.length > 0  ?
            <>
              {
                cartproducts.map((item: CartItemType) => <div className='flex gap-6 border border-#f3f4f6 rounded-xl mb-6  p-4 sm:p-5 shadow-sm'>

                  <div className=' '>

                    <div className='bg-linear-to-r from-[#F9FAFB] to-white w-fit p-3 border border-[#F3F4F6] rounded-[12px]'>
                      <img className='w-[102px] h-[102px] object-cover' src={item.product.imageCover} alt="" />
                    </div>
                    <div className='w-fit bg-[#00C950] py-0.5 px-2 rounded-xl flex items-center justify-center gap-1 text-white mt-[21px] ml-auto'>
                      <IoCheckmarkSharp className='w-3 h-3' />
                      <p>In Stock</p>
                    </div>
                  </div>
                  {/* Product (titel)*/}
                  <div className=' w-full' >
                    <div>
                      <h1 className='font-semibold text-[18px]'>{item.product.title}</h1>
                      <div className='flex items-center gap-2 mt-1.5 mb-3'>
                        <div className='bg-linear-to-r from-[#F0FDF4] to-[#F3F4F6] w-fit py-1 px-2.5 rounded-xl'>
                          <p className='font-medium text-[12px] text-[#15803D]'>{item.product.subcategory.name}</p>
                        </div>
                        <p>.</p>
                        <p className='text-[#6A7282] text-[12px]'>SKU: 5CA0AD</p>
                      </div>
                      <div className='flex items-center gap-2 pb-4'>
                        <p className='text-[#16A34A] font-bold text-[18px]'>{item.price} EGP </p>
                        <p className='text-[#99A1AF] font-medium text-[12px]'>per unit</p>
                      </div>
                    </div>

                    <div className='sm:flex sm:items-center sm:justify-between '>
                      {looding == item.product.id ? <div className='border flex items-center bg-[#F9FAFB]  border-[#E5E7EB] rounded-md gap-5 w-fit p-1'>
                        <button disabled onClick={() => updateCart(item.product.id, item.count - 1)} className='w-8 h-8 bg-gray-200 rounded-md   cursor-pointer flex items-center justify-center'>

                          <FaMinus className='w-[10.5px] h-[10.5px] ' />
                        </button >
                        {looding === item.product.id ? (<span className="w-3">{<Spinner />}</span>) : (<span className="w-3">{item.count}</span>)}
                        <button disabled onClick={() => updateCart(item.product.id, item.count + 1)} className='w-8 h-8 rounded-md  bg-[#15803d] cursor-pointer shadow-sm flex items-center justify-center'>

                          <FaPlus className='w-[10.5px] h-[10.5px] text-white' />
                        </button>

                      </div>

                        : <div className='border flex items-center bg-[#F9FAFB]  border-[#E5E7EB] rounded-md gap-5 w-fit p-1'>
                          <div onClick={() => updateCart(item.product.id, item.count - 1)} className='w-8 h-8 rounded-md bg-white hover:bg-[#f9fafb] cursor-pointer flex items-center justify-center'>

                            <FaMinus className='w-[10.5px] h-[10.5px] ' />
                          </div>

                          {looding === item.product.id ? <span className="w-3">{<Spinner />}</span> : <span className="w-3">{item.count}</span>}

                          <button onClick={() => updateCart(item.product.id, item.count + 1)} className='w-8 h-8 rounded-md bg-[#16a34a] hover:bg-[#15803d] cursor-pointer shadow-sm flex items-center justify-center'>

                            <FaPlus className='w-[10.5px] h-[10.5px] text-white' />
                          </button>

                        </div>
                      }


                      <div className='flex items-center justify-center gap-4'>
                        <div className='flex items-center justify-center'>
                          <p className='font-bold text-[20px] pt-4 pr-1'>{item.count * item.price} </p>
                          <div>
                            <p className='font-medium text-[12px] text-[#99A1AF]'>Total</p>
                            <p className='font-medium text-[14px] text-[#99A1AF]'>EGP</p>
                          </div>
                        </div>
                        <div onClick={() => deletCart(item.product.id)} className='flex items-center justify-center bg-[#FEF2F2] border border-[#FFC9C9] text-[#FB2C36] hover:text-white hover:bg-[#FB2C36] w-10 h-10 rounded-md'>
                          <FaTrash className=' w-[12px] h-[14px]' />
                        </div>
                      </div>
                    </div>
                  </div>




                </div>
                )
              }


            </>
            :
            <div className="max-w-md text-center  mx-auto">
              <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                <FaBoxOpen className="text-5xl text-[#d1d5dc]" />
              </div>
              <div >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">Looks like you haven't added anything to your cart yet.</p>
              </div>
              <div className=" w-full mb-5">
                <Link href={"/"} className='w-fit cursor-pointer p-3 mx-auto  shadow-md  hover:from-[#15803d] hover:to-[#14532d] shadow-[#16A34A33] rounded-lg border  font-semibold bg-linear-to-r from-[#16A34A] to-[#15803D] text-white flex justify-center items-center gap-2 '>
                 Start Shopping <FaArrowRight />
                </Link >

              </div>
            </div>

          }


          <div className='border-t border-[#E5E7EB] pt-6 flex items-center justify-between'>
            <div className='cursor-pointer text-[#16A34A] font-medium text-[14px]  flex items-center gap-2'>
              <FaArrowLeftLong />
              <p className=''>Continue Shopping</p>
            </div>
            <div onClick={() => clearCart()} className='cursor-pointer flex items-center gap-2 font-medium text-[#99A1AF] hover:text-red-600'>
              <FaTrash />
              <p className='font-medium text-[14px]'>Clear all items</p>
            </div>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 '>
          <div className=' rounded-xl  border border-[#F3F4F6] shadow-sm'>
            {/* top */}
            <div className='rounded-tr-xl rounded-tl-xl bg-linear-to-r from-[#15803D] to-[#16A34A] py-4 px-6'>
              <div className='flex items-center gap-2 text-white'>
                <FaBagShopping />
                <p className='font-bold text-[20px]'>Order Summary</p>
              </div>
              <p className='text-[#DCFCE7] font-medium'>4 items in your cart</p>
            </div>
            {/* body-1 */}

            <div className=' px-5'>
              <div className='bg-linear-to-r from-[#F0FDF4] to-[#F3F4F6] p-4 rounded-md flex items-center gap-3 mt-6 mb-5'>
                <div className='w-10 h-10 rounded-full bg-[#DCFCE7] flex items-center justify-center'>
                  <FaTruck className='text-[#00A63E] w-4.5 h-3.75' />
                </div>
                <div>

                  <p className='text-[#008236] font-semibold '>Free Shipping!</p>
                  <p className='text-[#00A63E] font-medium text-[14px]'>You qualify for free delivery</p>
                </div>
              </div>
            </div>
            {/* body-2 */}
            <div className=' px-5'>
              <div className='flex items-center justify-between'>
                <p className='text-[#4A5565] font-medium '>Subtotal({numberOfCardItem} items)</p>
                <p className='text-[#101828] text-[16px]'>{totalCartPrice} EGP</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-[#4A5565] font-medium '>Shipping </p>
                <p className='text-[#00A63E] text-[16px]'>FREE</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-[#4A5565] font-semibold  '>Total</p>
                <div className='flex items-center border-t border-dashed border-[#E5E7EB] pt-3 mt-3'>

                  <p className='text-[#101828] text-[16px] font-bold'>{totalCartPrice}</p>

                  <p className='text-[#6A7282] text-[14px] '>EGP</p>
                </div>
              </div>
            </div>

            {/* body-3 btn*/}
            <div className=' px-5'>
              <button className='cursor-pointer p-3 mt-5 rounded-lg border border-dashed font-medium text-[#4A5565] flex justify-center items-center gap-2 w-full'>
                <FaTag /> Apply Promo Code
              </button>
              <Link onClick={async()=>await getfronApi()} href={"/payment"} className='cursor-pointer p-3 my-5 shadow-md  hover:from-[#15803d] hover:to-[#14532d] shadow-[#16A34A33] rounded-lg border  font-semibold bg-linear-to-r from-[#16A34A] to-[#15803D] text-white flex justify-center items-center gap-2 w-full'>
                <FaLock /> Secure Checkout
              </Link >
            </div>
            {/* body-3 */}
            <div className='pb-6 px-5'>
              <div className='p-2 flex justify-center items-center   gap-2 '>
                <div className='flex items-center gap-1.5 border-r border-[#E5E7EB] pr-2'>
                  <FaShieldAlt className='text-[#00C950]' />
                  <p className='font-medium text-[#6A7282] '>Secure Payment</p>
                </div>
                <div className='flex items-center gap-1.5   '>
                  <FaTruck className='text-[#2B7FFF]' />
                  <p className='font-medium text-[#6A7282] '>Fast Delivery</p>
                </div>
              </div>

              <div className='cursor-pointer text-[#16A34A] font-medium w-full text-center p-2'>
                <p >← Continue Shopping</p>
              </div>

            </div>

          </div>


        </div>


      </div>

    </div>














  </>


}
