import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = ( {user} ) => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Start Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-amber-600'>Hello!!  I am  </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f9]'>
          {user.first} {user.last}
        </h1>
        {/* [#a4b988] */}
        <h2 className='text-4xl sm:text-7xl font-bold text-amber-700'>
          Full Stack Developer
        </h2>
        <p className='text-[#cececf] py-4 max-w-[700px]'>
          I bring your ideas to life by creating clean, elegant and efficient software.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-600 hover:border-amber-600'>
              View My Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
