"use client"
import React, { useContext, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import creatWishlist, { deledWishlist } from '../_action/Wishlist.Action'
import { WishlistContext } from '../_context/WishlistContextProvider';
import { FaHeart } from 'react-icons/fa';
interface AddWishlistProps {
    ProductId: string;
}
export default function AddWishlist({ ProductId }: AddWishlistProps) {
    // const [love, setlove] = useState(false)
    const { numberWishlist, setnumberWishlist, productWishlist, getprodWishlist } = useContext(WishlistContext)


    const love = productWishlist?.data?.some(p => p.id === ProductId)

    async function deletwishlist(id) {
        try {
            const res = await deledWishlist(id)
            console.log("delet", res);
            await getprodWishlist()

        } catch (error) {
            console.log("deletError", error);
        }
    }



    async function getWishlist() {
        try {
            const res = await creatWishlist(ProductId)
            console.log(res, "iiiiid", ProductId, numberWishlist);
            setnumberWishlist(res.data.length)
            await getprodWishlist()
            // setlove(true)

        } catch (error) {
            console.log("errorWishlist", error);

        }

    }

    return <>
        {love ? <FaHeart onClick={() => deletwishlist(ProductId)} className='text-2xl text-red-500' /> : <CiHeart onClick={() => getWishlist()} className='text-2xl' />}

    </>

}
