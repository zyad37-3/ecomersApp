"use client"
import getBrandands from '@/servise/Brandandcatag'
import { brandsallTpyoe } from '@/Types/BrandandcatagType'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaTags } from 'react-icons/fa6'

export default function Brands() {
  const [brands, setbrands] = useState<brandsallTpyoe|null>(null)
  async function brandsall() {

    const res = await getBrandands()
    console.log(res.data);
    setbrands(res.data)
  }
  useEffect(()=>{
    brandsall()

  },[])
  return (
    <div>
      {/* top?/? */}
      <div className='w-full h-60 bg-linear-to-r from-[#7F22FE] via-[#7F22FE] to-[#8E51FF] px-4 py-12 sm:py-16'>
        <div className=' flex-item gap-5'>
          <div className='w-16 h-16 rounded-2xl text-white bg-white/20 shadow-xl flex-center ring-1 ring-white/30'>
            <FaTags className='w-7.5 h-6 text-white' />
          </div>
          <div>
            <h1 className='font-bold text-4xl text-white'>Top Brands</h1>
            <p className='font-medium text-[16px]  text-white'>Shop from your favorite brands</p>
          </div>
        </div>
      </div>

      {/* body? */}
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 my-10 gap-5'>
        {brands?.map((item: brandsallTpyoe) =>
          <Link key={item._id} href={`/specificBrand/${item._id}`} className='group col-span-1 rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1'>
            <div className='w-full mb-3 p-4 bg-[#F9FAFB] flex-center'>
              <img className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-500' src={item.image} alt={item.slug} />
            </div>
            <div className='text-center  '>
              <p className='font-semibold text-[16px] group-hover:text-violet-600'>{item.name}</p>
              <p className='font-semibold text-[16px] group-hover:text-violet-600 opacity-0 group-hover:opacity-100'>View Products</p>
            </div>
          </Link>
        )}


      </div>

    </div>


  )
}
