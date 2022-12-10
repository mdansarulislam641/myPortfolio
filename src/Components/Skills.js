import React from 'react';

const Skills = () => {
    return (
        <div  data-aos="fade-left" className='py-20' id='skills'>
            <h1 className='divider font-extrabold divide-violet-800 font-mono uppercase  text-6xl '>My skills</h1>

            <div  data-aos="fade-right" className='grid grid-cols-2 justify-items-center  sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-y-10 py-20'>
                {/* for html */}
            <div className="radial-progress bg-primary text-primary-content border-4 text-center w-32 h-32 border-primary" style={{"--value":90}}>90% <br /> HTML</div>
                {/* for CSS */}
            <div className="radial-progress bg-primary text-primary-content border-4 text-center w-32 h-32 border-primary" style={{"--value":80}}>80% <br /> CSS</div>
                {/* for Bootstrap */}
            <div className="radial-progress bg-primary text-primary-content border-4 text-center w-32 h-32 border-primary" style={{"--value":85}}>85% <br /> Bootstrap</div>
                {/* for JQuery */}
            <div className="radial-progress bg-primary text-primary-content border-4 text-center w-32 h-32 border-primary" style={{"--value":60}}>60% <br /> JQuery</div>
                {/* for Tailwind CSS */}
            <div className="radial-progress bg-primary text-primary-content border-4 text-center w-32 h-32 border-primary" style={{"--value":90}}>90% <br /> Tailwind CSS</div>
                {/* for Tailwind MongoDb */}
            <div className="radial-progress bg-primary text-primary-content border-4 text-center w-32 h-32 border-primary" style={{"--value":55}}>55% <br />MongoDb</div>
                {/* for Tailwind ExpressJs */}
            <div className="radial-progress bg-primary text-primary-content border-4 text-center w-32 h-32 border-primary" style={{"--value":95}}>95% <br />ExpressJs</div>
                {/* for react */}
            <div className="radial-progress bg-primary text-primary-content border-4 text-center w-32 h-32 border-primary" style={{"--value":70}}>70% <br /> ReactJs</div>
                {/* for NodeJs */}
            <div className="radial-progress bg-gray-500 text-primary-content border-4 text-center w-32 h-32 border-primary" style={{"--value":50}}>50% <br /> NodeJs</div>
            </div>

        </div>

      
    );
};

export default Skills;