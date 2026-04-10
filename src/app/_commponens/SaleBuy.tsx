"use client"
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
interface Price {
    price: number
}
export default function SaleBuy({ price }: Price) {
    const [plus, setplus] = useState(1)
    function bluse(e:boolean) {
        if (plus >=0 ) {
            setplus(1)
        }
        if (e) {
            if(plus < 220){

                setplus(plus + 1)
            }
        } else {
            if(plus >1 ){

                setplus(plus - 1)
            }

        }
    }

    return <>
        <div className='flex items-center gap-3'>

            <div className='flex items-center gap-3.5 border border-[#E5E7EB] w-fit p-1'>
                <button onClick={() => bluse(false)} className=' hover:bg-gray-100 hover:text-[#16a34a] py-2 px-2'>
                    <FaMinus />
                </button>

                <input type="number" onChange={(e) => setplus(Number(e.target.value))} placeholder='1' value={`${plus}`} className='w-12.25!' max={`220`} min={`1`} />
                <button onClick={() => bluse(true)} className=' hover:bg-gray-100 hover:text-[#16a34a] py-2 px-2'>
                    <FaPlus />
                </button>
            </div>
            <p className='text-[#6A7282] font-medium'>220 available</p>
        </div>
        <div className='bg-[#F9FAFB]  flex items-center justify-between p-4 mt-6 rounded-md'>
            <p className='font-medium text-[16px]'>Total Price:</p>
            <p className='text-[#16A34A] font-bold'>{plus * price} EGP</p>
        </div>

    </>
}
