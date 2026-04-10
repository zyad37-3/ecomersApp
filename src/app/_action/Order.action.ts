"use server"
import getmytoken from "@/utils/getmytoken"
import { jwtDecode } from "jwt-decode";
export interface shippingAddressType {
    shippingAddress: {
        details: string,
        phone: string,
        city: string,
        postalCode?: string

    }
}
type MyJwtPayload = {
  id: string
  iat?: number
  exp?: number
}
export default async function creatCashOrder(cartId:string,shippingAddress:shippingAddressType): Promise<shippingAddressType> {

    const token = await getmytoken()
    const res =await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}`, {
        headers: {
            "Content-Type": "application/json",
            token: token as string

        },
        method: "POST",
        body:JSON.stringify(shippingAddress) 
          
        
    })


    const finalRes = await res.json()






    return finalRes


}
export  async function creatVisaOrder(cartId:string,shippingAddress:shippingAddressType): Promise<shippingAddressType> {

    const token = await getmytoken()
    const res =await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
        headers: {
            "Content-Type": "application/json",
            token: token as string

        },
        method: "POST",
        body:JSON.stringify(shippingAddress) 
          
        
    })


    const finalRes = await res.json()






    return finalRes


}


export  async function allorderApi() {

    const token = await getmytoken()
   
           const tokenafterdecoded=jwtDecode<MyJwtPayload>(token as string)
           const userId=tokenafterdecoded.id
    
    const res =await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`, {
       
       
        
          
        
    })


    const finalRes = await res.json()

return finalRes




   


}
