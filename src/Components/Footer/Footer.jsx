import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className='bg-gray-800'>
      <footer className='text-white max-w-7xl mx-auto py-2 md:px-0 px-5'>
        <div className='py-4 flex flex-wrap justify-between items-center'>
          {/* Footer top */}
          <div className=' space-y-2'>
            {/* Logo */}

            <img className='w-32' src={logo} alt='logo' />

            {/* Tagline */}
            <p className='text-sm font-semibold'>
              Worldwide Best Social Platform
            </p>
          </div>
          {/* Footer middle */}
          <div className='flex items-center space-x-4 mt-8 md:mt-0'>
            {/* Newsletter input field */}
            <input
              type='email'
              placeholder='Enter your email'
              className='bg-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {/* Subscribe button */}
            <button
              type='button'
              className='bg-[#0A69DC] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition duration-300'
            >
              Subscribe
            </button>
            {/* Text */}
          </div>
        </div>
        {/* Footer bottom */}
        <div className='container mx-auto py-4 border-t border-gray-700 flex flex-wrap justify-between items-center'>
          <div className='space-y-3'>
            <ul className='flex space-x-4 text-sm font-semibold'>
              <li>
                <a
                  href='/career'
                  className='hover:text-[#0A69DC] transition duration-300'
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href='/privacy'
                  className='hover:text-[#0A69DC] transition duration-300'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='/terms'
                  className='hover:text-[#0A69DC] transition duration-300'
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
            {/* Icons */}
            <ul className='flex space-x-4 text-xl'>
              <li>
                <a
                  href='/facebook'
                  className='text-[#0A69DC] hover:text-[#0A69DC] transition duration-300'
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href='/twitter'
                  className='text-[#0A69DC] hover:text-blue-500 transition duration-300'
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href='/instagram'
                  className='text-[#0A69DC] hover:text-blue-500 transition duration-300'
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          {/* Copyright */}
          <div className='space-y-2 md:mt-0 mt-4'>
            <p className='text-sm font-semibold flex space-x-2'>
              <span className='text-[#0A69DC]'>
                <FaLocationArrow size={18} />
              </span>
              <span> Kota, Rajasthan</span>
            </p>
            <p className='text-sm font-semibold flex space-x-2'>
              <span className='text-[#0A69DC]'>
                <FaPhone size={18} />
              </span>
              <span>+91 7627022882</span>
            </p>
            <p className='text-sm font-semibold flex space-x-2'>
              <span className='text-[#0A69DC]'>
                <FaCopyright size={18} />
              </span>
              <span>All right reserved by @ronaksen</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
