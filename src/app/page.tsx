"use client";
import Image from "next/image";
import ImageLogo from "../../public/imagelogo.png";
import { BiFilterAlt } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { dummyCatalog, dummyCategory, dummyItem } from "@/app/dummies/dummy";
import ImageFormalSuit from "../../public/images/categories/ImageCategoryFormalSuit.png";

const Home: NextPage = () => {
  useEffect(() => {
  }, []);

  return (
    // Container
    <div className="bg-white w-full h-full text-black pb-10">
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
        {/* Catalog */}
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
          className="gap-x-3 mt-10"
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

        {/* Category */}
        <div className="flex flex-col mt-10">
          <span className="text-left text-3xl font-bold text-black">Category</span>

          <span className="text-sm text-left font-normal text-[#9B9B9B]">What are you currently looking for</span>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="gap-x-3 mt-5"
        >
          {dummyCategory.map((value, index) => (
            <SwiperSlide key={index}>
              <button type="button" className="relative bg-gray-200 rounded-md items-center flex-grow-0 flex-shrink-0 flex justify-center w-[206px] h-[220px] overflow-hidden swipper-slide">
                <Image src={value.image} priority alt="" />

                <span className="absolute mx-auto font-bold text-3xl text-white">{value.category}</span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* New */}
        <div className="flex flex-col mt-10">
          <span className="text-left text-3xl font-bold text-black">New</span>

          <span className="text-sm text-left font-normal text-[#9B9B9B]">You&apos;ve never seen it before!</span>
        </div>

        {/* Item */}
        <div className="flex flex-row flex-wrap gap-x-14 gap-y-5 mt-5">
          {dummyItem.map((value, index) => (
            <button key={index} type="button" className="flex flex-col w-[208px] pb-3 gap-y-3 rounded-b-md shadow-lg">
              <div className="bg-[#ADADAD40] items-center w-full h-[136px] rounded-t-md">
                <Image src={value.image} height={136} className="mx-auto" alt="" />
              </div>

              <div className="flex flex-col px-2 text-left gap-y-3">
                <span className="text-base font-medium text-black">{value.title}</span>

                <span className="text-[#DB3022] text-base font-medium">$ {value.price}</span>

                <span className="text-[#9B9B9B] text-xs font-medium">{value.brand}</span>

                <div className="flex flex-row items-center">
                  <div>
                    <button type="button" className="text-yellow-400 hover:text-yellow-500 focus:outline-none">
                      <svg className="w-5 h-5 fill-current">
                        <path
                          d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button type="button" className="text-yellow-400 hover:text-yellow-500 focus:outline-none">
                      <svg className="w-5 h-5 fill-current">
                        <path
                          d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button type="button" className="text-yellow-400 hover:text-yellow-500 focus:outline-none">
                      <svg className="w-5 h-5 fill-current">
                        <path
                          d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button type="button" className="text-yellow-400 hover:text-yellow-500 focus:outline-none">
                      <svg className="w-5 h-5 fill-current">
                        <path
                          d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button type="button" className="text-yellow-400 hover:text-yellow-500 focus:outline-none">
                      <svg className="w-5 h-5 fill-current">
                        <path
                          d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <span className="text-sm text-[#9B9B9B] font-normal ml-1">({value.rating})</span>

                  {/* <div>
                  <button className="text-gray-400 hover:text-yellow-400 focus:outline-none">
                    <svg className="w-5 h-5 fill-current">
                      <path
                        d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                      ></path>
                    </svg>
                  </button>
                </div> */}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Popular */}
        <div className="flex flex-col mt-10">
          <span className="text-left text-3xl font-bold text-black">Popular</span>

          <span className="text-sm text-left font-normal text-[#9B9B9B]">Find clothes that are trending recently</span>
        </div>

        {/* Item */}
        <div className="flex flex-row flex-wrap gap-x-14 gap-y-5 mt-5">
          {dummyItem.map((value, index) => (
            <button key={index} type="button" className="flex flex-col w-[208px] pb-3 gap-y-3 rounded-b-md shadow-lg">
              <div className="bg-[#ADADAD40] items-center w-full h-[136px] rounded-t-md">
                <Image src={value.image} height={136} className="mx-auto" alt="" />
              </div>

              <div className="flex flex-col px-2 text-left gap-y-3">
                <span className="text-base font-medium text-black">{value.title}</span>

                <span className="text-[#DB3022] text-base font-medium">$ {value.price}</span>

                <span className="text-[#9B9B9B] text-xs font-medium">{value.brand}</span>

                <div className="flex flex-row items-center">
                  <div>
                    <button type="button" className="text-yellow-400 hover:text-yellow-500 focus:outline-none">
                      <svg className="w-5 h-5 fill-current">
                        <path
                          d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button type="button" className="text-yellow-400 hover:text-yellow-500 focus:outline-none">
                      <svg className="w-5 h-5 fill-current">
                        <path
                          d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button type="button" className="text-yellow-400 hover:text-yellow-500 focus:outline-none">
                      <svg className="w-5 h-5 fill-current">
                        <path
                          d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button type="button" className="text-yellow-400 hover:text-yellow-500 focus:outline-none">
                      <svg className="w-5 h-5 fill-current">
                        <path
                          d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button type="button" className="text-yellow-400 hover:text-yellow-500 focus:outline-none">
                      <svg className="w-5 h-5 fill-current">
                        <path
                          d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <span className="text-sm text-[#9B9B9B] font-normal ml-1">({value.rating})</span>

                  {/* <div>
                  <button className="text-gray-400 hover:text-yellow-400 focus:outline-none">
                    <svg className="w-5 h-5 fill-current">
                      <path
                        d="M12 1l3.09 6.32 6.91.99-5 4.86 1.18 6.88L12 17l-6.18 3.05L7 13.21 1 8.35l6.91-.99L12 1z"
                      ></path>
                    </svg>
                  </button>
                </div> */}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;