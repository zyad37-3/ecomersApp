import { ProductType } from "@/Types/Product.type"


export default async function getBrandands() {
    const res =await fetch("https://ecommerce.routemisr.com/api/v1/brands?limit=30")


    const finalres=await res.json()
    return finalres.data
}
export  async function specificBrand(id:string) {
    try {
            const res =await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)


    const finalres=await res.json()
    return finalres.data

    } catch (error) {
        console.log("specificBrand",error);
        
    }
}

export async function getBrandandsProduct(id:string): Promise<ProductType[] | null> {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`,{
            cache:"force-cache",
            
            
        })
        let data = await res.json()

        return data.data


    } catch (error) {
        console.log(error);
        
        return null
    }

}

export  async function getCategories() {
    const res =await fetch("https://ecommerce.routemisr.com/api/v1/categories")


    const finalres=await res.json()
    return finalres
}
