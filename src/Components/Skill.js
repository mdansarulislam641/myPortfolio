import React from 'react';
import skillData from '../skillData';
const Skill = () => {
    return (
        <section id="skills" className='my-32'>
             <h1 className=' font-extrabold  font-mono uppercase text-4xl text-color md:text-6xl divider'>skills</h1>
             {/* what i know  */}
             <div className='max-w-screen-xl mx-auto my-24'>
               
               {/* language  */}
               <div className=''>
                {
                    skillData?.map((skill, idx) => {
                       return <>
                        <h3 key={idx} className='uppercase mt-4 text-color'>{skill.tech}</h3>
                        <div key={idx} className='flex gap-5 mt-2'>
                        {
                            skill?.data.map((data, idx) => 
                            <div className='flex w-[20%] items-center gap-2 border bg-gray-900 p-2 rounded-md border-[#34d399]'>
                                <img className='w-8' src={data.img} alt="" />
                                <h3 className='text-teal-100'>{data.name}</h3>
                            </div>)
                        }
                        </div> 
                       </>
                    })
                }
                   
               </div>

             </div>
        </section>
    );
};

export default Skill;