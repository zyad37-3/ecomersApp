import ProductCard from '@/app/_commponens/ProductCard';
import { getBrandandsProduct, specificBrand } from '@/servise/Brandandcatag';
import Link from 'next/link';
import React from 'react'
import { FaArrowRight, FaBoxOpen } from 'react-icons/fa6';
interface Params {
    params: { id: number; }
}






export default async function specificBrands({ params }: Params) {
    const app = await params

    console.log(app);
    let product = await specificBrand(app.id)
    console.log(product);

    const res = await getBrandandsProduct(app.id)
    console.log("brand gatt", res);

    return <>


        <div className='w-full h-60 bg-linear-to-r from-[#7F22FE] via-[#7F22FE] to-[#8E51FF] px-4 py-12 sm:py-16'>
            <div className=' flex-item gap-5'>
                <div className='w-16 h-16 rounded-2xl text-white bg-white/20 shadow-xl flex-center ring-1 ring-white/30'>
                    <img src={product.image} alt='' className='w-7.5 h-6 text-white' />
                </div>
                <div>
                    <h1 className='font-bold text-4xl text-white'>{product.name}</h1>
                    <p className='font-medium text-[16px]  text-white'>Shop {product.name} products</p>
                </div>
            </div>
        </div>


        {res?.length?
            <div className=' grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-6 my-6'>

                {res?.map((product) => <ProductCard key={product._id} product={product} />)}
            </div>
            :
            <div className="max-w-md text-center  mx-auto mt-6">
                <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                    <FaBoxOpen className="text-5xl text-[#d1d5dc]" />
                </div>
                <div >
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
                    <p className="text-gray-500 mb-8 leading-relaxed">Looks like you haven't added anything to your cart yet.</p>
                </div>
                <div className=" w-full mb-5">
                    <Link href={"/"} className='w-fit cursor-pointer p-3 mx-auto  shadow-md  hover:from-[#15803d] hover:to-[#14532d] shadow-[#16A34A33] rounded-lg border  font-semibold bg-linear-to-r from-[#16A34A] to-[#15803D] text-white flex justify-center items-center gap-2 '>
                        View All Products<FaArrowRight />
                    </Link >

                </div>
            </div>

        }
    </>


}
