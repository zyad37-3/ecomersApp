"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"





import logo from "../../assests/images/freshcart-logo1.png"
import { IoSearch } from "react-icons/io5";
import { MdHeadsetMic } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { SheetSide } from "./smbar/Smbar"
import { GoPerson } from "react-icons/go";
import { signOut, useSession } from "next-auth/react"
import { CardContext } from "../_context/CardContextProvider"
import { WishlistContext } from "../_context/WishlistContextProvider"




export default function Navbar() {
  const { setnumberOfCardItem, numberOfCardItem } = React.useContext(CardContext)
  const { numberWishlist } = React.useContext(WishlistContext)
  const sessien = useSession()
    function loginOut() {
    signOut({ redirect: true, callbackUrl: "/SignIn" })
  }
  
  

  return (
    <NavigationMenu className=" max-w-full justify-between xl:px-10  h-18 sticky top-0 right-0 left-0 z-50 bg-white">

      <div className="mr-6.5">

        <img src={logo.src} alt="logo" />
      </div>
      <div className=" w-1/2 relative ">

        <input type="text" placeholder="Search for products, brands and more..." className=" w-full  bg-[#F9FAFB80]! py-3 pr-12 pl-5 border border-[#E5E7EB] rounded-[33554400px]" />
        <div className="bg-[#16A34A] w-9 h-9 flex items-center justify-center absolute top-1.25 right-1.25 rounded-full">

          <IoSearch className=" rounded-full w-3.5 h-3.5 text-white" />
        </div>
      </div>

      <NavigationMenuList className="hidden xl:block xl:w-75.75  ">



        <NavigationMenuItem className="relative">


          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} `}>
            <Link href="/" className="bg-transparent hover:bg-transparent focus:bg-transparent hover:text-[#16a34a]">Home</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()}`}>
            <Link href="/Shop" className="bg-transparent hover:bg-transparent focus:bg-transparent hover:text-[#16a34a] ">Shop</Link>
          </NavigationMenuLink>

          <NavigationMenuTrigger className="bg-transparent! hover:bg-transparent! focus:bg-transparent hover:text-[#16a34a]!">Categories</NavigationMenuTrigger>

          <NavigationMenuContent  className="absolute  left-1/2  mt-2 w-56 can be written as">
            <ul className="w-96 ">
              <ListItem href="/Categories">
                All Categories
              </ListItem>
              <ListItem href="/docs/installation ">
                Electronics
              </ListItem>
              <ListItem href="/docs/primitives/typography" >
                Women's Fashion
              </ListItem>
              <ListItem href="/docs/primitives/typography" >
               Men's Fashion
              </ListItem>
              <ListItem href="/docs/primitives/typography" >
                Beauty & Health
              </ListItem>
            </ul>
          </NavigationMenuContent>

          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()}`}>
            <Link href="/Brands" className="bg-transparent hover:bg-transparent focus:bg-transparent hover:text-[#16a34a] ">Brands</Link>
          </NavigationMenuLink>

        </NavigationMenuItem>

      </NavigationMenuList>


      <div className="flex">


        <div className="flex items-center gap-2  w-[117px] h-10  sm:flex hidden">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F0FDF4]">
            <MdHeadsetMic className="w-3.5 h-4 text-[#16A34A]" />
          </div>
          <div className="">
            <p className="m-0 text-[#99A1AF] font-medium">Support</p>
            <p className="m-0 text-[#364153] font-SemiBold">24/7 Help</p>
          </div>
        </div>




        <div className="flex items-center justify-between  border-l  border-[#E5E7EB] ml-1">

          <Link href={"/wishlist"} className="relative w-11.25 h-11 flex items-center justify-center hover:bg-gray-100 hover:text-[#16a34a] rounded-full">

            <CiHeart className="w-5.5 h-5 hover:text-[#16a34a] " />

            {numberWishlist !== 0 && (
              <div className="absolute top-0 right-1 w-[18px] h-[18px] bg-[#FB2C36] rounded-full flex justify-center items-center">
                <p className="text-[10px] font-bold text-white">{numberWishlist}</p>
              </div>
            )}


          </Link >
          <Link href={"/cart"} className="relative w-11.25 h-11 flex items-center justify-center  hover:bg-gray-100 hover:text-[#16a34a] rounded-full">

            <FaCartShopping className="w-5.5 h-5" />
            {numberOfCardItem !== 0 && (<div className="absolute -top-0.5 bg-[#16A34A] right-1 w-4.5 h-4.5 rounded-full flex justify-center items-center">

              <p className=" w-1.75 h-3.75 text-[10px] font-bold text-white">{numberOfCardItem}</p>
            </div>)

            }
          </Link>



          {/* هناك اخفاء وظهور للايقون */}
          {sessien.status == "authenticated" ? <>
            <div className="w-11.25 h-11  items-center justify-center sm:flex hidden  hover:text-[#16a34a]! rounded-full!">

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-none border-0 hover:bg-gray-100! hover:text-[#16a34a]! rounded-full!"><FaRegAddressCard className="w-5.5 h-5" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <UserIcon />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCardIcon />
                    My Order
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCardIcon />
                    My Wishlist
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCardIcon />
                    Addresses
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SettingsIcon />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={loginOut} variant="destructive">
                    <LogOutIcon />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </div>

          </>
            : <>
              <div>

                <Link href={"/SignIn"} className="bg-[#16A34A] rounded-full py-2.5 font-semibold text-[#FFFFFF] flex items-center justify-center gap-2 w-26.75"><GoPerson />Sign In</Link>
              </div>

            </>

          }
          <div className="flex lg:hidden">
            <SheetSide />
          </div>

        </div>
      </div>

    </NavigationMenu>
  )
}



function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
