import React from "react";
import "../Common.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
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
      <div className="max-w-screen-xl  h-full mx-auto flex  items-center justify-evenly">
        <div className='flex-1  data-aos="fade-left" data-aos-id="super-duper"  rounded-3xl text-left'>
          <div className="flex flex-col items-start ">
            <h2 className="text-[#34d399] text-2xl md:text-3xl lg:text-5xl  font-bold uppercase mb-2">MD Ansarul </h2>
            <h3 className="uppercase text-2xl md:text-3xl lg:text-5xl  font-extrabold font-mono  text-color pr-5">
              I'm a <span className="text-teal-100">{text}</span>
              <Cursor cursorColor="red" />
            </h3>

            <h4 className="text-2xl md:text-3xl text-center py-5 text-white">
              HTML | CSS | JavaScript | React | NodeJs
            </h4>
            <div className="text-center flex gap-x-5 justify-center py-3">
              <button className="btn text-white border-teal-400 bg-transparent border-2">
                <a href="#projects">Projects</a>
              </button>
              <button className="btn text-white border-teal-400 bg-transparent border-2">
                {" "}
                <a href={resume} download="portfolio" target="_blank" rel="noopener noreferrer">
                  REsume
                </a>
              </button>
            </div>
            {/* social icons  */}
            <div className="flex justify-center gap-5 pt-2 z-40">
              <a href="https://www.facebook.com/md.ansarulislam.641" target="_blank" rel="noopener noreferrer"> <BsFacebook size={30} className=" text-gray-100 cursor-pointer" /></a>
             
              <a href="https://www.linkedin.com/in/md-ansarul-haque/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={30} className=" text-gray-100 cursor-pointer"/>
              </a>
              <a href="https://github.com/mdansarulislam641" target="_blank" rel="noopener noreferrer">
              <BsGithub size={30} className=" text-gray-100 cursor-pointer"/>
              </a>
              
            </div>
          </div>
        </div>

        {/* profile image  */}
        <div className="flex-2">
          <img
            className="w-[370px] h-[370px] mx-auto  border-4 border-b-transparent border-[#34d399] rounded-full"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
