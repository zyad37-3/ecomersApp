"use server"
import getmytoken from "@/utils/getmytoken"
interface creatWishlist {
     productId: string
}
export default async function creatWishlist(productId:creatWishlist) {

    const token = await getmytoken()
    const res =await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        headers: {
        "Content-Type": "application/json",
            token: token as string,
             
        },
        method: "POST",
        body:JSON.stringify({productId}) 
          
        
    })

    console.log(res);

    const finalRes = await res.json()






    return finalRes


}
export  async function tokenWishlist() {

    const token = await getmytoken()
    const res =await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        headers: {
        "Content-Type": "application/json",
            token: token as string,
             
        },
       
          
        
    })

    console.log(res);

    const finalRes = await res.json()






    return finalRes


}
export  async function deledWishlist(id:string) {

    const token = await getmytoken()
    const res =await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        headers: {
        "Content-Type": "application/json",
            token: token as string,
             
        },
       method: "DELETE",
          
        
    })

    console.log(res);

    const finalRes = await res.json()






    return finalRes


}

