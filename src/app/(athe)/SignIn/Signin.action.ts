"use server"
import { SignInType } from '@/Types/athe';
import { cookies } from 'next/headers';

export async function SignInAction(athe:SignInType){

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
      method: "POST",
      body: JSON.stringify(athe),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const finalres = await res.json()
    console.log("tooooop", finalres);

    const mycookies=await cookies()
    mycookies.set("token",finalres.token,{
        httpOnly:true,
        secure:true,
        maxAge:60*60*24,
        sameSite:"strict"
    })
    return finalres.message
}
