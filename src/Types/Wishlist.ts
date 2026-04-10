import { Dispatch, SetStateAction } from "react";

export interface WishlistContextType {
  numberWishlist: number;
  setnumberWishlist: Dispatch<SetStateAction<number>>;
  productWishlist: productWishlistType | null;
  setproductWishlist: Dispatch<SetStateAction<productWishlistType | null>>;
  getprodWishlist: () => Promise<void>;
}
;
export interface productWishlistType {
    status: string;
    count: number;
    data: ProductWishlist[];
}



export interface ProductWishlist {
    sold: number;
    images: string[];

    subcategory: SubCategory[];

    ratingsQuantity: number;
    _id: string;
    id: string;

    title: string;
    slug: string;
    description: string;

    quantity: number;
    price: number;
    priceAfterDiscount: number;

    imageCover: string;

    category: Category;
    brand: Brand;

    ratingsAverage: number;

    createdAt: string;
    updatedAt: string;

    __v: number;
}

export interface SubCategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
}

export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
}