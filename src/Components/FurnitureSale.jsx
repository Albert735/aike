// import React from 'react'
import kalax from "../assets/view-modern-photorealistic-lamp (1).jpg";
import mammut from "../assets/realistic-interior-design-with-furniture.jpg";
import arklestorp from "../assets/view-room-with-furniture-beige-monochrome-palette.jpg";
import lax from "../assets/picture-frame-by-velvet-armchair.jpg";
import naxu from "../assets/background-with-simple-white-walls-furniture.jpg";

function FurnitureSale() {
  return (
    <div className="logo flex flex-col w-[100%] max-w-screen-2xl mx-auto justify-between items-start py-10 px-5 md:px-0 ">
      <div className="flex flex-col justify-center items-center w-full py-5">
        <h1 className="CisalackSignature text-xl">POPULAR</h1>
        <h1 className="Golanerounded text-[2rem]">Furniture Sale Now On!</h1>
      </div>
      <div className="Golanerounded text-lg flex justify-center items-center gap-3">
        <span className="flex flex-col justify-start items-start gap-5">
          <img src={kalax} alt="" className="h-[30rem]" />
          <p>Kalax Table</p>
        </span>
        <span className="flex flex-col justify-start items-start gap-5">
          <img src={mammut} alt="" className="h-[30rem]" />
          <p>Mammut</p>
        </span>
        <span className="flex flex-col justify-start items-start gap-5">
          <img src={arklestorp} alt="" className="h-[30rem]" />
          <p>Arklestorp</p>
        </span>

        <span className="flex flex-col justify-start items-start gap-5">
          <img src={lax} alt="" className="h-[30rem]" />
          <p>Lax</p>
        </span>

        <span className="flex flex-col justify-start items-start gap-5">
          <img src={naxu} alt="" className="h-[30rem]" />
          <p>Naxu Duo</p>
        </span>
      </div>
    </div>
  );
}

export default FurnitureSale;
