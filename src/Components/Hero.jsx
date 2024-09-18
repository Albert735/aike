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
    <div className="logo flex flex-col lg:flex-row w-[100%] max-w-screen-2xl mx-auto justify-between items-start py-10 px-5 md:px-0">
      <div className="flex flex-col gap-5">
        <div className=" ">
          <h1 className="lg:text-[4rem] text-[2rem] text-center lg:text-left Golanerounded">
            Discover elegant & <br /> affordable furniture <br /> for every
            room.
          </h1>
          <p className="text-gray-500 leading-loose text-center lg:text-left text-sm lg:text-lg">
            Transform your furniture with sophisticated and{" "}
            <span className="CisalackSignature lg:text-lg">stylish</span> <br />
            pieces and create a serene and inviting home
          </p>
        </div>
        <div className="flex justify-between items-start gap-5 my-10 text-[12px] lg:text-lg">
          <button className="bg-black text-white lg:px-4 px-2 py-3 rounded-lg ">
            Shop Now
          </button>
          <span className="flex justify-center items-center gap-2 ">
            <img src={delivery} alt="" className="lg:h-7 lg:w-7 h-5 w-5" />
            <button className="">Free Delivery</button>
          </span>
          <span className="flex justify-center items-center gap-2">
            <img src={clock} alt="" className="lg:h-7 lg:w-7 h-5 w-5" />
            <button>Always on-time</button>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center lg:justify-center lg:items-start gap-3">
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
          <span className="flex gap-7 leading-loose flex-wrap  justify-center items-start">
            <p className="text-center lg:text-start">
              <b>100%</b> <br />
              <span className="text-gray-500">Brand new</span>
            </p>
            <p className="text-center lg:text-start">
              <b>120,000+</b> <br />
              <span className="text-gray-500">items sold out</span>
            </p>
            <p className="text-center lg:text-start">
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
      <div className="flex flex-wrap gap-5 justify-center items-center mt-12 lg:mt-0">
        <span className="flex flex-col gap-3">
          <img
            src={chair}
            alt=""
            className="h-[15rem] relative right-16 lg:right-0 -top-4 w-[15rem] lg:w-[20rem] lg:h-[21rem] rounded-[3rem]  brightness-110"
          />
          <img
            src={view}
            alt=""
            className="h-[15rem] relative left-16 lg:left-0 w-[15rem] lg:w-[20rem] lg:h-[21rem] rounded-[3rem]"
          />
        </span>

        <span className="">
          <img
            src={elegant}
            alt=""
            className="h-[25rem]  relative right-16 lg:right-0 w-[15rem] lg:w-[25rem] lg:h-[46.5rem] rounded-[3rem] brightness-110"
          />
          <p className="Golanerounded relative lg:bottom-24 bottom-56 lg:left-5 right-10 text-white lg:text-[1.2rem] rounded-md bg-white/15 w-[9rem] lg:w-[15rem] px-4 py-2 backdrop-blur-lg ">
            modern & stylish furniture
          </p>
        </span>
      </div>
    </div>
  );
};

export default Hero;
