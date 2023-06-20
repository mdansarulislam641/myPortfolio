import React from 'react';

const Skills = () => {
    const skills = [
        "HTML",  "CSS",'Jquery', "Bootstrap",'Tailwind', 'JavaScript', 'Mongodb'
        ,'NodeJs', 'Express','Firebase','Github','Vercel'
    ]
    return (
       <section id='skills' className='bgg py-10 md:py-20'>
         <div  className='max-w-screen-xl mx-auto' >
            <h1 className=' font-extrabold  font-mono uppercase text-4xl text-amber-600 md:text-6xl divider'>My skills</h1>

            <div className='md:flex justify-between mx-5 py-10  lg:py-20 gap-10 items-center '>
                <div  data-aos="fade-left" className='hover:animate-pulse flex-1 mb-10'>
                   <p className='text-white text-justify text-xl capitalize'>I have been in the web development sector for almost a long year. During this time I have learned mern and am learning new tools, components every day, I am eager to accept challenges in any situation, also able to change myself as the technology changes in the future Insha Allah.</p>
                </div>
                <div  data-aos="fade-right" className= 'shadow-lg shadow-blue-400 py-10 rounded-lg px-5 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4 gap-y-5 flex-1'>
                    {
                        skills.map((skill, idx) => <button className='text-white hover:animate-bounce  border mx-2 px-5 py-2 rounded border-amber-500 cursor-default text-xl' key={idx}>{skill}</button>)
                    }
                </div>
            </div>
          

        </div>
       </section>

      
    );
};

export default Skills;