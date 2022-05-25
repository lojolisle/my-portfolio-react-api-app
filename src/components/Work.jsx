import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react";
import MealBuddyAppImg from '../assets/mealBuddy.jpeg';
import RetroHutImg from '../assets/retro-hut.jpeg';
import RXImg from '../assets/automation.jpeg';
import ApiGeoCode from '../assets/geo1.jpeg';

import HTML from '../assets/html.png';
import Tailwind from '../assets/tailwind.png';
import Vue from '../assets/vue.png';
import aspnet from '../assets/aspnet.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';


const Work = () => {
  const [works, setWorks] = useState([]);
  useEffect(()=>{
    getWorks();
  }, [])

  // cant retrieve image from API. had to use a little hack here
  const imgs = {RetroHutImg : RetroHutImg, MealBuddyAppImg: MealBuddyAppImg, RXImg: RXImg, ApiGeoCode:ApiGeoCode};
  const techs = {
    RetroHutImg : [<img className='w-7 mx-auto' src={HTML} alt='HTML icon' />, <img className='w-7 mx-auto' src={CSS} alt='HTML icon' />, <img className='w-7 mx-auto' src={JavaScript} alt='HTML icon' /> ], 
    MealBuddyAppImg: [<img className='w-7 mx-auto' src={HTML} alt='HTML icon' />, <img className='w-7 mx-auto' src={CSS} alt='HTML icon' />, <img className='w-7 mx-auto' src={JavaScript} alt='HTML icon' /> ], 
    RXImg: [<img className='w-7 mx-auto' src={aspnet} alt='HTML icon' />, <img className='w-7 mx-auto' src={HTML} alt='HTML icon' />, <img className='w-7 mx-auto' src={CSS} alt='HTML icon' />, <img className='w-7 mx-auto' src={JavaScript} alt='HTML icon' /> ], 
    ApiGeoCode: [<img className='w-7 mx-auto' src={Node} alt='HTML icon' />, <img className='w-7 mx-auto' src={Vue} alt='HTML icon' />, <img className='w-7 mx-auto' src={Tailwind} alt='HTML icon' />, <img className='w-7 mx-auto' src={JavaScript} alt='HTML icon' /> ] 
  }

  function getWorks() {
    axios.get('https://infinite-beyond-59492.herokuapp.com/api/projects/1').then(function(response) {
      setWorks(response.data);
    });
  }
 
  return (
    <div name='work' className='w-full 2xl:h-screen xl:h-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 pt-16 flex flex-col justify-center w-full h-full'>
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
                  <div className='flex pt-8 text-center text-black-700'>
                    {techs[work.slug]}
                  
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
