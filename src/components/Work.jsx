import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react";
import MealBuddyAppImg from '../assets/MealBuddyApp.png';
import RetroHutImg from '../assets/RetroHut.jpg';
import RXImg from '../assets/rxAuto.jpg';
import ApiGeoCode from '../assets/map.png';
import AccessNow from '../assets/AccessNow.png';
import PhpLaravel from '../assets/phpLaravel.png';

const Work = () => {
  const [works, setWorks] = useState([]);
  useEffect(()=>{
    getWorks();
  }, [])

  // cant retrieve image from API. had to use a little hack here
  const imgs = {RetroHutImg : RetroHutImg, MealBuddyAppImg: MealBuddyAppImg, RXImg: RXImg, ApiGeoCode:ApiGeoCode, AccessNow:AccessNow, PhpLaravel:PhpLaravel};


  function getWorks() {
    axios.get('https://infinite-beyond-59492.herokuapp.com/api/projects/1').then(function(response) {
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

          {/* Container section */}
          {
            works.map((work, key) =>  
            <div>
              <div
                  style={{ backgroundImage: `url(${imgs[work.slug]})` }}
                  className='shadow-lg shadow-[#7c7377] group container rounded-md flex justify-center items-center mx-auto content-div'
              >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    {work.title}
                  </span>
                  <div className='pt-8 text-center'>
                    <a  href={`${work.url}`} target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                    </a>
                    <a  href={`${work.url}`} target="_blank">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                          Code
                      </button>
                    </a>
                  </div>
                </div>
               
              </div>
             
              <p className='text-left  px-4 py-3'>{work.content}</p>
            </div>
            )    
          }
       
        </div>
      
      </div>
    </div>
  );
};

export default Work;
