import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import MealBuddyAppImg from '../assets/MealBuddyApp.png';
import RetroHutImg from '../assets/RetroHut.jpg';
import RXImg from '../assets/Rx-Automation.jpeg';

const Work = () => {
  const [works, setWorks] = useState([]);
  useEffect(()=>{
    getWorks();
  }, [])

  // cant retrieve image from API
  const imgs = [RXImg, MealBuddyAppImg, RetroHutImg];


  function getWorks() {
    axios.get('http://localhost:8080/api/projects/4').then(function(response) {
      setWorks(response.data);
    });
  }
 
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Container */}
          {
            works.map((work, key) =>  
              <div
                  style={{ backgroundImage: `url(${imgs[key]})` }}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
              >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                {work.title}
              </span>
              <div className='pt-8 text-center'>
              <a  href={`${work.url}`}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo
                    </button>
                  </a>
                  <a  href={`${work.url}`}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
        
            )    
          }
        </div>   
      </div>
    </div>
  );
};

export default Work;
