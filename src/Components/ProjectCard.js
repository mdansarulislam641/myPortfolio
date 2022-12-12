import React from 'react';

const ProjectCard = ({item}) => {
    const {image, name, technology,codeLink, liveLink} = item ;
    return (
        <div  className="card w-full  bg-base-100 shadow-xl">
        <div className='w-full h-48 overflow-y-auto'>
                <img className='w-full h-96 ' src={image} alt="" />
            </div>
        <div className="card-body">
          <h2 className="text-2xl capitalize  text-center">
            {name}
          </h2>
          <p className='flex gap-3'><span>Technology</span> : <span className='flex-1 mb-5'>
            {technology.map((i, idx) => <button key={idx} className='badge my-2 mr-2 cursor-default badge-outline'>{i}</button>)}
              </span></p>
          <div className="grid grid-cols-2 gap-5 justify-around">
            <div className="btn btn-outline w-full"><a href={codeLink}>codeLink</a></div> 
            <div className="btn btn-primary w-full"><a href={liveLink}>liveLink</a></div>
          </div>
        </div>
        
      </div>
    );
};

export default ProjectCard;