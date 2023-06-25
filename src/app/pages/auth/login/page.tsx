"use client";
import { NextPage } from "next";
import ImageLogo from "@/../public/ImageLogo.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Login: NextPage = () => {
  const [activeRole, setActiveRole] = useState("customer");

  return (
    // Container
    <div className="bg-white w-full h-screen items-center flex text-black pb-10">
      {/* Content */}
      <section className="max-w-7xl mx-auto px-2">
        <div className="flex flex-col items-center justify-center gap-y-3">
          {/* Logo */}
          <div className="flex flex-row items-center justify-center gap-x-2">
            <Image src={ImageLogo} width={31} height={31} alt="" />

            <span className="text-2xl font-bold text-[#DB3022] mt-3">Blanja</span>
          </div>

          <span className="text-lg text-black text-center font-bold">Please login with your account</span>

          <div className="flex flex-row items-center border rounded-md">
            <button type="button" onClick={() => setActiveRole("customer")} className={activeRole === "customer" ? "w-[123px] h-[48px] text-center text-white font-medium text-sm bg-[#DB3022] hover:bg-[#C72C1E]" : "w-[123px] h-[48px] text-center text-[#9B9B9B] font-medium text-sm bg-transparent hover:bg-[#C72C1E] hover:text-white"}>Customer</button>
            <button type="button" onClick={() => setActiveRole("seller")} className={activeRole === "seller" ? "w-[123px] h-[48px] text-center text-white font-medium text-sm bg-[#DB3022] hover:bg-[#C72C1E]" : "w-[123px] h-[48px] text-center text-[#9B9B9B] font-medium text-sm bg-transparent hover:bg-[#C72C1E] hover:text-white"}>Seller</button>
          </div>

          <form className="flex flex-col gap-y-5">
            <input type="email" className="border w-[400px] max-w-[400px] h-[48px] px-2 text-black font-medium text-sm outline-[#DB3022] rounded-md" placeholder="Email" />

            <input type="password" className="border w-[400px] max-w-[400px] h-[48px] px-2 text-black font-medium text-sm outline-[#DB3022] rounded-md" placeholder="Password" />

            <Link href={"/pages/auth/forgetPassword"} type="button" className="text-sm text-[#DB3022] font-normal outline-none hover:text-[#C72C1E] w-fit self-end">Forget password?</Link>

            <button type="submit" className="bg-[#DB3022] text-center text-white text-sm font-medium h-[48px] rounded-full hover:bg-[#C72C1E]">LOGIN</button>
          </form>

          <div className="flex flex-row items-center font-normal text-sm gap-x-2">
            <span className="text-black">Don&apos;t have a Tokopedia account?</span>
            <Link href={"/pages/auth/register"} type="button" className="text-[#DB3022]">Register</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
