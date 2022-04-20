import React from 'react';
import Skill from '../components/skill';

const Skills = ({ skills }) => {

  return (    
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Start Container */}
     
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are few of the technologies I have worked with</p>
          </div>
          
          <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-10'>
          { skills.map(skill => (         
                <Skill key={skill.id} skill={skill} />
            ))   
          } 
          </div>
      </div>
    </div>
  );
};

export default Skills;
