"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { schemasignin } from '../(athe)/SignIn/SignIn.schema';
import { SignInType } from '@/Types/athe';
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import { MdOutlinePersonAddAlt } from 'react-icons/md';
import { FaGoogle, FaFacebook, FaUsers, FaStar, FaEye } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import Link from 'next/link';
import { FaEyeSlash } from 'react-icons/fa6';
import { SignInAction } from '../(athe)/SignIn/Signin.action';
import { signIn } from 'next-auth/react';


export default function SignInFn() {
  const [eyeshow, seteyeshow] = useState(false)
  const rout = useRouter()
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schemasignin)
  })
  const { register, handleSubmit, formState } = form

  async function Signinf(athe: SignInType) {


    const resOk = await signIn("credentials", { ...athe, redirect: false})
    console.log( "heaaar",resOk);


    // const resOk=await SignInAction(athe)


    if (resOk?.ok) {
       console.log(resOk);
      toast.success("Account created success", {
        position: 'top-right',
        richColors: true
      })
    rout.push("/")

    } else {
      console.log(resOk);
      
      toast.error(`${resOk?.error}`, {
        position: 'top-right',
        richColors: true
      })

    }
  }




  return (
    <div className='py-10 px-6 rounded-md shadow-md '>
      <div className='text-center'>
        <h1 className='text-[#364153] font-bold text-[30px]'><span className='text-[#16A34A]'>Fresh</span>Cart</h1>
        <p className='font-bold text-[#1E2939]'>Welcome Back!</p>
        <p className='font-medium text-[#4A5565]'>Sign in to continue your fresh shopping experience</p>
      </div>
      <div className=' w-full py-8'>
        <button className='border rounded-md flex items-center justify-center gap-2 py-2 px-4 font-semibold w-full hover:bg-gray-100 '>
          <FaGoogle className='text-[#E7000B]' />
          Google
        </button>
        <button className='mt-3 border border-[#D1D5DC] rounded-md flex items-center justify-center gap-2 py-2 px-4 font-semibold w-full hover:bg-gray-100 '>
          <FaFacebook className='text-[#155DFC]' />
          Facebook
        </button>

      </div>
      <div className='  relative  after:content-[""] after:h-0.5 after:w-full after:bg-[#D1D5DC4D] after:absolute after:left-0 after:top-1/2'>
        <p className='bg-white text-[#6A7282] w-fit p-3 my-0 relative z-10 m-auto'>OR CONTINUE WITH EMAIL</p>
      </div>

      <div >
        <form onSubmit={handleSubmit(Signinf)}>

          {/* email */}
          <div className='my-7'>
            <label className='font-medium text-[16px] mb-2' htmlFor="email">Email*</label>
            <input {...register("email")} className='w-full border-2 border-[#99A1AF66] rounded-md py-2.5 px-3 focus:outline-none focus:border-[#16a34a]' id='email' type="email" placeholder='Enter your email' />
            {formState.errors.email && <p className='text-red-700 -mt-0.5 text-sm'>*{formState.errors.email?.message}</p>}
          </div>
          {/* passs */}
          <div  >
            <label className='font-medium text-[16px] mb-2' htmlFor="password">Password*</label>
            <div className='relative'>
              <input {...register("password")} className='w-full border-2 border-[#99A1AF66] rounded-md py-2.5 px-3 focus:outline-none focus:border-[#16a34a]' id='password' type={eyeshow ? "text" : "password"} placeholder='Enter your password' />
              <div className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer' onClick={() => seteyeshow(prev => !prev)}>
                {eyeshow ? <FaEyeSlash /> : <FaEye />}

              </div>

            </div>
            {formState.errors.password && <p className='text-red-700 -mt-0.5 text-sm'>*{formState.errors.password?.message}</p>}

          </div>



          {/* checkbox */}
          <div className='my-6 accent-green-600 flex items-center gap-2'  >
            <input id='agree' type="checkbox" />

            <label className='my-0 font-medium text-[16px] text-[#364153]' htmlFor="agree">Keep me signed in</label>
          </div>


          <button className='py-2  px-4 font-semibold flex items-center justify-center gap-2 w-full rounded-md bg-[#16A34A] text-white hover:bg-[#16b34a]! '>
            <MdOutlinePersonAddAlt />
            Create My Account
          </button>



        </form>


      </div>
      <div className='text-center pt-10 my-2 mb-6'>
        <p className='font-medium text-[16px]'>Already have an account? <Link href={"/SignUp"} className='text-[#16A34A] hover:underline'>Create an account</Link> </p>
      </div>
      <div className=' flex justify-center items-center gap-3'>
        <p className='font-medium text-[#6A7282] flex items-center gap-1.5'><IoLockClosedSharp /> SSL Secured</p>
        <p className='font-medium text-[#6A7282] flex items-center gap-1.5'><FaUsers /> 50K+ Users</p>
        <p className='font-medium text-[#6A7282] flex items-center gap-1.5'><FaStar /> 4.9 Rating</p>
      </div>

    </div>
  )
}
