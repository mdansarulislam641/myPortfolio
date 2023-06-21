import React from 'react';
import {FiExternalLink} from 'react-icons/fi'; 
import {BsGithub} from 'react-icons/bs'; 
import { Link } from 'react-router-dom';
const Card = ({data, stickyTopSpace}) => {
  console.log(data)
    const {image  , codeLink ,backgroundColor , description , liveLink ,name , technology } = data || {};
    return (
        <div 
        className={`sticky p-2 h-full my-20 grid grid-cols-1 overflow-hidden rounded-xl   shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.1)] md:grid-cols-2 border  border-gray-600 `}
        style={{ top: stickyTopSpace , backgroundColor: backgroundColor }}
      >
        <div className="flex flex-col justify-center">
        <div className='content'>
       <div className='screen'>
                <img className='' src={image} alt="" />
            </div>
       </div>
        </div>
        <div className="relative min-h-[200px] md:min-h-[300px] my-auto">
          <h2 className='text-center text-xl md:text-2xl lg:text-3xl font-bold'>{name}</h2>
          <p className='text-center lg:w-1/2 w-[80%] py-2 mx-auto font-medium capitalize'>{description}</p>
          {/* technology  */}
          <div className='grid mx-auto my-5  gap-4 grid-cols-2 lg:w-1/2 w-[80%] '>
          {technology?.map((tech , idx) => {
            return <p key={idx} className='custom-border lg:px-2 py-1 shadow-md font-bold capitalize rounded-xl text-center'>{tech}</p>
          })}
          </div>
          {/* line  */}
          <div className='bg-gray-300  h-[4px] w-[80%] mx-auto'></div>
          {/* control  */}
          <div className='grid gap-5 my-5  lg:w-[60%] w-[75%]  justify-items-center  grid-cols-2 mx-auto  '>
           <Link to={codeLink} className='flex sm:w-[140px] lg:w-[80%] justify-center items-center gap-2 border capitalize rounded-xl  font-bold px-3 py-1 border-gray-500'><BsGithub  size={20}/>Code</Link>
           <Link to={liveLink} className='flex py-1 lg:w-[80%] sm:w-[140px] w-full items-center gap-2 border border-[#1d2631] capitalize justify-center rounded-xl text-center  lg:px-3  font-bold'>  <FiExternalLink size={20}/>Live Demo</Link>
          
          </div>
  
        </div>
      </div>
    );
};

export default Card;