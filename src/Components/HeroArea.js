import React from 'react';
import profile from "../assets/profile.jpg";
import ParticalBackground from './ParticalBackground';
const HeroArea = () => {
    return (
        <div  data-aos="fade-in" className='flex flex-col-reverse md:flex-row justify-between py-24 mx-10'>
            <ParticalBackground></ParticalBackground>
            <div className=''>
                <h2 className='md:text-4xl text-2xl text-white font-extrabold font-mono'>Hi I'm MD ANSARUL HAQUE</h2>
                <h2 className='text-6xl font-bold font-mono'>I am A Front-end Developer <br /> ReactJs Developer</h2>
                <p className='text-xl'>I’m a web developer specializing in react js. The main focus is front-end, <br /> but at the same time, I try to learn new technology also. <br /> Currently, I’m focused on learning mern stack development.</p>
                <button className='mt-5 btn btn-outline text-xl -py-2'><a href="https://drive.google.com/drive/u/0/folders/1QrOSA_4DoyejA9keZbqo8PEVxcCoEAsU">Resume</a></button>
            </div>
            <div className=''>
                <img className='w-full' src={profile} alt="" />
            </div>
        </div>
    );
};

export default HeroArea;