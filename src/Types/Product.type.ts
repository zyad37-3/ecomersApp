export interface ProductType {
    id:string;
    _id:string;
    title:string;
    slug:string;
    price:string;
    imageCover:string;
    category:CategoryType;
    brand:BrandType;
    priceAfterDiscount:string;
    ratingsAverage:number;
    ratingsQuantity:number;
    images:[string]

}
export interface CategoryType {
    _id:string;
    name:string;
    slug:string;
    image:string;
}
export interface BrandType {
    _id:string;
    name:string;
    slug:string;
    image:string;
}


