// export interface SignUpType{
//  name:string ,
//     email:string,
//     password:string,
//     rePassword:string,
//     phone:string


import { schemasignin } from "@/app/(athe)/SignIn/SignIn.schema";
import { schema } from "@/app/(athe)/SignUp/SignUp.schema";
import z from "zod";

export type SignUpType=z.infer<typeof schema>

export type SignInType=z.infer<typeof schemasignin>