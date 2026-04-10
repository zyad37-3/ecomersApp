"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import { getUserCart } from "../_action/CardAction"
import { CardResType, CartItemType } from "@/Types/card.Type";


interface CardContextType {
  numberOfCardItem: number;
  setnumberOfCardItem: Dispatch<SetStateAction<number>>;
  cartproducts: CartItemType[];
  setcartproducts: Dispatch<SetStateAction<CartItemType[]>>;
  totalCartPrice: number;
  settotalCartPrice: Dispatch<SetStateAction<number>>;
  cartId: string|null;
  setcartId: Dispatch<SetStateAction<string|null>>;
  loading: boolean;
   getfronApi: () => Promise<void>;
};



export const CardContext = createContext<CardContextType | null>(null)


export default function CardContextProvider({ children }: { children: ReactNode }) {
  const [numberOfCardItem, setnumberOfCardItem] = useState(0)
  const [totalCartPrice, settotalCartPrice] = useState(0)
  const [cartproducts, setcartproducts] = useState<CartItemType[]>([])
  const [cartId, setcartId] = useState<string|null>(null)


  // هنيتبكخشهت
  const [loading, setLoading] = useState(true);

async function getfronApi() {
  try {
    const UserCart: CardResType = await getUserCart()
console.log( "UserCart.status",UserCart.status);

    if (UserCart.status === "fail") {
  console.log("Token expired or invalid")
  return
}

    setnumberOfCardItem(UserCart.numOfCartItems ?? 0)
    settotalCartPrice(UserCart?.data?.totalCartPrice ?? 0)
    setcartproducts(UserCart?.data?.products ?? [])
    setcartId(UserCart?.cartId ?? null)

  } catch (error) {
    console.log("UserCartContext", error)
  } finally {
    setLoading(false)
  }
}

  // async function getfronApi() {
  //   try {
  //     const UserCart: CardResType = await getUserCart()
  //     setnumberOfCardItem(UserCart.numOfCartItems)
  //     settotalCartPrice(UserCart?.data?.totalCartPrice)
  //     setcartproducts(UserCart?.data?.products)
  //     setcartId(UserCart?.cartId)
  //     // نتيب

  //     console.log("usercart", UserCart,"numberOfCardItem",numberOfCardItem);

  //   } catch (error) {
  //     console.log("UserCartContext", error);

  //   } finally{

  //     setLoading(false)
  //   }
    

  // }
  useEffect(function () {


    getfronApi()
  }, [])



  return (
    <CardContext.Provider value={{ getfronApi,loading, cartId, setcartId, setnumberOfCardItem, numberOfCardItem, cartproducts, setcartproducts, totalCartPrice, settotalCartPrice }}>
      {children}

    </CardContext.Provider>
  )
}
