import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className='bg-gray-900 py-20 text-center' >
           <div className='max-w-screen-xl mx-auto'>
           <h2 className='text-color text-5xl text-extrabold font-bold'><a href="#home">Portfolio</a></h2>
         
           <p className='text-white my-2'>12/12/2022</p>
           <div>
            <div className="flex justify-center gap-5 pt-2 z-40">
              <a href="https://www.facebook.com/md.ansarulislam.641" target="_blank" rel="noopener noreferrer"> <BsFacebook size={30} className=" text-gray-100 cursor-pointer" /></a>
             
              <a href="https://www.linkedin.com/in/md-ansarul-haque/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={30} className=" text-gray-100 cursor-pointer"/>
              </a>
              <a href="https://github.com/mdansarulislam641" target="_blank" rel="noopener noreferrer">
              <BsGithub size={30} className=" text-gray-100 cursor-pointer"/>
              </a>
              
            </div>
                   <p className='text-white my-2'>  copyright Md Ansarul Haque</p>
           </div>
           </div>
        </footer>
    );
};

export default Footer;