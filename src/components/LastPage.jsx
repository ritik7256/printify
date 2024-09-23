import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaReddit } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoTiktok } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function LastPage() {
  return (
    <div className='bg-white h-screen w-full mt-56'>
      <div className='flex justify-between items-start'>
        <img className='w-56' src="/logo.webp" alt="Logo" />
        <div className='flex gap-7 text-xl items-end'>  
          <FaFacebook />
          <FaInstagram />
          <IoLogoLinkedin />
          <FaXTwitter />
          <FaYoutube />
          <IoLogoTiktok />
          <FaReddit />
        </div>
      </div>
        
      <div className='footer bg-zinc-200 w-full h-44 mt-52 flex flex-col  items-center gap-10'>
        <div className='flex gap-7'>
          <h1 className='text-center hover:text-green-500 cursor-pointer'>Intellectual Property Policy</h1>
          <h1 className='text-center  hover:text-green-500 cursor-pointer'>Terms of Service</h1>
          <h1 className='text-center  hover:text-green-500 cursor-pointer'>Privacy Policy</h1>
          <h1 className='text-center  hover:text-green-500 cursor-pointer'>Security</h1>
        </div>
          <div>
          © 2024 Printify, Inc. All rights reserved.
          </div>
      </div>
    </div>
  );
}

export default LastPage;
