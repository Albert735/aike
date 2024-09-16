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
        <div className="flex flex-col justify-start items-start w-full py-5">
          <h1 className="CisalackSignature text-xl">CATEGORY</h1>
          <h1 className="Golanerounded text-[2rem]">
            Design Your Perfect Home
          </h1>
        </div>
        <div className="Golanerounded text-lg flex justify-center items-center gap-7">
          <span className="flex flex-col justify-start items-start gap-5">
            <img src={livingRoom} alt="" className="h-[20rem] w-[25rem]" />
            <p>Living Room</p>
          </span>
          <span className="flex flex-col justify-start items-start gap-5">
            <img src={bedRoom} alt="" className="h-[20rem] w-[25rem]" />
            <p>Bed Room</p>
          </span>
          <span className="flex flex-col justify-start items-start gap-5">
            <img src={diningRoom} alt="" className="h-[20rem] w-[25rem]" />
            <p>Bed Room</p>
          </span>
          <span className="flex flex-col justify-start items-start gap-5">
            <img src={homeOffice} alt="" className="h-[20rem] " />
            <p>Home Office</p>
          </span>
        </div>
      </div>

      <div className="flex justify-between items-start w-full">
        <div>
          <img src={sittinArea} alt="" className="h-[35rem] w-[55rem]" />
        </div>
        <div className="w-[35rem]">
          <h1 className="CisalackSignature text-[1.2rem]">OUR AMBITIONS</h1>
          <h1 className="Golanerounded text-[2.4rem]">
            Pioneering innovation and <br /> excellence in furniture
          </h1>
          <p className="Golanerounded text-gray-500 leading-loose text-[18px]">
            Striving for excellence in every detail, we are committed to <br />
            revolutionizing the online shopping experience. Our ambition is to{" "}
            <br />
            set new standards in quality, customer satisfaction, and <br />
            sustainability, ensuring that every purchase from our platform is a{" "}
            <br />
            step towards a brighter, more innovative future.
          </p>
          <button className="px-6 py-3 my-6 bg-black text-white rounded-lg">EXPLORE NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Category;
