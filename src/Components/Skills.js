import React from 'react';

const Skills = () => {
    const skills = [
        "HTML",  "CSS",'Jquery', "Bootstrap",'Tailwind', 'JavaScript', 'Mongodb'
        ,'NodeJs', 'Express','Firebase','Github','Vercel'
    ]
    return (
       <section id='skills' className='bgg py-20'>
         <div  data-aos="fade-left" className='max-w-screen-xl mx-auto' >
            <h1 className=' font-extrabold  font-mono uppercase text-4xl text-amber-600 md:text-6xl divider'>My skills</h1>

            <div className='flex justify-between py-20 gap-10 items-center '>
                <div className='flex-1'>
                   <p className='text-white text-justify text-xl capitalize'>I have been in the web development sector for almost a long year. During this time I have learned mern and am learning new tools, components every day, I am eager to accept challenges in any situation, also able to change myself as the technology changes in the future Insha Allah.</p>
                </div>
                <div className='grid grid-cols-4 gap-y-5 flex-1'>
                    {
                        skills.map((skill, idx) => <button className='text-white border mx-2 px-5 py-2 rounded border-amber-500 cursor-default text-xl' key={idx}>{skill}</button>)
                    }
                </div>
            </div>
          

        </div>
       </section>

      
    );
};

export default Skills;