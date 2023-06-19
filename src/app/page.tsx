import Image from "next/image";
import ImageLogo from "../../public/imagelogo.png";
import { BiFilterAlt } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { NextPage } from "next";
import ImageJacketBlack from "../../public/ImageJacketBlack.png";
import ImageJacketWhite from "../../public/ImageJacketWhite.png";

const Home: NextPage = () => {
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
        <div className="h-52 w-full border text-center font-bold text-3xl flex flex-row items-center overflow-scroll">
          <div className="border rounded-md items-center flex justify-center w-[456px] h-[180px] overflow-hidden bg-blue-400">
            <Image src={ImageJacketBlack} width={170} height={170} alt="" />
          </div>

          <div className="border rounded-md items-center flex justify-center w-[456px] h-[180px] overflow-hidden bg-blue-400">
            <Image src={ImageJacketWhite} width={170} height={170} alt="" />
          </div>
          <div className="border rounded-md items-center flex justify-center w-[456px] h-[180px] overflow-hidden bg-blue-400">
            <Image src={ImageJacketBlack} width={170} height={170} alt="" />
          </div>

          <div className="border rounded-md items-center flex justify-center w-[456px] h-[180px] overflow-hidden bg-blue-400">
            <Image src={ImageJacketWhite} width={170} height={170} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;