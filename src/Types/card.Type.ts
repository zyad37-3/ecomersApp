import { ProductType } from "./Product.type";

export interface CardResType {
cartId:string;
message:string;
numOfCartItems:number;
status:string;
data:{
cartOwner:string;
createdAt:string;
products:CartItemType[];
totalCartPrice:number;
updatedAt:string;
};
}

export interface CartItemType {
count:number;
price:number;
product:ProductType;
_id:string;
subcategory:subcategory[]
}
export interface subcategory{
    name:string
}
