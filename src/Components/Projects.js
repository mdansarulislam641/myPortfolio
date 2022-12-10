import React from 'react';
import project1 from '../assets/project-1.PNG';
import project2 from '../assets/project2.PNG';
import project3 from '../assets/project3.PNG';
import ProjectCard from './ProjectCard';
const Projects = () => {

    const projectInfo = [
        {   image: project1 ,
            name: ' Optimized Brain Web App',
            technology: ['react', 'react-router-dom', 'rest api', 'react graph'],
            codeLink : '',
            liveLink : 'https://optimizedbrainwithquiz.netlify.app/'

        },
        {   image: project2 ,
            name: 'Second Hand Laptop Resell',
            technology: ['react', 'react-router-dom', 'rest api', 'mongodb', 'express', 'nodejs', 'admin route'],
            codeLink : '',
            liveLink : 'https://resell-product.web.app/'

        },
        {   image: project3 ,
            name: 'Online Computer Service',
            technology: ['react', 'react-router-dom', 'rest api', 'mongodb', 'express', 'nodejs', 'admin route'],
            codeLink : '',
            liveLink : 'https://genius-cart-6d01c.web.app/'

        },
    ]


    return (
        <div id='projects' className='py-20'>
            <h1 className='divider text-5xl font-extrabold font-mono pb-20'>My Projects</h1>

            <div  data-aos="fade-left" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
                {
                   projectInfo.length > 0 && projectInfo.map((item, idx) =><ProjectCard key={idx} item={item}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;