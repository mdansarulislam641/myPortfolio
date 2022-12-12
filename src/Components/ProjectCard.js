import React from 'react';
import '../Common.css'
const ProjectCard = ({item}) => {
    const {image, name, technology,codeLink,id, liveLink} = item ;
    return (
        <div  className="hover:animate-pulse card w-full  bgg shadow-xl shadow-[#0b4a89]">
       <div className='content'>
       <div className='screen'>
                <img className='' src={image} alt="" />
            </div>
       </div>
        <div className="card-body">
          <h2 className="text-[23px] font-bold font-mono pb-2 text-amber-500 capitalize  text-center">
            {name}
          </h2>
          <div className='flex gap-3 text-center py-5 text-white flex-wrap'>
            {technology.map((i, idx) => <button key={idx} className='border cursor-default rounded px-2 py-2'>{i}</button>)}
             </div>
          <div className="grid grid-cols-2 gap-5 justify-around">
            <div className="btn border border-amber-600 text-white btn-outline w-full">
            <a href={codeLink}>codeLink</a>
            {/* <Link to={`/details/${id}`}>Details</Link> */}
            {/* <Link to='/details/1'>detasd</Link> */}
              </div> 
            <div className="btn btn-primary w-full"><a href={liveLink}>liveLink</a></div>
          </div>
        </div>
        
      </div>
    );
};

export default ProjectCard;