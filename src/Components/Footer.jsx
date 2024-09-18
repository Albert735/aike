// import React from 'react'

function Footer() {
  return (
    <div className="logo flex flex-col w-[100%] max-w-screen-2xl mx-auto justify-between items-start py-5 px-5 md:px-0 gap-10">
      <div className="flex xl:flex-row flex-col flex-wrap justify-between w-full gap-10">
        <div>
          <h1 className="CisalackSignature font-bold md:text-[2rem] text-[1.5rem]">
            AIKE
          </h1>
        </div>
        <div className="Golanerounded flex flex-wrap   justify-between items-start xl:w-[50rem]">
          <span>
            <h1 className="text-[1.3rem] py-2">Company</h1>
            <ul className="space-y-3 text-gray-500">
              <li>About Us</li>
              <li>Shop</li>
              <li>Careers</li>
              <li>FAQ</li>
            </ul>
          </span>
          <span>
            <h1 className="text-[1.3rem] py-2">Category</h1>
            <ul className="space-y-3 text-gray-500">
              <li>Living Room</li>
              <li>Dining Room</li>
              <li>Home Office</li>
              <li>Bed Room</li>
              <li>Outdoor</li>
            </ul>
          </span>
          <span>
            <h1 className="text-[1.3rem] py-2">Join Our Newsletter</h1>
            <input
              type="text"
              placeholder="Email"
              className="border-b w-[20rem] p-2 outline-none"
            />
          </span>
        </div>
      </div>

      <hr className="h-1 w-full my-5" />
      <div className="Golanerounded flex flex-wrap  justify-between items-start w-full gap-5 ">
        <span>
          <p className="text-gray-500 Golanerounded">
            © 2023 AIKE. All rights reserved.
          </p>
          <p className="text-gray-500 Golanerounded">Powered by AIKE</p>
          <p className="text-gray-500 Golanerounded">Designed by AIKE</p>
        </span>
        <span>
          <p>Terms and Conditions</p>
        </span>
        <span>
          <p>Privacy Policy</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
