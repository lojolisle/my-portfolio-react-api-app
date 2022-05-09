import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react";
import MealBuddyAppImg from '../assets/mealBuddy.jpeg';
import RetroHutImg from '../assets/retro-hut.jpeg';
import RXImg from '../assets/automation.jpeg';
import ApiGeoCode from '../assets/geo1.jpeg';


const Work = () => {
  const [works, setWorks] = useState([]);
  useEffect(()=>{
    getWorks();
  }, [])

  // cant retrieve image from API. had to use a little hack here
  const imgs = {RetroHutImg : RetroHutImg, MealBuddyAppImg: MealBuddyAppImg, RXImg: RXImg, ApiGeoCode:ApiGeoCode};


  function getWorks() {
    axios.get('https://infinite-beyond-59492.herokuapp.com/api/projects/1').then(function(response) {
      setWorks(response.data);
    });
  }
 
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 py-9'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-amber-600'>
            Work
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

          {/* Container section */}
          {
            works.map((work, key) =>  
             
            <div>
              <div
                  style={{ backgroundImage: `url(${imgs[work.slug]})` }}
                  className='shadow-md shadow-[#7b7c73] group container rounded-md flex justify-center items-center mx-auto content-div'
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
                   
                    <a href={work.slug === "ApiGeoCode" ? "https://github.com/lojolisle/ApiProject" : (work.slug === "RetroHutImg")? "https://github.com/lojolisle/RetroHut": (work.slug === "MealBuddyAppImg") ? "https://github.com/lojolisle/MyMealBuddyApp": "https://github.com/lojolisle/HTTP-5212-Passion-Project-RX-V2"}  target="_blank">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                          Codes
                      </button>
                    </a>
                  </div>
                </div>
               
              </div>
             
              <p className='text-left  px-1 py-2'>{work.content}</p>
            </div>
            )    
          }
       
        </div>
      
      </div>
    </div>
  );
};

export default Work;
