import React from 'react';
import {  FaCode} from "react-icons/fa";
const Services = () => {
    return (
       <section className='bgg py-20'>
         <div className='mx-auto max-w-screen-xl'>
            <h1 className='text-center text-3xl md:text-5xl font-extrabold font-mono text-amber-600'>What do i Provide</h1>
            <div className=''>
               
                <div className='bgg py-10 mt-10 shadow-lg shadow-white border-amber-600 text-center text-white '>
                    <FaCode className='text-5xl text-center mx-auto'></FaCode>
                    <h3 className='text-3xl  text-amber-600'>MERN Stack Development Service</h3>
                    <p className='py-5 text-xl px-5 max-w-xl mx-auto'>I provides Mern Stack development services, fully responsive web site design  and server integrity. We provide complete web site services</p>
                    <button className='btn btn-outline border border-amber-500 text-white'>hire me</button>
               
                </div>
            </div>
        </div>
       
       </section>
    );
};

export default Services;