"use client";
import { NextPage } from "next";
import ImageLogo from "@/../public/ImageLogo.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Register: NextPage = () => {
  const [activeRole, setActiveRole] = useState("customer");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    storeName: "",
    password: "",
  });

  const handleChangeForm = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    let data: any;

    if (activeRole === "customer") {
      data = {
        name: form.name,
        email: form.email,
        password: form.password,
        role: activeRole,
      };
    } else if (activeRole === "seller") {
      data = {
        name: form.name,
        email: form.email,
        phoneNumber: form.phoneNumber,
        storeName: form.storeName,
        password: form.password,
        role: activeRole,
      };
    } else {
      alert("Role is not valid!");
      return;
    }

    console.table(data);
  };

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

          <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
            <input type="text" name="name" onChange={(event) => handleChangeForm(event)} className="border w-[400px] max-w-[400px] h-[48px] px-2 text-black font-medium text-sm outline-[#DB3022] rounded-md" placeholder="Name" />

            <input type="email" name="email" onChange={(event) => handleChangeForm(event)} className="border w-[400px] max-w-[400px] h-[48px] px-2 text-black font-medium text-sm outline-[#DB3022] rounded-md" placeholder="Email" />

            {activeRole === "seller" && (
              <div className="flex flex-col gap-y-5">
                <input type="text" name="phoneNumber" onChange={(event) => handleChangeForm(event)} className="border w-[400px] max-w-[400px] h-[48px] px-2 text-black font-medium text-sm outline-[#DB3022] rounded-md" placeholder="Phone number" />

                <input type="text" name="storeName" onChange={(event) => handleChangeForm(event)} className="border w-[400px] max-w-[400px] h-[48px] px-2 text-black font-medium text-sm outline-[#DB3022] rounded-md" placeholder="Store name" />
              </div>
            )}

            <input type="password" name="password" onChange={(event) => handleChangeForm(event)} className="border w-[400px] max-w-[400px] h-[48px] px-2 text-black font-medium text-sm outline-[#DB3022] rounded-md" placeholder="Password" />

            <button type="submit" className="bg-[#DB3022] text-center text-white text-sm font-medium h-[48px] rounded-full hover:bg-[#C72C1E]">Register</button>
          </form>

          <div className="flex flex-row items-center font-normal text-sm gap-x-2">
            <span className="text-black">Already have account?</span>
            <Link href={"/pages/auth/login"} type="button" className="text-[#DB3022]">Sign in</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
