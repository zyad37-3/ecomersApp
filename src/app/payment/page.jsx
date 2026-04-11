"use client"
import Link from 'next/link';
import React, { useContext, useState } from 'react'

import { FaReceipt, FaShieldAlt } from "react-icons/fa";
import { FaPhone, FaArrowLeft, FaWallet, FaCreditCard, FaLock, FaBoxArchive } from "react-icons/fa6";
import { PiHouseLineFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaCity } from "react-icons/fa6";
import img1 from "../../assests/images/visa.png";
import img2 from "../../assests/images/pop.png";
import img3 from "../../assests/images/am.png";

import { CardContext } from './../_context/CardContextProvider';
import { useForm } from 'react-hook-form';
import { RiCashFill } from 'react-icons/ri';
import { FaCircleCheck } from "react-icons/fa6";
import creatCashOrder, { creatVisaOrder, shippingAddressType } from './../_action/Order.action';
import { useRouter } from 'next/navigation';

export default function payment() {
    const { getfronApi, loading, cartId, setcartId, numberOfCardItem, cartproducts, totalCartPrice, setnumberOfCardItem, setcartproducts, settotalCartPrice } = useContext(CardContext)


    const form = useForm({
        defaultValues: {
            details: "",
            phone: "",
            city: "",
            postalCode: "",
            type: "cash"
        }
    })

    const { register, handleSubmit, watch } = form
    const payment = watch("type");
    const router = useRouter()

    async function handelpayment(value) {
        try {
            if (!cartId) {
                console.log("cardId is faaadyyy");
                return;
            }




            console.log(value, "pay", payment, "mmm", cartId, "value", value.type);
            const userData = {
                shippingAddress: {
                    city: value.city,
                    details: value.details,
                    phone: value.phone,
                    postalCode: value.postalCode,
                    type: value.type
                }
            }
            if (payment === "cash") {

                const res = await creatCashOrder(cartId, userData)
                console.log(res);
                if (res.status == "success") {
                    router.refresh();
                    router.push("/allorders")
                    await getfronApi()
                }

            } else if (payment === "online") {
                const res = await creatVisaOrder(cartId, userData)
                console.log(res);
                
                window.open(res.session.url)
            }
        } catch (error) {
           console.log("payment error:", error);
        }
        
    }


    return <>

        <div className='p-4'>
            {/* top complete */}
            <div className='flex items-center justify-between mb-8'>
                <div>

                    <div className='flex items-center gap-3'>
                        <div className='w-12 h-12 rounded-md bg-linear-to-r from-[#16A34A] to-[#15803D] text-white flex justify-center items-center shadow-lg shadow-[#16A34A33]'>
                            <FaReceipt className='w-[22.5px] h-7.5' />
                        </div>
                        <h1 className='font-bold text-[30px] text-[#101828]'>Complete Your Order</h1>
                    </div>
                    <p className='font-medium text-[#6A7282]'>Review your items and complete your purchase</p>
                </div>
                <Link href={"/cart"} className='flex items-center gap-2 text-[#16A34A] cursor-pointer hover:text-[#15803d] hover:bg-[#f0fdf4] px-4 py-2 '>
                    <FaArrowLeft className='w-4 h-3' />
                    <p className=' font-medium'>Back to Cart</p>
                </Link >
            </div>
            <form onSubmit={handleSubmit(handelpayment)} >
                <div className='grid grid-cols-3 gap-8'>
                    <div className='col-span-3 md:col-span-2'>


                        <div className='  border border-[#F3F4F6] rounded-xl shadow-md shadow-[#F3F4F6]'>
                            {/* top.home */}
                            <div className='py-4 px-6 bg-linear-to-r from-[#16A34A] to-[#15803D] rounded-tr-xl rounded-tl-xl'>
                                <div className='flex items-center gap-3 text-white'>
                                    <PiHouseLineFill className='w-4.5 h-4.5' />
                                    <h2 className='font-bold text-[18px]'>Shipping Address</h2>
                                </div>
                                <p className='font-medium text-[#DCFCE7] mt-1'>Where should we deliver your order?</p>



                            </div>
                            {/* body? */}
                            <div className='p-3.5'>
                                <div>

                                    <div className='flex items-center gap-3' >
                                        <FaBookmark className='w-2.5 h-3.5 text-[#22C55E]' />
                                        <p className='font-semibold text-[#1E2939]'>Saved Addresses</p>
                                    </div>
                                    <p className='font-medium text-[#4A5565] mt-3'>Select a saved address or enter a new one below</p>
                                </div>
                                <div className='flex items-center gap-3 bg-[#F0FDF4] border border-[#DCFCE7] p-4 rounded-xl'>
                                    <div className='bg-[#DCFCE7] w-7.5 h-7.5 rounded-full flex items-center justify-center'>
                                        <FaInfoCircle className='w-3.5 h-3.5 text-[#193CB8]' />
                                    </div>
                                    <div>

                                        <p className='font-medium text-[#193CB8]'>Delivery Information</p>
                                        <p className='font-medium text-[#155DFC]'>Please ensure your address is accurate for smooth delivery</p>
                                    </div>
                                </div>
                                {/* formmmmm */}

                                {/* city */}
                                <div>
                                    <label htmlFor="city">City *</label>
                                    <div className='relative'>

                                        <input type="text" id='city' className='w-full border-2 border-[#E5E7EB] py-3.5 pl-14 pr-4 rounded-lg focus:border-[#22c55e]' placeholder='e.g. Cairo, Alexandria, Giza'{...register("city", { required: true })} />
                                        <div className='w-8 h-8 rounded-md bg-[#F3F4F6] flex items-center justify-center absolute top-3 left-4'>

                                            <FaCity className='text-[#6A7282] w-[15.75px] h-3.5' />
                                        </div>
                                    </div>
                                </div>
                                {/* details */}
                                <div className='py-5'>
                                    <label htmlFor="details">Street Address *</label>
                                    <div className='relative'>

                                        <textarea rows={3} type="text" id='details' className='w-full border-2 border-[#E5E7EB] py-3.5 pl-14 pr-4 rounded-lg focus:border-[#22c55e]' placeholder='Street name, building number, floor, apartment...' {...register("details", { required: true })} />
                                        <div className='w-8 h-8 rounded-md bg-[#F3F4F6] flex items-center justify-center absolute top-3 left-4'>

                                            <FaPhone className='text-[#6A7282] w-[15.75px] h-3.5' />
                                        </div>
                                    </div>
                                </div>
                                {/* phone */}
                                <div className=''>
                                    <label htmlFor="phone">Phone Number *</label>
                                    <div className='relative'>

                                        <input type="tel" id='phone' className='w-full border-2 border-[#E5E7EB] py-3.5 pl-14 pr-4 rounded-lg focus:border-[#22c55e]' placeholder='01xxxxxxxxx' {...register("phone", { required: true, pattern: /^01[0125][0-9]{8}$/ })} />
                                        <div className='w-8 h-8 rounded-md bg-[#F3F4F6] flex items-center justify-center absolute top-3 left-4'>

                                            <FaPhone className='text-[#6A7282] w-[15.75px] h-3.5' />
                                        </div>
                                    </div>
                                </div>






                            </div>

                        </div>
                        {/* Cards ?? */}
                        <div className=''>
                            <div className='  border border-[#F3F4F6] rounded-xl shadow-md shadow-[#F3F4F6]'>
                                <div className='py-4 px-6 bg-linear-to-r from-[#16A34A] to-[#15803D] rounded-tr-xl rounded-tl-xl'>
                                    <div className='flex items-center gap-3 text-white'>
                                        <FaWallet className='w-4.5 h-4.5' />
                                        <h2 className='font-bold text-[18px]'>Payment Method</h2>
                                    </div>
                                    <p className='font-medium text-[#DCFCE7] mt-1'>Choose how you'd like to pay</p>



                                </div>

                            </div>
                            <div className='p-6'>
                                {/* Card cash" ??? */}
                                {payment === "cash" ?

                                    <label htmlFor='cash' className='border-2 my-4 bg-linear-to-r from-[#F0FDF4] to-[#F3F4F6]  border-[#22C55E] p-5 rounded-xl flex-item justify-between  w-full'>
                                        <input type="radio"

                                            value="cash"
                                            className="hidden"
                                            id='cash'


                                        />
                                        <div className='flex-item gap-4'>
                                            <div className='w-14 h-14 text-white bg-[#22C55E4D] rounded-md flex-center'>
                                                <RiCashFill className=' w-5 h-5 ' />
                                            </div>
                                            <div>
                                                <p className='font-bold text-[#15803D]'>Cash on Delivery</p>
                                                <p className='font-medium text-[#6A7282]'>Pay when your order arrives at your doorstep</p>
                                            </div>
                                        </div>

                                        <div >
                                            <FaCircleCheck className='w-7 h-7 rounded-full flex items-center justify-center text-[#16A34A]  border-2 border-gray-200' />
                                        </div>
                                    </label>
                                    :
                                    <label htmlFor='cash' className='border-2  border-[#E5E7EB] p-5 rounded-xl flex-item justify-between my-4  w-full'>
                                        <input type="radio"

                                            value="cash"
                                            id='cash'
                                            className="hidden"
                                            {...register("type")}

                                        />
                                        <div className='flex-item gap-4'>
                                            <div className='w-14 h-14 text-[#99A1AF] bg-[#F3F4F6] rounded-md flex-center'>
                                                <RiCashFill className='w-5 h-5 ' />
                                            </div>
                                            <div>
                                                <p className='font-bold'>Cash on Delivery</p>
                                                <p className='font-medium text-[#6A7282]'>Pay when your order arrives at your doorstep</p>
                                            </div>
                                        </div>

                                        <div className='w-7 h-7 rounded-full flex items-center justify-center  border-2 border-gray-200'>

                                        </div>
                                    </label>

                                }


                                {/* Card online?? */}
                                {payment === "online" ?
                                    <label htmlFor='online' className='border-2 bg-linear-to-r from-[#f0fdf4] to-blue-50 border-[#22C55E] p-5 rounded-xl flex-item justify-between  w-full'>
                                        <input type="radio"

                                            value="online"
                                            className="hidden"
                                            id='online'

                                        />
                                        <div className='flex-item gap-4'>
                                            <div className='w-14 h-14 text-white bg-linear-to-r from-[#22c55e] to-blue-500 rounded-md flex-center'>
                                                <FaCreditCard className='text-white w-5 h-3.5 ' />
                                            </div>
                                            <div>
                                                <p className='font-bold text-[#15803D]'>Pay Online</p>
                                                <p className='font-medium text-[#6A7282]'>Secure payment with Credit/Debit Card via Stripe</p>
                                                <div className='flex-item gap-2'>
                                                    <img src={img1.src} className='h-5' alt="" />
                                                    <img src={img2.src} className='h-5' alt="" />
                                                    <img src={img3.src} className='h-5' alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div >
                                            <FaCircleCheck className='w-7 h-7 rounded-full flex items-center justify-center text-[#16A34A]  border-2 border-gray-200' />
                                        </div>
                                    </label>

                                    :
                                    <label htmlFor='online' className='border-2  border-[#E5E7EB] p-5 rounded-xl flex-item justify-between  w-full'>
                                        <input type="radio"

                                            value="online"
                                            className="hidden"
                                            id='online'
                                            {...register("type")}

                                        />
                                        <div className='flex-item gap-4'>
                                            <div className='w-14 h-14 text-[#99A1AF] bg-[#F3F4F6] rounded-md flex-center'>
                                                <FaCreditCard className='w-5 h-3.5 ' />
                                            </div>
                                            <div>
                                                <p className='font-bold'>Pay Online</p>
                                                <p className='font-medium text-[#6A7282]'>Secure payment with Credit/Debit Card via Stripe</p>
                                                <div className='flex-item gap-2'>
                                                    <img src={img1.src} className='h-5' alt="" />
                                                    <img src={img2.src} className='h-5' alt="" />
                                                    <img src={img3.src} className='h-5' alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-7 h-7 rounded-full flex items-center justify-center  border-2 border-gray-200'>

                                        </div>
                                    </label>

                                }
                            </div>

                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-1 '>
                        <div className='  border border-[#F3F4F6] rounded-xl shadow-md shadow-[#F3F4F6]'>
                            <div className='py-4 px-6 bg-linear-to-r from-[#16A34A] to-[#15803D] rounded-tr-xl rounded-tl-xl'>
                                <div className='flex items-center gap-3 text-white'>
                                    <PiHouseLineFill className='w-4.5 h-4.5' />
                                    <h2 className='font-bold text-[18px]'>Order Summary</h2>
                                </div>
                                <p className='font-medium text-[#DCFCE7] mt-1'>{numberOfCardItem} items</p>



                            </div>
                            {/* moontagss? */}
                            <div className='max-h-56  p-5 overflow-scroll'>
                                {/* cards? */}
                                {cartproducts.map(item =>
                                    <div key={item.id} className='bg-[#F9FAFB] rounded-lg p-3 hover:bg-[#f3f4f6] mb-3'>
                                        <div className='flex-item gap-3'>
                                            <div className="p-2 w-14 h-14 bg-white rounded-lg border-2 border-[#F3F4F6] flex-center">
                                                <img src={item.product.imageCover} className='w-11.5 h-11.5 object-cover ' alt="" />
                                            </div>
                                            <div className='flex-item justify-between w-full'>
                                                <div>

                                                    <p className='font-medium'> {item.product.subcategory.name}</p>
                                                    <p className='font-medium text-[#6A7282]'>{item.count} ×{item.price} EGP</p>
                                                </div>
                                                <div>
                                                    <p className='font-bold text-[#101828]'>{item.count * item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}


                            </div>
                            <div>
                                <div className=' px-5'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[#4A5565] font-medium '>Subtotal({numberOfCardItem} items)</p>
                                        <p className='text-[#101828] text-[16px]'>{totalCartPrice} EGP</p>
                                    </div>
                                    <div className='flex items-center justify-between my-3'>
                                        <p className='text-[#4A5565] font-medium '>Shipping </p>
                                        <p className='text-[#00A63E] text-[16px]'>FREE</p>
                                    </div>
                                    <div className='flex items-center justify-between '>
                                        <p className='text-[#4A5565] font-semibold  '>Total</p>
                                        <div className='flex items-center border-t border-dashed border-[#E5E7EB] pt-3 gap-1 '>

                                            <p className='text-[#00A63E] text-[24px] font-bold '>{totalCartPrice}</p>

                                            <p className='text-[#6A7282] text-[16px] '>EGP</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' px-5'>
                                    {payment === "cash" ?
                                        <button  type='submit' className='cursor-pointer p-3 my-5 shadow-md shadow-[#16A34A33] rounded-lg border  font-semibold bg-linear-to-r from-[#16A34A] to-[#15803D] hover:from-[#15803d] hover:to-[#14532d] text-white flex justify-center items-center gap-2 w-full'>
                                            {loading ? <><FaBoxArchive /> Place Order ...</> : <><FaBoxArchive /> Place Order</>}
                                        </button >

                                        :

                                        <button type='submit' className='cursor-pointer p-3 my-5 shadow-md shadow-[#16A34A33] rounded-lg border  font-semibold bg-linear-to-r from-[#16A34A] to-[#15803D] hover:from-[#15803d] hover:to-[#14532d] text-white flex justify-center items-center gap-2 w-full'>
                                            <FaShieldAlt /> Proceed to Payment
                                        </button >

                                    }
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </form>










        </div >

















    </>
}
