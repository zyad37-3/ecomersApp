"use client"

import { SignUpType } from '@/Types/athe';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from '../(athe)/SignUp/SignUp.schema';
import { toast } from "sonner"
import { useRouter } from 'next/navigation';


export default function SineUp() {

const rout=useRouter()
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        },
        resolver: zodResolver(schema)
    })

    const { register, handleSubmit, formState } = form
    async function Signup(athe: SignUpType) {
        console.log(athe);
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
            method: "POST",
            body: JSON.stringify(athe),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const finalres = await res.json()
        console.log("tooooop", finalres);
        
        if (res.ok) {
            toast.success("Account created success", {
                position: 'top-right',
                richColors: true
            })
            rout.push("/SignIn")

        } else {
            toast.error(`${finalres.message}`, {
                position: 'top-right',
                richColors: true
            })

        }


    }

    return (
        <div className='py-10 px-6 rounded-md shadow-md '>
            <div className='text-center'>
                <h1 className='text-[#364153] font-semibold text-[30px]'>Create Your Account</h1>
                <p className='font-medium text-[#364153]'>Start your fresh journey with us today</p>
            </div>
            <div className='flex gap-2 w-full py-8'>
                <button className='border rounded-md flex items-center justify-center gap-2 py-2 px-4 font-semibold w-full hover:bg-gray-100 '>
                    <FaGoogle className='text-[#E7000B]' />
                    Google
                </button>
                <button className='border border-[#D1D5DC] rounded-md flex items-center justify-center gap-2 py-2 px-4 font-semibold w-full hover:bg-gray-100 '>
                    <FaFacebook className='text-[#155DFC]' />
                    Facebook
                </button>

            </div>
            <div className='  relative  after:content-[""] after:h-0.5 after:w-full after:bg-[#D1D5DC4D] after:absolute after:left-0 after:top-1/2'>
                <p className='bg-white w-fit p-3 my-0 relative z-10 m-auto'>or</p>
            </div>

            <div >
                <form onSubmit={handleSubmit(Signup)}>

                    <div className=''>
                        <label className='font-medium text-[16px] mb-2' htmlFor="name">Name*</label>
                        <input {...register("name")} id='name' className='w-full border border-[#99A1AF66] rounded-sm py-2.5 px-3 focus:border-[#16a34a] focus:outline-none' type="text" placeholder='Ali'
                        />
                        {formState.errors.name && <p className='text-red-700 -mt-0.5 text-sm'>*{formState.errors.name?.message}</p>}
                    </div>
                    {/* email */}
                    <div className='my-7'>
                        <label className='font-medium text-[16px] mb-2' htmlFor="email">Email*</label>
                        <input {...register("email")} className='w-full border border-[#99A1AF66] rounded-sm py-2.5 px-3 focus:outline-none focus:border-[#16a34a]' id='email' type="email" placeholder='ali@example.com' />
                        {formState.errors.email && <p className='text-red-700 -mt-0.5 text-sm'>*{formState.errors.email?.message}</p>}
                    </div>
                    {/* passs */}
                    <div >
                        <label className='font-medium text-[16px] mb-2' htmlFor="password">Password*</label>
                        <input {...register("password")} className='w-full border border-[#99A1AF66] rounded-sm py-2.5 px-3 focus:outline-none focus:border-[#16a34a]' id='password' type="password" placeholder='create a strong password' />
                        {formState.errors.password && <p className='text-red-700 -mt-0.5 text-sm'>*{formState.errors.password?.message}</p>}
                    </div>


                    {/* lineeeee */}
                    <div className='  relative  after:content-[""] after:h-0.5 after:w-full after:bg-[#D1D5DC4D] after:absolute after:left-0 after:top-1/2'>
                        <p className='bg-white text-[#364153] font-medium w-fit p-3 my-0 relative z-10 ml-auto'>Weak</p>
                        <p className='font-medium text-[12px] text-[#6A7282]'>Must be at least 8 characters with numbers and symbols</p>
                    </div>

                    {/* repasss */}

                    <div className='mt-7'>
                        <label className='font-medium text-[16px] mb-2' htmlFor="rePassword">Confirm Password*</label>
                        <input {...register("rePassword")} className='w-full border border-[#99A1AF66] rounded-sm py-2.5 px-3 focus:outline-none focus:border-[#16a34a]' id='rePassword' type="password" placeholder='confirm your password' />
                        {formState.errors.rePassword && <p className='text-red-700 -mt-0.5 text-sm'>*{formState.errors.rePassword?.message}</p>}
                    </div>
                    {/* phone */}
                    <div className='my-7'>
                        <label className='font-medium text-[16px] mb-2' htmlFor="phone">Phone Number*</label>
                        <input {...register("phone")} className='w-full border border-[#99A1AF66] rounded-sm py-2.5 px-3 focus:outline-none focus:border-[#16a34a]' id='phone' type="tel" placeholder='+1 234 567 8900' />
                        {formState.errors.phone && <p className='text-red-700 -mt-0.5 text-sm'>*{formState.errors.phone?.message}</p>}
                    </div>

                    {/* checkbox */}
                    <div className='mb-7 accent-green-600 flex items-center gap-2'  >
                        <input id='agree' type="checkbox" />

                        <label className='my-0 font-medium text-[16px] ' htmlFor="agree">I agree to the <span className='text-[#16A34A]'>Terms of Service</span> and <span className='text-[#16A34A]'>Privacy Policy</span> *</label>
                    </div>


                    <button className='py-2  px-4 font-semibold flex items-center justify-center gap-2 w-full rounded-md bg-[#16A34A] text-white hover:bg-[#16b34a]! '>
                        <MdOutlinePersonAddAlt />
                        Create My Account
                    </button>



                </form>


            </div>
            <div className='text-center pt-10 my-2 '>
                <p className='font-medium text-[16px]'>Already have an account? <Link href={"/SignIn"} className='text-[#16A34A] hover:underline'>Sign In</Link> </p>

            </div>

        </div>
    )
}


