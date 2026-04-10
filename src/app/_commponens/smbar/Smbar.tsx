"use client"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["right"] as const
import { IoReorderThree, IoSearch } from "react-icons/io5";
import logo from "../../../assests/images/freshcart-logo1.png"
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { signOut } from "next-auth/react";



export function SheetSide() {
        function loginOut() {
        signOut({ redirect: true, callbackUrl: "/SignIn" })
      }
    
    return (
        <div className="flex flex-wrap gap-2">

            <Sheet >
                <SheetTrigger asChild>

                    <Button variant="outline" className="capitalize  w-10 h-10 rounded-full  hover:bg-[#15803d]! bg-[#16A34A] text-white hover:text-white">
                        <IoReorderThree className="w-3.5 h-3"/>
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side={"right"}
                    className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
                >
                    <SheetHeader>
                        <SheetTitle><img src={logo.src} alt="logo" /></SheetTitle>
                    </SheetHeader>
                    <div className="w-[90%]  mx-auto">
                        <div className="  relative ">

                            <input type="text" placeholder="Search products..." className=" w-full  bg-[#F9FAFB80]! py-3 pr-12 pl-5 border border-[#E5E7EB] rounded-lg" />
                            <div className="bg-[#16A34A] w-9 h-9 flex items-center justify-center absolute top-1.25 right-1.25 rounded-full">

                                <IoSearch className=" rounded-full w-3.5 h-3.5 text-white" />
                            </div>
                        </div>

                        <div className="bg-blue mt-2 pt-3 border-t flex flex-wrap">
                            <Link href={"/"} className=" my-2 w-full text-gray-700 hover:text-[#16a34a] px-4 py-3 font-medium hover:bg-[#f0fdf4] rounded-lg text-start" >
                                Home
                            </Link>
                            <Link  href={"/Shop"} className=" my-2 w-full text-gray-700 hover:text-[#16a34a] px-4 py-3 font-medium hover:bg-[#f0fdf4] rounded-lg text-start" >
                                Shop
                            </Link>
                            <Link  href={"/Categories"} className=" my-2 w-full text-gray-700 hover:text-[#16a34a] px-4 py-3 font-medium hover:bg-[#f0fdf4] rounded-lg text-start" >
                                Categories
                            </Link>
                            <Link  href={"/Brands"} className=" my-2 w-full text-gray-700 hover:text-[#16a34a] px-4 py-3 font-medium hover:bg-[#f0fdf4] rounded-lg text-start" >
                                Brands
                            </Link>
                        </div>
                        <div>
                            <div className="px-4 py-3  hover:bg-[#f0fdf4]  flex items-center gap-2 rounded-lg">
                                <div className="w-9 h-9 flex items-center justify-center bg-red-50  rounded-full">

                                    <CiHeart className="w-5.5 h-5 text-red-500 " />
                                </div>
                                <p className="m-0"> Wishlist</p>

                            </div>
                            < Link href={"/Card"} className="px-4 py-3  hover:bg-[#f0fdf4]  flex items-center gap-2 rounded-lg">
                                <div className="w-9 h-9 flex items-center justify-center bg-[#f0fdf4] text-[#16a34a] rounded-full">

                                    <FaCartShopping className="w-5.5 h-5" />
                                </div>
                                <p className="m-0"> Cart</p>
                            </Link>


                        </div>


                    </div>
                    <SheetFooter>
                        <Button type="submit" >Usama</Button>
                        <SheetClose asChild>
                            <Button variant="outline" onClick={loginOut} className="hover:text-red-500">Sign Out</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </div>
    )
}
