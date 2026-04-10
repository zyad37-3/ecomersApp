import React from 'react'

import img3 from "../../../assests/images/img3.png"
import { FaTruck,FaShieldAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import SignInFn from '../../_commponens/SignInFn';


export default function Logen() {
  return <>
<div className='mt-[68px] grid grid-cols-2  gap-12'>


    <div className='hidden md:block md:col-span-1 '>
      <img src={img3.src} alt="" />
      <div className='text-center'>
        <h1 className='font-bold text-[30px]'>FreshCart - Your One-Stop Shop
          for Fresh Products</h1>
        <p className='text-[18px] font-medium my-4'>Join thousands of happy customers who trust FreshCart
          for their daily grocery needs</p>
          <div className='flex items-center justify-center gap-2'>
            <p className='font-medium text-[#6A7282] flex items-center gap-2'><FaTruck className='text-[#16A34A]' /> Free Delivery</p>
            <p className='font-medium text-[#6A7282] flex items-center gap-2'><FaShieldAlt className='text-[#16A34A]' /> Secure Payment</p>
            <p className='font-medium text-[#6A7282] flex items-center gap-2'><GoClockFill className='text-[#16A34A]' /> 24/7 Support</p>
          </div>
      </div>
    </div>
    <div className='px-4 col-span-2 md:col-span-1 '>

      <SignInFn />
    </div>
    </div>
  </>

}
