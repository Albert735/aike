// import React from 'react';
import inspo1 from "../assets/blend-minimal-nordic-interior-design-with-japanese-wabi-sabi-style.jpg";
import inspo2 from "../assets/decorative-pom-poms-used-decorative-vase.jpg";
import inspo3 from "../assets/minimal-amazing-interior-design.jpg";
import inspo4 from "../assets/modern-entryway-with-furniture-home-decor.jpg";
import inspo5 from "../assets/view-interior-design-space-with-color-year-furnishings-decorations.jpg";

function Inspo() {
  return (
    <div className="logo flex flex-col w-[100%] max-w-screen-2xl mx-auto justify-between items-start py-20 px-5 md:px-0 ">
      <div>
        <h1 className="text-[3rem] Golanerounded">
          We <span className="CisalackSignature">meticulously</span> curate our
          <br /> <span className="text-gray-500"> product selections</span> to
          ensure <br /> you receive only the best.
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5 py-10">
        <img src={inspo1} alt="" className=" h-[20rem] rounded-lg drop-shadow-md" />
        <img src={inspo2} alt="" className=" h-[30rem] rounded-lg drop-shadow-md" />
        <img src={inspo3} alt="" className=" h-[40rem] rounded-lg drop-shadow-md" />
        <img src={inspo4} alt="" className=" h-[30rem] rounded-lg drop-shadow-md" />
        <img src={inspo5} alt="" className=" h-[20rem] rounded-lg drop-shadow-md" />
      </div>
    </div>
  );
}

export default Inspo;
