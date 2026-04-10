"use client"
import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { tokenWishlist } from '../_action/Wishlist.Action';
import { productWishlistType, WishlistContextType } from '@/Types/Wishlist';





export const WishlistContext = createContext<WishlistContextType | null>(null);

export default function WishlistContextProvider({ children }: { children: ReactNode }) {
    const [numberWishlist, setnumberWishlist] = useState(0);
    const [productWishlist, setproductWishlist] = useState<productWishlistType | null>(null)
    async function getprodWishlist() {
        try {
            const res = await tokenWishlist()

            if (!res) return

            setproductWishlist(res)
            setnumberWishlist(res?.data?.length || 0)

        } catch (error) {
            console.log("error in getprodWishlist", error)
        }
    }

    useEffect(() => {

        getprodWishlist()
    }, [])





    return (
        <WishlistContext.Provider value={{ setproductWishlist,getprodWishlist, numberWishlist, setnumberWishlist, productWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}
