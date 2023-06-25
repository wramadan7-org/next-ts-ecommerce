"use client";
import Image from "next/image";
import ImageLogo from "../../public/imagelogo.png";
import { BiFilterAlt } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { NextPage } from "next";
import { useEffect } from "react";
import ImageJacketBlack from "../../public/ImageJacketBlack.png";
import ImageJacketWhite from "../../public/ImageJacketWhite.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {dummyCatalog} from "@/app/dummies/dummy";

const Home: NextPage = () => {
  useEffect(() => {
  }, []);

  return (
    // Container
    <div className="bg-white w-full h-screen text-black">
      {/* Navbar */}
      <div className="shadow-md">
        <section className="bg-white max-w-7xl mx-auto px-2">
          <nav className="h-24 flex flex-1 flex-row items-center justify-between">
            {/* Logo */}
            <div className="hidden sm:flex sm:flex-row gap-x-2 items-center">
              <Image src={ImageLogo} width={31} height={31} alt="logo" />

              <span className="text-2xl font-bold text-[#DB3022]">Blanja</span>
            </div>

            {/* Content center */}
            <div className="flex flex-row flex-1 items-center sm:justify-center gap-x-2">
              {/* Searchbar */}
              <input type="text" className="border rounded-full w-1/2 px-3 h-10 focus:outline-[#DB3022] text-base" placeholder="Search" />

              <button type="button" className="w-10 h-10 items-center flex justify-center border rounded-xl focus:outline-[#DB3022]">
                <BiFilterAlt size={20} color="#8E8E93" />
              </button>
            </div>

            {/* Content end */}
            <div className="flex flex-row items-center gap-x-4">
              <button type="button" className="w-9 h-10 items-center flex justify-center">
                <SlBasket size={25} color="#8E8E93" />
              </button>

              {/* Button */}
              <div className="flex items-center gap-x-4">
                <button type="button" className="text-white text-sm font-medium text-center bg-[#DB3022] rounded-full h-9 w-24 focus:outline-[#DB3022] hover:bg-[#C72C1E]">Login</button>

                <button type="button" className="text-[#9B9B9B] text-sm font-medium text-center bg-transparent border rounded-full h-9 w-24 focus:outline-[#DB3022] hover:bg-[#C72C1E] hover:text-white hover:border-none">Signup</button>
              </div>
            </div>
          </nav>
        </section>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-2">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="gap-x-3"
        >
          {dummyCatalog.map((value, index) => (
            <SwiperSlide key={index}>
            <button type="button" className="relative rounded-md items-center flex-grow-0 flex-shrink-0 flex justify-center w-[320px] h-[180px] overflow-hidden bg-gray-400 swipper-slide">
              <Image src={value.image} priority className="object-cover" alt="" />
              <span className="absolute mx-auto font-bold text-4xl text-white">{value.catalog}</span>
            </button>
          </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;