"use client"
import { getCategories } from '@/servise/Brandandcatag';
import { brandsallTpyoe } from '@/Types/BrandandcatagType';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaLayerGroup } from 'react-icons/fa6'

export default function Categories() {


    const [Categories, setCategories] = useState<brandsallTpyoe|null>(null)
    async function Categoriessall() {
  
      const res = await getCategories()
      console.log(res.data);
      setCategories(res.data)
    }
    useEffect(()=>{
      Categoriessall()
  
    },[])
  
  return (
        <div>
          {/* top?/? */}
          <div className='w-full h-60 bg-linear-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80]  px-4 py-12 sm:py-16'>
            <div className=' flex-item gap-5'>
              <div className='w-16 h-16 rounded-2xl text-white bg-white/20 shadow-xl flex-center ring-1 ring-white/30'>
                <FaLayerGroup className='w-7.5 h-6 text-white' />
              </div>
              <div>
                <h1 className='font-bold text-4xl text-white'>All Categories</h1>
                <p className='font-medium text-[16px]  text-white'>Browse our wide range of product categories</p>
              </div>
            </div>
          </div>
    
          {/* body? */}
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 my-10 gap-5'>
            {Categories?.map((item: brandsallTpyoe ) =>
              <Link key={item._id} href={"/"} className=' group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#bbf7d0] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full'>
                <div className='aspect-square rounded-xl overflow-hidden h-40  bg-gray-50 mb-4'>
                  <img className='w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500' src={item.image} alt={item.slug} />
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