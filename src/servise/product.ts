import { ProductType } from "@/Types/Product.type";
import { promises } from "dns";



export async function Product(): Promise<ProductType[] | null> {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`,{
            cache:"force-cache",
            
            
        })
        let data = await res.json()

        return data.data


    } catch (error) {
        console.log(error);
        
        return null
    }

}

export async function getProductById(id:number) {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        let data = await res.json()

        return data.data

    } catch (error) {
        return null
    }
}