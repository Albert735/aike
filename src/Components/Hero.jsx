// import React from 'react'
import chair from "../assets/modern-styled-entryway.jpg";
import elegant from "../assets/rendering-elegant-neoclassical-interior.jpg";
import view from "../assets/view-nordic-minimalism-japanese-wabi-sabi-interior-design-blend.jpg";
import delivery from "../assets/icons/icons8-in-transit-100.png";
import clock from "../assets/icons/icons8-clock-100.png";

const Hero = () => {
  return (
    <div className="logo flex w-[100%] max-w-screen-2xl mx-auto justify-between items-start py-10 px-5 md:px-0 ">
      <div>
        <div>
          <h1 className="text-[4rem] Golanerounded">
            Discover elegant & <br /> affordable furniture <br /> for every
            room.
          </h1>
          <p className="text-gray-500 leading-loose">
            Transform your furniture with sophisticated and stylish <br />{" "}
            pieces and create a serene and inviting home
          </p>
        </div>
        <div className="flex justify-start items-center gap-7 my-10">
          <button className="bg-black text-white px-4 py-2">Shop Now</button>
          <span className="flex justify-center items-center gap-2">
            <img src={delivery} alt="" className="h-7 w-7" />
            <button className="">Free Delivery</button>
          </span>
          <span className="flex justify-center items-center gap-2">
            <img src={clock} alt="" className="h-7 w-7" />
            <button>Always on-time</button>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 ">
        <span className="flex flex-col gap-3">
          <img
            src={chair}
            alt=""
            className="w-[20rem] h-[20rem]  brightness-110"
          />
          <img src={view} alt="" className="w-[20rem] h-[24rem]" />
        </span>

        <img
          src={elegant}
          alt=""
          className="w-[23rem] h-[45rem] brightness-110"
        />
      </div>
    </div>
  );
};

export default Hero;
