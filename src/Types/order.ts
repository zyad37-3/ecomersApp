import { ProductType } from "./Product.type";

export interface userCartType {
createdAt:string;
_id:number;
paymentMethodType:string;
shippingPrice:number;
taxPrice:number;
totalOrderPrice:number;
updatedAt:string;
cartItems:cartItemsType[];
shippingAddress:shippingAddressType;
user:userType;
}
export interface cartItemsType {
count:number;
price:number;
product:ProductType




} 
export interface shippingAddressType {
city:string;
details:string;
phone:string;
postalCode:string;

}
export interface userType {
email:string;
name:string;
phone:string;
_id:string;




}


