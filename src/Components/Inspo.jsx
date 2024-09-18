// import React from 'react';
import inspo1 from "../assets/blend-minimal-nordic-interior-design-with-japanese-wabi-sabi-style.jpg";
import inspo2 from "../assets/decorative-pom-poms-used-decorative-vase.jpg";
import inspo3 from "../assets/minimal-amazing-interior-design.jpg";
import inspo4 from "../assets/modern-entryway-with-furniture-home-decor.jpg";
import inspo5 from "../assets/view-interior-design-space-with-color-year-furnishings-decorations.jpg";

function Inspo() {
  return (
    <div className="logo flex flex-col w-[100%] max-w-screen-2xl mx-auto justify-between items-start py-20 px-5 md:px-0">
      <div className="flex justify-center items-cente xl:justify-start xl:items-start w-full">
        <h1 className="xl:text-[3rem] text-[2rem] Golanerounded">
          We <span className="CisalackSignature">meticulously</span> curate our
          <br /> <span className="text-gray-500"> product selections</span> to
          ensure <br /> you receive only the best.
        </h1>
      </div>
      <div className="relative flex flex-col justify-center items-center gap-5 py-10 w-full">
        <div className="flex justify-center items-center">
          <img
            src={inspo1}
            alt=""
            className="hidden xl:flex h-[20rem] rounded-lg drop-shadow-md"
          />
          <img
            src={inspo2}
            alt=""
            className=" xl:h-[30rem] md:h-[15rem] h-[10rem] relative -right-12   -rotate-12  rounded-lg drop-shadow-md"
          />
          <img
            src={inspo3}
            alt=""
            className=" xl:h-[40rem] md:h-[20rem] h-[15rem] rounded-lg drop-shadow-md"
          />
          <img
            src={inspo4}
            alt=""
            className=" xl:h-[30rem] md:h-[15rem] h-[10rem] relative right-12  -z-10 rotate-12 rounded-lg drop-shadow-md"
          />
          <img
            src={inspo5}
            alt=""
            className="hidden xl:flex h-[20rem] rounded-lg drop-shadow-md"
          />{" "}
        </div>

        <div>
          <p className=" CisalackSignature absolute xl:-bottom-[10rem] -bottom-[2rem] right-4 md:right-56 xl:right-4 -z-20  xl:text-[35rem] text-[8rem] text-gray-200">
            AIKE
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inspo;
