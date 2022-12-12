import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
const Projects = () => {
    const [projectInfo, setProjectInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('Projects.json')
        .then(res=>res.json())
        .then(data => {
            setProjectInfo(data)
            console.log(data)
            setLoading(false)
        })
    },[loading])
console.log(projectInfo)
    if(loading){
        return <div>Loading......</div>
    }
    return (
        <div id='projects' className='py-20 bgg'>
         <div className='max-w-screen-xl mx-auto'>
         <h1 className='divider text-3xl md:text-5xl font-extrabold font-mono text-amber-600 pb-20'>My Projects</h1>

<div  data-aos="fade-left" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 '>
    {
        projectInfo?.map((item, idx) =><ProjectCard key={idx} item={item}></ProjectCard>)
    }
    {/* {
        projectInfo.map(pd=>console.log(pd))
    } */}
</div>
         </div>
        </div>
    );
};

export default Projects;