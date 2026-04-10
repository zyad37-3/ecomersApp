"use server"
import getmytoken from '@/utils/getmytoken'
import React from 'react'
import { CardResType } from './../../Types/card.Type';

export default async function addproductToCard(id: string): Promise<CardResType> {

  const token = await getmytoken()

  const res = await fetch('https://ecommerce.routemisr.com/api/v2/cart', {
    method: "POST",
    body: JSON.stringify({
      productId: id
    }),
    headers: {
      "Content-Type": "application/json",
      token: token as string

    }
  })

  const finalRes = await res.json()
  console.log("final to res card", finalRes);

  return finalRes
}

export async function getUserCart(): Promise<CardResType> {
  try {
    const token = await getmytoken()
    const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
      headers: {
        token: token as string
      }
    })

    const finalRes = await res.json()
   
    
    return finalRes

  } catch (error) {
      console.log("errorUsercart",error);
      throw error
  }






}
export async function deletUserCart(productId: string): Promise<CardResType> {
  const token = await getmytoken()
  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
    method: "DELETE",
    headers: {
      token: token as string
    }
  })
  const finalRes = await res.json()
  return finalRes
}
export async function clearUserCart(): Promise<CardResType> {
  const token = await getmytoken()
  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "DELETE",
    headers: {
      token: token as string
    }
  })
  const finalRes = await res.json()
  return finalRes
}
export async function updateUserCart(id: string, count: number): Promise<CardResType> {
  const token = await getmytoken()
  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: token as string
    }, body: JSON.stringify({
      count
    }),

  })
  const finalRes = await res.json()
  return finalRes
}