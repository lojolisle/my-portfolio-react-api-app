import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';


let linkedinUrl = "https://www.linkedin.com/in/lislelojo/";
let githubUrl = "https://github.com/lojolisle";
let resumeUrl = "http://llojo.epizy.com/resume/Lisle's%20Resume.pdf";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            <span className='hover:text-amber-500'>Home</span>
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
          <span className='hover:text-amber-500'>About</span>
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
          <span className='hover:text-amber-500'>Skills</span>
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
          <span className='hover:text-amber-500'>Work</span>
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
          <span className='hover:text-amber-500'>Contact</span>
          </Link>
        </li>
      </ul>

      {/* Hamburger section */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu section */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons section */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3f32cd]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={linkedinUrl} target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#484848]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={githubUrl} target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#507b72]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:lislelojo21@gmail.com'
              
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8a187b]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={resumeUrl} target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
