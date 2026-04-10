import { CategoryType } from '@/Types/Product.type';



    export default async function getAllCategory(): Promise<CategoryType[] | null> {
        try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`, {
                cache: "force-cache"

            })
            let data = await res.json()

            return data.data


        } catch (error) {
            console.log(error);

            return null
        }

    }

  

