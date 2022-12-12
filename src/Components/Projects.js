import React, { useEffect, useState } from 'react';
import project1 from '../assets/project-1.PNG';
import project2 from '../assets/project2.PNG';
import project3 from '../assets/project3.PNG';
import project4 from '../assets/qqq.png';
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
        <div id='projects' className='py-20'>
            <h1 className='divider text-5xl font-extrabold font-mono pb-20'>My Projects</h1>

            <div  data-aos="fade-left" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
                {
                    projectInfo?.map((item, idx) =><ProjectCard key={idx} item={item}></ProjectCard>)
                }
                {/* {
                    projectInfo.map(pd=>console.log(pd))
                } */}
            </div>
        </div>
    );
};

export default Projects;