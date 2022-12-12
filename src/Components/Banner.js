import React from 'react';
import '../Common.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaArrowDown } from 'react-icons/fa';
import resume from '../assets/myresumiscic.pdf';
const Banner = () => {

  const [text] = useTypewriter({
    words: ['Front-end Web Developer', 'MERN Developer', 'Web Designer'],
    loop: false,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
    return (
        <div id='home' className='bgg h-[80vh] flex justify-center items-center'>
        
            <div className='hover:animate-pulse h-[70vh] md:h-[60vh] rounded-3xl shadow-2xl  shadow-orange-100 w-[80vw] md:w-[70vw] lg:w-[50vw] bgg flex items-center justify-center'>
              <div className='py-10'>
              <h2 className='text-center text-white text-2xl md:text-4xl py-5 animate-pulse'>MD ANSARUL HAQUE</h2>
             
                <h3 className='uppercase text-2xl md:text-3xl lg:text-5xl text-center font-extrabold font-mono text text-amber-600 px-5'>I'm a <span>{text}</span>
      <Cursor cursorColor='red' /></h3>


             



                <h4 className='text-2xl md:text-3xl text-center py-5 text-white'>HTML | CSS | JavaScript | React | NodeJs</h4>
                <div className='text-center flex gap-x-5 justify-center py-10'>
                    <button className='btn border-2 text-white hover:translate-x-0 hover:border-red-700 bg-red-400 border-red-700 btn-ghost bg-transparent'><a href="#projects">Projects</a></button>
                    <button className='btn border-2 text-white hover:translate-x-0 hover:border-yellow-700 hover:text-amber-800  border-red-700 btn-ghost bg-transparent'> <a href={resume} download='portfolio' target='_blank'>REsume</a></button>
                </div>
                <div className='text-white text-center'>
                  <a className='text-amber-500' href="#about"> <FaArrowDown className='mx-auto text-3xl animate-bounce'></FaArrowDown> </a>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Banner;