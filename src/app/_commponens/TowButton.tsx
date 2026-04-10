"use client"
import { LoaderIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

import React, { useContext, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import addproductToCard from '../_action/CardAction';
import { CardContext, CardContextType } from "../_context/CardContextProvider"
import { toast } from "sonner"
import { IoCheckmarkSharp } from "react-icons/io5";
import creatWishlist, { deledWishlist } from "../_action/Wishlist.Action"
import { WishlistContext } from "../_context/WishlistContextProvider"
import { FaHeart } from "react-icons/fa6"
export default function TowButton({ fromId }: { fromId: string }) {
  const context = useContext(CardContext)

  if (!context) return null

  const { setnumberOfCardItem } = context
  // const { setnumberOfCardItem } = useContext<CardContextType|null>(CardContext)
  const [looding, setlooding] = useState(false)
  const [success, setsuccess] = useState(false)
  const [error, seterror] = useState(false)

  const { numberWishlist, setnumberWishlist, productWishlist, getprodWishlist } = useContext(WishlistContext)!
  const love = productWishlist?.data?.some(
    p => (p.id ?? p._id) === fromId
  )

  async function getnumber() {
    setlooding(true)


    try {
      const res = await addproductToCard(fromId)
      console.log(res);
      setsuccess(true)
      setTimeout(() => setsuccess(false), 1000)
      setnumberOfCardItem(res.numOfCartItems)

    } catch (error) {
      console.log("false");
      seterror(true)
      toast.error("not success")


    } finally {
      setlooding(false)


    }
  }

  async function btnWishlist() {
    try {
      const res = await creatWishlist(fromId)
      console.log(res, "iiiiid", fromId, numberWishlist);
      setnumberWishlist(res.data.length)
      await getprodWishlist()
      // setlove(true)

    } catch (error) {
      console.log("errorWishlist", error);

    }

  }

  async function btnWishlistdelet() {
    try {
      const res = await deledWishlist(fromId)
      console.log("delet", res, love);
      await getprodWishlist()

    } catch (error) {
      console.log("deletError", error);
    }

  }


  return <>
    <div className='m-auto w-full md:flex md:gap-2 my-6 md:my-6'>

      {looding ?
        <button disabled onClick={() => getnumber()} className='w-full my-2 md:my-0 hover:bg-[#15803d] flex justify-center gap-2 items-center border bg-[#16A34A] py-3.5  rounded-[12px] text-white'>
          <Spinner />
        </button>
        : success ?
          <button disabled onClick={() => getnumber()} className='w-full my-2 md:my-0 hover:bg-[#15803d] flex justify-center gap-2 items-center border bg-[#16A34A] py-3.5  rounded-[12px] text-white'>
            <IoCheckmarkSharp /> Add to Cart
          </button> :
          <button onClick={() => getnumber()} className='w-full my-2 md:my-0 hover:bg-[#15803d] flex justify-center gap-2 items-center border bg-[#16A34A] py-3.5  rounded-[12px] text-white'>
            <FaShoppingCart />  Add to Cart
          </button>
      }




      <button className='w-full  hover:bg-gray-800 flex  justify-center gap-2 items-center border bg-[#101828] py-3.5  rounded-[12px] text-white'>
        <MdOutlineElectricBolt /> Buy Now
      </button>

    </div>
    <div>
      {love ?
        <button onClick={btnWishlistdelet} className='flex py-3 px-4 gap-2 border-red-200 text-red-600 bg-red-50 justify-center items-center border rounded-md w-full'>
          <FaHeart /> in Wishlist
        </button>

        :
        <button onClick={btnWishlist} className='flex py-3 px-4 gap-2 hover:text-[#16a34a] hover:border-[#86efac] justify-center items-center border border-[#E5E7EB] rounded-md w-full'>
          <CiHeart /> Add to Wishlist
        </button>

      }

      <div>
        <button className='border-[#E5E7EB]'>

        </button>
      </div>
    </div>
  </>
}
