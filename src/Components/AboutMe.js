import React from 'react';
import profile from '../assets/profile-2.jpg';

const AboutMe = () => {
    return (
  <div id='about' className='bgg  py-20'>
      <div  data-aos="fade-left" data-aos-id="super-duper" className='max-w-screen-xl mx-auto '>
       
       <div  className='md:flex justify-center  gap-5 items-center'>
       <div  data-aos='fade-down-right' className='mx-auto'>
       <img  className='w-64 h-64 mx-auto border border-b-rose-200 border-red-700 rounded-full'  src={profile} alt="" />
       </div>
       <div  data-aos='fade-down-left' className='flex-1 mx-5'>
        <h3 className='text-5xl font-extrabold font-mono text-white'>Hello</h3>
        <p className='py-5 text-center md:text-justify text-white text-xl'>I'm Md Ansarul Haque , a Front-end Developer . i develop full blown web applications using the MERN stack , but i mostly love working in the front end using tailwind css and react . One od my favorite activities is to educated and help others in the field to fulfill their potential and depend my knowledge. You can find more about this on my resume. </p>
       <div className='text-center md:text-left'>
       <button className='text-white rounded-lg py-2  hover:bg-amber-900 border px-10 text-2xl border-red-400'> <a href="https://drive.google.com/drive/u/0/folders/1QrOSA_4DoyejA9keZbqo8PEVxcCoEAsU" target='_blank'>resume</a> </button>
       </div>
       </div>

    </div>
    <div className='h-1 mt-10 bg-red-800'></div>
 </div>
 
  </div>
    );
};

export default AboutMe;