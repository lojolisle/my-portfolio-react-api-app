import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import AWS from '../assets/aws.png';
import aspnet from '../assets/aspnet.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Vue from '../assets/vue.png';
import PHP from '../assets/php.webp';
import Figma from '../assets/figma.webp';
import Mongo from '../assets/mongo.png';

const Skill = ( {skill} ) => {
   let srcImg = "";
   switch (skill.logo) {
      case "HTML":
         srcImg =  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
         break;
      case "CSS":
         srcImg =  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
         break;
      case "AWS":
         srcImg =  <img className='w-20 mx-auto' src={AWS} alt="AWS icon" />
         break; 
      case "PHP":
         srcImg =  <img className='w-20 mx-auto' src={PHP} alt="PHP icon" />
         break; 
      case "ReactImg":
         srcImg =  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
         break;  
      case "Node":
         srcImg =  <img className='w-20 mx-auto' src={Node} alt="Node icon" />
         break;  
      case "GitHub":
         srcImg =  <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
         break;  
      case "Vue":
         srcImg =  <img className='w-20 mx-auto' src={Vue} alt="Vue icon" />
         break; 
      case "Mongo":
         srcImg =  <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
         break;  
      case "Tailwind":
         srcImg =  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
         break; 
      case "Figma":
         srcImg =  <img className='w-20 mx-auto' src={Figma} alt="Figma icon" />
         break; 
      case "aspnet":
         srcImg =  <img className='w-20 mx-auto' src={aspnet} alt="ASPNet icon" />
         break; 
      case "JavaScript":
         srcImg =  <img className='w-20 mx-auto' src={JavaScript} alt="PHP icon" />
         break;                      
      default:
         srcImg =  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />    

   }
   return (
       
      <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
         {srcImg}
         <p className='my-4'>{skill.name}</p>
         
      </div>
   )
}

export default Skill;