// import React from 'react'
import livingRoom from "../assets/interior-design-with-photoframes-couch.jpg";
import bedRoom from "../assets/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv.jpg";
import diningRoom from "../assets/3d-modern-lamp-design.jpg";
import homeOffice from "../assets/michael-soledad-B4GwdlgTh5Y-unsplash.jpg";
import sittinArea from "../assets/sofa-living-room-decorated-with-brazilian-folklore-design.jpg";

function Category() {
  return (
    <div className="logo flex flex-col w-[100%] max-w-screen-2xl mx-auto justify-between items-start py-10 px-5 md:px-0 gap-[10rem] ">
      <div>
        <div className="flex flex-col justify-start items-start w-full py-5 text-center xl:text-start">
          <h1 className="CisalackSignature text-xl text-center xl:text-start w-full">
            CATEGORY
          </h1>
          <h1 className="Golanerounded text-center xl:text-start w-full text-[2rem]">
            Design Your Perfect Home
          </h1>
        </div>
        <div className="Golanerounded text-lg flex flex-wrap justify-center items-center gap-7">
          <span className="flex flex-col justify-start items-start gap-5">
            <img
              src={livingRoom}
              alt=""
              className="xl:h-[20rem] w-[22rem]  h-[20rem] rounded-[1rem]"
            />
            <p className="text-center w-full">Living Room</p>
          </span>
          <span className="flex flex-col justify-start items-start gap-5">
            <img
              src={bedRoom}
              alt=""
              className="xl:h-[20rem] w-[22rem]  h-[20rem] rounded-[1rem]"
            />
            <p className="text-center w-full">Bed Room</p>
          </span>
          <span className="flex flex-col justify-start items-start gap-5">
            <img
              src={diningRoom}
              alt=""
              className="xl:h-[20rem] w-[22rem]  h-[20rem] rounded-[1rem]"
            />
            <p className="text-center w-full">Dining Room</p>
          </span>
          <span className="flex flex-col justify-start items-start gap-5">
            <img
              src={homeOffice}
              alt=""
              className="xl:h-[20rem] w-[22rem]  h-[20rem] rounded-[1rem] object-cover"
            />
            <p className="text-center w-full">Home Office</p>
          </span>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-between xl:items-start w-full gap-10 xl:gap-20">
        <div className="flex xl:justify-start justify-center   ">
          <img
            src={sittinArea}
            alt=""
            className="xl:h-[30rem] xl:w-[50rem] w-[25rem] rounded-[1rem] "
          />
        </div>
        <div className="xl:w-[45rem] text-center xl:text-start ">
          <h1 className="CisalackSignature text-[1.2rem] text-center xl:text-start">
            OUR AMBITIONS
          </h1>
          <h1 className="Golanerounded xl:text-[2.4rem] text-[1.7rem] text-center xl:text-start">
            Pioneering innovation and <br /> excellence in furniture
          </h1>
          <p className="Golanerounded text-gray-500 leading-loose xl:text-[18px] text-[14px] text-wrap text-center xl:text-start">
            Striving for excellence in every detail, we are committed to <br />
            revolutionizing the online shopping experience. Our ambition is to{" "}
            <br />
            set new standards in quality, customer satisfaction, and <br />
            sustainability, ensuring that every purchase from our platform is a{" "}
            <br />
            step towards a brighter, more innovative future.
          </p>
          <button className="px-6 py-3 my-6 bg-black text-white rounded-lg text-[12px] xl:text-[16px]">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Category;
