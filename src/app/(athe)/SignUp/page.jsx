import React from 'react'
import { FaShieldAlt, FaStar } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

import imgperson from "../../../assests/images/imageperson.png"
import SineUp from './../../_commponens/SineUp';

export default function SignUp() {
    return (
        <div className='grid grid-cols-2 mt-14 px-4 md:gap-12 lg:px-7'>
            {/* shattttttttttee */}
            <div className='col-span-2 md:col-span-1'>
                <div>
                    <h1 className='font-bold text-[36px]'>Welcome to <span className='text-[#16A34A]'>FreshCart</span></h1>
                    <p className='font-medium text-[20px] text-[#364153] my-2'>Join thousands of happy customers who enjoy fresh groceries
                        delivered right to their doorstep.
                    </p>

                </div>

                <div>
                    <ul>
                        <li>
                            <div className='flex items-center gap-4'>
                                <div className='flex justify-center items-center bg-[#BBF7D0] w-12 h-12 rounded-full'>

                                    <FaStar className='text-[#16A34A] w-4.75 h-4.5' />
                                </div>
                                <div>
                                    <p className='font-semibold text-[18px] m-0 text-[#364153]'>Premium Quality</p>
                                    <p className='font-medium text-[16px] m-0 text-[#4A5565]'>Premium quality products sourced from trusted suppliers.</p>
                                </div>
                            </div>
                        </li>
                        <li className='my-6'>
                            <div className='flex items-center gap-4'>
                                <div className='flex justify-center items-center bg-[#BBF7D0] w-12 h-12 rounded-full'>

                                    <FaTruckFast className='text-[#16A34A] w-4.75 h-4.5' />
                                </div>
                                <div>
                                    <p className='font-semibold text-[18px] m-0 text-[#364153]'>Premium Quality</p>
                                    <p className='font-medium text-[16px] m-0 text-[#4A5565]'>Premium quality products sourced from trusted suppliers.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <div className='flex justify-center items-center bg-[#BBF7D0] w-12 h-12 rounded-full'>

                                    <FaShieldAlt className='text-[#16A34A] w-4.75 h-4.5' />
                                </div>
                                <div>
                                    <p className='font-semibold text-[18px] m-0 text-[#364153]'>Premium Quality</p>
                                    <p className='font-medium text-[16px] m-0 text-[#4A5565]'>Premium quality products sourced from trusted suppliers.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='p-4 rounded-[6px] my-2 shadow-md'>
                    <div className='flex gap-4'>
                        <img src={imgperson.src} alt="" />
                        <div>
                            <p className='text-[#364153] font-medium'>Sarah Johnson</p>
                            <div className='flex' >
                                <FaStar className='text-[#FFDF20]' />
                                <FaStar className='text-[#FFDF20]' />
                                <FaStar className='text-[#FFDF20]' />
                                <FaStar className='text-[#FFDF20]' />
                                <FaStar className='text-[#FFDF20]' />
                            </div>
                        </div>
                    </div>
                    <p className='italic font-medium text-[16px] mt-4'>
                        "FreshCart has transformed my shopping experience. The quality of the
                        products is outstanding, and the delivery is always on time. Highly
                        recommend!"
                    </p>
                </div>
            </div>

            
            <div className='col-span-2 md:col-span-1'>

            <SineUp/>
            </div>
        </div>
    )
}
