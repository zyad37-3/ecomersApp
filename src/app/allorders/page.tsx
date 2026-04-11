"use client"

import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { FaBoxOpen, FaCreditCard, FaMoneyBill, FaTruck } from 'react-icons/fa6';
import { IoBagSharp, IoLocationSharp } from 'react-icons/io5';
import { CardContext } from '../_context/CardContextProvider';
import img3 from "../../assests/images/deletimg.jpg";
import { GoClockFill } from 'react-icons/go';
import { HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineHashtag } from "react-icons/hi";
import { FaCalendarAlt } from 'react-icons/fa';
import { TbPointFilled } from 'react-icons/tb';
import { LuReceiptText } from 'react-icons/lu';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { allorderApi } from '../_action/Order.action';
import { userCartType } from '../../Types/order';


export default function allorders() {
  const [cartuser, setcartuser] = useState<userCartType[]>([])
  const [open, setOpen] = useState<string | null>(null)
  function bageGat(id: string) {
    setOpen(prev => (prev === id ? null : id))
  }

  async function allorderReq(): Promise<userCartType[]> {


    const res = await allorderApi()
    setcartuser(res as userCartType[])
    console.log("userCart", res);
    return res
  }
  useEffect(() => { allorderReq() }, [])


  return <>
    <div className='py-4 px-8'>
      {/* top? */}
      <div className='flex items-center justify-between mb-8'>
        <div>

          <div className='flex items-center gap-3 '>
            <div className='w-12 h-12 rounded-md bg-linear-to-r from-[#16A34A] to-[#15803D] text-white flex justify-center items-center shadow-lg shadow-[#16A34A33]'>
              <FaBoxOpen className='w-[22.5px] h-7.5' />
            </div>
            <h1 className='font-bold text-[30px] text-[#101828]'>My Orders</h1>
          </div>
          <p className='font-medium text-[#6A7282]'>Track and manage your 8 orders</p>
        </div>
        <Link href={"/"} className='flex items-center gap-2 text-[#16A34A] cursor-pointer hover:text-[#15803d] hover:bg-[#f0fdf4] px-4 py-2 '>
          <IoBagSharp className='w-4 h-3' />
          <p className=' font-medium'>Continue Shopping</p>
        </Link >
      </div>

      {/* bodyy */}

      {cartuser?.map((item: userCartType) => {
        const id = String(item._id);
        const orderId = String(item._id);
        return (
          <div key={item._id} className=' mb-3'>

            <div className='flex flex-item gap-5 p-5 rounded-xl border border-[#F3F4F6] shadow-sm hover:shadow-md'>

              <div className='relative w-28 h-28 border rounded-xl border-[#F3F4F6] p-2.5 bg-[#F9FAFB] flex-center'>
                <img src={item?.cartItems[0]?.product?.imageCover} className='w-22.5 h-22.5 object-cover bg-white' alt="" />
                <div className='absolute -top-2 -right-2  w-7 h-7 flex-center rounded-full text-white bg-black font-bold'>+2</div>
              </div>

              <div className=' w-full p-5  '>
                <div className='flex-item justify-between w-full'>
                  {item.paymentMethodType === "cash" ?
                    <div className='text-[#E17100] w-fit bg-[#FEF3C6] px-2.5 py-1 flex-item gap-1.5 rounded-md'>
                      <GoClockFill />
                      <p className='font-semibold'>Processing</p>
                    </div>
                    :
                    <div className='text-[#155DFC] w-fit bg-[#DCFCE7] px-2.5 py-1 flex-item gap-1.5 rounded-md'>
                      <FaTruck />
                      <p className='font-semibold'>On the way</p>
                    </div>
                  }
                  {item.paymentMethodType === "cash" ?
                    <div className='bg-[#F3F4F6] w-10 h-10 rounded-md  flex-center '>
                      <FaMoneyBill />
                    </div>
                    :
                    <div className='bg-[#F3E8FF] w-10 h-10 rounded-md  flex-center text-[#9810FA]'>
                      <FaCreditCard />
                    </div>
                  }
                </div>

                <div className='flex-item gap-1.5'>
                  <HiOutlineHashtag className='text-[#99A1AF] w-3 h-3 ' />
                  <h1 className='font-bold text-[18px] text-[#101828] '>{item._id}</h1>
                </div>
                <div className='flex-item gap-3'>
                  <div className='text-[#6A7282] flex-item gap-1.5'>
                    <FaCalendarAlt />
                    <p className='font-medium text-[14px]'>{new Date(item.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
                  </div>
                  <TbPointFilled className='text-[#6A7282]' />
                  <div className='text-[#6A7282] flex-item gap-1.5'>

                    <FaBoxOpen />
                    <p className='font-medium text-[14px]'>{item.cartItems.length} item</p>
                  </div>
                  <TbPointFilled className='text-[#6A7282]' />

                  <div className='text-[#6A7282] flex-item gap-1.5 my-3'>

                    <IoLocationSharp />
                    <p className='font-medium text-[14px]'>{item.shippingAddress.city}</p>
                  </div>
                </div>
                <div className='flex-item justify-between w-full'>
                  <div className='flex-item gap-1.5' >
                    <p className='font-bold text-2xl '>{item.totalOrderPrice}</p>
                    <p className='font-medium text-[#99A1AF] text-[14px]'>EGP</p>
                  </div>
                  <div className=''>

                    {/* <DropdownMenubtn /> */}
                    {open === String(item._id) ?

                      <button onClick={() => bageGat(orderId)} className="flex-item gap-2 bg-[#16a34a] px-4 py-2.5  rounded-xl font-semibold text-white shadow-lg " >Hide  <HiOutlineChevronUp /></button>
                      :
                      <button onClick={() => bageGat(orderId)} className="flex-item gap-2 bg-[#F3F4F6] px-4 py-2.5  rounded-xl font-semibold text-[#364153] shadow-lg hover:bg-gray-200" >Details  <HiOutlineChevronDown /></button>

                    }
                  </div>
                </div>
                <h1></h1>
              </div>

            </div>
            {/* opennnn */}
            {open === String(item._id) &&
              <div className='bg-gray-50/50 p-6'>

                <div className='flex-item gap-2 mb-4'>
                  <div className='w-6 h-6 rounde-md bg-[#DCFCE7] text-[#16A34A] flex-center rounded-full'>
                    <LuReceiptText />
                  </div>
                  <p className="font-semibold text-[14px] ">Order Items</p>
                </div>

                {item?.cartItems?.filter(Boolean)?.map((productItem) => <div className="p-4 mb-3 rounded-lg bg-white flex-item gap-4 border border-[#F3F4F6] w-full">
                  <div className='w-16 h-16 border rounded-xl border-[#F3F4F6] p-2.5 bg-[#F9FAFB] flex-center'>
                    <img src={productItem?.product?.imageCover} className='w-12 h-12 object-cover bg-white' alt="" />
                  </div>
                  <div className='flex-item justify-between w-full'>
                    <div>
                      <p className="font-medium text-[16px]">{productItem?.product?.title}</p>
                      <p className="font-medium text-[#364153] text-[14px]">{productItem.count} × {productItem.price} EGP</p>
                    </div>
                    <div>
                      <p className='font-bold text-[18px] text-[#101828] '>{productItem.price * productItem.count}</p>
                      <p className='font-medium text-[#99A1AF] text-[14px]'>EGP</p>
                    </div>
                  </div>
                </div>
                )}
                {/* cart */}
                <div className='flex-item gap-4 w-full mt-3'>

                  <div className='p-4 rounded-lg border border-[#F3F4F6]  bg-white w-1/2 '>
                    <div className='flex-item gap-4 mb-3'>
                      <div className='w-6 h-6  bg-[#DCFCE7] flex-center rounded-full'>
                        <IoLocationSharp className='text-[#155DFC] ' />
                      </div>
                      <p className='font-semibold'>Delivery Address</p>
                    </div>
                    <div>
                      <p className='font-medium '>{item.shippingAddress.city}</p>
                      <p className='font-medium text-[#4A5565] my-2'>{item.shippingAddress.details}</p>
                      <div className='flex-item gap-4 '>
                        <BsFillTelephoneFill />
                        <p className='font-medium text-[#4A5565]'>{item.shippingAddress.phone}</p>
                      </div>
                    </div>
                  </div>

                  {item.paymentMethodType === "cash" ?
                    <div className='p-4 rounded-lg border border-[#FEE685]  bg-[#FEE685] w-1/2'>
                      <div className='flex-item gap-4 mb-3'>
                        <div className='w-6 h-6  bg-[#FE9A00] flex-center rounded-full'>
                          <GoClockFill className='text-white ' />
                        </div>
                        <p className='font-semibold'>Order Summary</p>
                      </div>

                      <div>
                        <div className='text-[#4A5565] flex-item justify-between'>
                          <p className='font-medium '>Subtotal</p>
                          <p className='font-medium '>{item.totalOrderPrice} EGP</p>
                        </div>
                        <div className='text-[#4A5565] flex-item justify-betweenmt'>
                          <p className='font-medium '>Shipping</p>
                          <p className='font-medium '>{item.shippingPrice}</p>
                        </div>
                        <div className='text-[#101828] flex-item justify-between mt-4'>
                          <p className=' font-semibold'>Total</p>
                          <p className=' font-bold'>{item.totalOrderPrice} EGP</p>
                        </div>

                      </div>
                    </div>
                    :
                    <div className='p-4 rounded-lg border border-[#FEE685]  bg-blue-100 w-1/2'>
                      <div className='flex-item gap-4 mb-3'>
                        <div className='w-6 h-6  bg-blue-500 flex-center rounded-full'>
                          <FaTruck className='text-white ' />
                        </div>
                        <p className='font-semibold'>On the way</p>
                      </div>

                      <div>
                        <div className='text-[#4A5565] flex-item justify-between'>
                          <p className='font-medium '>Subtotal</p>
                          <p className='font-medium '>{item.totalOrderPrice} EGP</p>
                        </div>
                        <div className='text-[#4A5565] flex-item justify-betweenmt'>
                          <p className='font-medium '>Shipping</p>
                          <p className='font-medium '>{item.shippingPrice}</p>
                        </div>
                        <div className='text-[#101828] flex-item justify-between mt-4'>
                          <p className=' font-semibold'>Total</p>
                          <p className=' font-bold'>{item.totalOrderPrice} EGP</p>
                        </div>

                      </div>
                    </div>
                  }


                </div>
              </div>
            }
          </div>

        )
      }

      )}

    </div>























  </>


}
