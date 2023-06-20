import React from "react";
import "../Common.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaArrowDown } from "react-icons/fa";
import resume from "../assets/myresumiscic.pdf";
import profile from "../assets/pr.JPG";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["Front-end Web Developer", "MERN Developer", "Web Designer"],
    loop: false,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className="bg-header h-[80vh]">
      <div className="max-w-screen-xl h-full mx-auto flex justify-between items-center">
        <div className='flex-1 data-aos="fade-left" data-aos-id="super-duper"  rounded-3xl  flex items-center justify-center'>
          <div className="">
            <h3 className="uppercase text-2xl md:text-3xl lg:text-5xl text-center font-extrabold font-mono text text-amber-600 px-5">
              I'm a <span className="text-teal-900">{text}</span>
              <Cursor cursorColor="red" />
            </h3>

            <h4 className="text-2xl md:text-3xl text-center py-5 text-white">
              HTML | CSS | JavaScript | React | NodeJs
            </h4>
            <div className="text-center flex gap-x-5 justify-center py-3">
              <button className="btn border-2 text-white hover:translate-x-0 hover:border-red-700 bg-red-400 border-red-700 btn-ghost bg-transparent">
                <a href="#projects">Projects</a>
              </button>
              <button className="btn border-2 text-white hover:translate-x-0 hover:border-yellow-700 hover:text-amber-800  border-red-700 btn-ghost bg-transparent">
                {" "}
                <a href={resume} download="portfolio" target="_blank" rel="noopener noreferrer">
                  REsume
                </a>
              </button>
            </div>
            {/* social icons  */}
            <div className="flex justify-center gap-5 pt-2">
              <a href="https://www.facebook.com/md.ansarulislam.641" target="_blank" rel="noopener noreferrer"> <BsFacebook size={30} className=" text-blue-800 cursor-pointer" /></a>
             
              <a href="https://www.linkedin.com/in/md-ansarul-haque/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={30} className=" text-indigo-700 cursor-pointer"/>
              </a>
              <a href="https://github.com/mdansarulislam641" target="_blank" rel="noopener noreferrer">
              <BsGithub size={30} className=" text-indigo-700 cursor-pointer"/>
              </a>
              
            </div>
          </div>
        </div>

        {/* profile image  */}
        <div className="flex-2">
          <img
            className="w-[300px] h-[300px] mx-auto  border-4 border-b-rose-300 border-red-700 rounded-full"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
