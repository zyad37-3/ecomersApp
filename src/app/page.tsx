import { Product } from '@/servise/product'
import React, { lazy, Suspense } from 'react'
import ProductCard from './_commponens/ProductCard';
import SliderAll from './_commponens/SliderAll';
import imge1 from "../assests/images/phot1.png"
import imge2 from "../assests/images/phot1.png"
import imge3 from "../assests/images/phot1.png"
import Loading from './loading';
import getmytoken from '@/utils/getmytoken';

const ShowmyCatagoresLAZY = lazy(() => import('./_commponens/ShowmyCatagores'))
export default async function home() {
  //api
  let products = await Product()

  getmytoken()

  console.log(products);
  const images = [imge1.src, imge2.src, imge3.src]
  return <>
    {/* <div className="after:w-full after:h-full after:top-0 after:right-0 after:left-0 after:bottom-0 z-10  after:bg-linear-to-r after:content-[''] after:from-[#00C950E5] after:to-[#05DF7280] after:to-50%">
      <SliderAll ListOfemg={images} />
    </div> */}

<div className="relative overflow-hidden">
  {/* طبقة الـ Overlay (الخلفية الملونة) */}
  <div className="absolute inset-0 z-10 pointer-events-none 
                  bg-gradient-to-r from-[#00C950E5] to-[#05DF7280] opacity-50">
  </div>

  {/* السلايدر */}
  <div className="relative z-0">
    <SliderAll ListOfemg={images} />
  </div>
</div>



    <div className='p-8 '>
      <div>
        <div>
          <Suspense fallback={<Loading />}>

            <ShowmyCatagoresLAZY />
          </Suspense>
        </div>
      </div>

      {/* <div className='my-7 grid grid-cols-2 bg-red-600'>
        <div className=' col-span-2 md:col-span-1 bg-linear-to-r  from-[#00BC7D] to-[#007A55] p-4'>
          <div className='py-2 px-3 bg-white text-white  mb-4'>
            <p className='font-medium text-[14px]'>🔥 Deal of the Day</p>
          </div>
          <div>
            <p className="font-bold text-2xl">Fresh Organic Fruits</p>
            <p className="font-medium text-[16px]">Get up to 40% off on selected organic fruits</p>
            <div className='flex-item gap-4'>
              <div>
                <p className="font-medium text-[16px]">40% OFF</p>
              </div>
              <div>
                <p className="font-bold text-white text-[14px]"><span className="font-medium text-sm text-white/70">Use code:</span> ORGANIC40</p>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl py-3 px-6'>
            <p className='text-[#009966] font-semibold text-[16px]'>Shop Now </p>
          </div>
        </div>
      </div> */}


      <div className='my-28'>

        <div className="px-3  after:content-[''] mb-8 relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:w-1.5 after:h-8 after:rounded-[33554400px] after:bg-linear-to-t after:from-[#00BC7D] after:to-[#007A55]">

          <p className='font-bold text-[30px] text-[#1E2939] '>Featured <span className='text-[#009966]'>Products</span></p>
        </div>

        <div className=' grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-6 '>

          {products?.map((product) => <ProductCard key={product._id} product={product} />)}


        </div>

      </div>
    </div>
  </>
}
