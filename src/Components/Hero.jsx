// import React from 'react'
import chair from "../assets/modern-styled-entryway.jpg";
import elegant from "../assets/rendering-elegant-neoclassical-interior.jpg";
import view from "../assets/view-nordic-minimalism-japanese-wabi-sabi-interior-design-blend.jpg";
import delivery from "../assets/icons/icons8-in-transit-100.png";
import clock from "../assets/icons/icons8-clock-100.png";
import profile1 from "../assets/close-up-young-person-barbeque (1).jpg";
import profile2 from "../assets/front-view-smiley-man-outdoors-city.jpg";
import profile3 from "../assets/porait-cute-boy-cafe.jpg";
import profile4 from "../assets/portrait-upset-american-black-person.jpg";
import star from "../assets/icons8-star-100.png";
import halfStar from "../assets/icons8-star-half-empty-100.png";

const Hero = () => {
  return (
    <div className="logo flex w-[100%] max-w-screen-2xl mx-auto justify-between items-start py-10 px-5 md:px-0 ">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-[4rem] Golanerounded">
            Discover elegant & <br /> affordable furniture <br /> for every
            room.
          </h1>
          <p className="text-gray-500 leading-loose">
            Transform your furniture with sophisticated and stylish <br />
            pieces and create a serene and inviting home
          </p>
        </div>
        <div className="flex justify-start items-center gap-7 my-10">
          <button className="bg-black text-white px-4 py-3 rounded-lg">
            Shop Now
          </button>
          <span className="flex justify-center items-center gap-2">
            <img src={delivery} alt="" className="h-7 w-7" />
            <button className="">Free Delivery</button>
          </span>
          <span className="flex justify-center items-center gap-2">
            <img src={clock} alt="" className="h-7 w-7" />
            <button>Always on-time</button>
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="flex -space-x-3">
            <img
              src={profile1}
              alt=""
              className="h-[3rem] w-[3rem] object-cover rounded-full"
            />
            <img
              src={profile2}
              alt=""
              className="h-[3rem] w-[3rem] object-cover rounded-full"
            />
            <img
              src={profile3}
              alt=""
              className="h-[3rem] w-[3rem] object-cover rounded-full"
            />
            <img
              src={profile4}
              alt=""
              className="h-[3rem] w-[3rem] object-cover rounded-full"
            />
          </span>
          <span className="flex gap-7  leading-loose">
            <p>
              <b>100%</b> <br />
              <span className="text-gray-500">Brand new</span>
            </p>
            <p>
              <b>120,000+</b> <br />
              <span className="text-gray-500">items sold out</span>
            </p>
            <p>
              <b>Ratings</b> <br />
              <span className="text-gray-500 flex justify-center items-center gap-2">
                4.8
                <img src={star} alt="" className="h-4 w-4" />
                <img src={star} alt="" className="h-4 w-4" />
                <img src={star} alt="" className="h-4 w-4" />
                <img src={star} alt="" className="h-4 w-4" />
                <img src={halfStar} alt="" className="h-4 w-4" />
              </span>
            </p>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 ">
        <span className="flex flex-col gap-3">
          <img
            src={chair}
            alt=""
            className="w-[20rem] h-[21rem]  brightness-110"
          />
          <img src={view} alt="" className="w-[20rem] h-[25rem]" />
        </span>

        <span className="">
          <img
            src={elegant}
            alt=""
            className="w-[25rem] h-[46.5rem] brightness-110"
          />
          <p className="Golanerounded relative bottom-24 left-6 text-white text-[1.2rem] rounded-md bg-white/15 w-[15rem] px-4 py-2 backdrop-blur-lg ">
            modern & stylish furniture
          </p>
        </span>
      </div>
    </div>
  );
};

export default Hero;
