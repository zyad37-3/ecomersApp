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
import { BsFillPlusCircleFill } from "react-icons/bs";

import { FaCheckCircle } from "react-icons/fa";
import { CardContext } from "../_context/CardContextProvider"
import { toast } from "sonner"
import addproductToCard from "../_action/CardAction"
import { TiDeleteOutline } from "react-icons/ti";
export default function AddToCardBtn({ productId }: { productId: string }) {
    const { setnumberOfCardItem, setcartproducts, settotalCartPrice } = useContext(CardContext)!
    const [looding, setlooding] = useState(false)
    const [success, setsuccess] = useState(false)
    const [error, seterror] = useState(false)




    async function handeladdToCard() {
        setlooding(true)


        try {
            const res = await addproductToCard(productId)
            console.log(res);
            setsuccess(true)
            setTimeout(() => setsuccess(false), 1000)
            setnumberOfCardItem(res.numOfCartItems)
            settotalCartPrice(res.data.totalCartPrice)
            setcartproducts(res.data.products)
        } catch (error) {
            console.log("false");
            seterror(true)
            toast.error("not succes")


        } finally {
            setlooding(false)


        }


    }

    return <>
        {looding ? <button onClick={handeladdToCard} disabled className="w-10 h-10 bg-[#16A34A] cursor-pointer rounded-full disabled:opacity-70"><Spinner className="w-full h-5 text-white" /> </button>
            : success ?
                <button onClick={handeladdToCard} disabled > <FaCheckCircle className='w-10 h-10 text-[#16A34A] hover:text-[#15803d] cursor-pointer' /> </button>
                : error ? <button onClick={handeladdToCard} disabled> <TiDeleteOutline className='w-10 h-10 text-red-500 hover:text-[#15803d] cursor-pointer' /> </button>
                    : <button onClick={handeladdToCard} > <BsFillPlusCircleFill className='w-10 h-10 text-[#16A34A] hover:text-[#15803d] cursor-pointer' /> </button>
        }

    </>

}
