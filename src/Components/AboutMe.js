import React from 'react';
import profile from '../assets/profile-2.jpg';

const AboutMe = () => {
    return (
     <div id='about' data-aos="fade-left" data-aos-id="super-duper" className='grid grid-cols-1 md:grid-cols-2 items-center py-20'>
        <div data-aos="fade-in" data-aos-id="super-duper">
        <h1 className='text-6xl font-bold text-center py-10 text-blue   -800/100'>About Me <br /><span className='text-white'>Who Am I</span> </h1>

        {/* <img src={aboutme} alt="" /> */}
        </div>
           <div  data-aos='fade-down-right' className=''>
           <div className='flex  justify-center'>
           <img className='w-48 h-48 rounded-full'  src={profile} alt="" />
           </div>
           <div className=''>
            <p className='py-5 mx-5 text-center md:text-justify text-white text-xl'>In addition, I am a Diploma in Computer Engineer. I studied computer for four years at Dinajpur Polytechnic. Before taking admission in diploma, I passed secondary from science department. And lastly I did a web design course in a reputed IT institute in Dhaka</p>
           </div>
        </div>
     </div>
    );
};

export default AboutMe;