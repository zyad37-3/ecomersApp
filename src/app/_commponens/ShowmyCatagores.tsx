import getAllCategory from '@/servise/Category'
import Link from 'next/link'
import React from 'react'

export default async function ShowmyCatagores() {
    const Catagores = await getAllCategory()
    return <>
        <div>
            <div className='flex items-center justify-between mb-8'>
                <div className="px-3  after:content-[''] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:w-1.5 after:h-8 after:rounded-[33554400px] after:bg-linear-to-t after:from-[#00BC7D] after:to-[#007A55]">
                    <p className='font-bold text-[30px] text-[#1E2939] '>Shop By <span className='text-[#009966]'>Category</span></p>
                </div>
                <Link href={"/Categories"} className='text-[#16A34A] font-medium'>View All Categories</Link>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4'>
                {Catagores?.map(item => <>
                    <div className='text-center hover:shadow-md hover:transition   cursor-pointer  p-4 rounded-lg bg-white shadow-sm '>
                        <img src={item.image} className='w-20 h-20 m-auto rounded-full' alt="" />
                        <p className='font-medium'>{item.slug}</p>
                    </div>
                </>)}
            </div >

        </div>
    </>
}
