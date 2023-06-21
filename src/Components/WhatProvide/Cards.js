import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../../Common.css'
const Cards = () => {
    const stickyTopSpace = 100;
    const [projects, setProjects] = useState([]);
    const [loading , setLoading] = useState(true);
    const [loadMore , setLoadMore] = useState(4);
    const [showLess , setShowLess ] = useState(false);
    useEffect(()=>{
        fetch('Projects.json')
        .then(res=>res.json())
        .then(data => {
            setProjects(data)
            setLoading(false)
        })
    },[loading]);

    // handle load projects 
    const handleLoadProjects = () =>{
        setLoadMore(projects?.length);
        setShowLess(!showLess);
    }
    const handleLoadLess = () =>{
        setLoadMore(4);
        setShowLess(!showLess);
    }

        if(loading) return <p>Loading....</p>

    return (
        <div id='projects' className=" my-32">
            
            <h1 className=' font-extrabold  font-mono uppercase text-4xl text-color md:text-6xl divider'>projects</h1>
        <div className="space-y-10 max-w-screen-xl px-10 mx-auto ">
        {projects?.length > 0 &&  projects.slice(0,loadMore).map((card, index) => (
            <Card key={card.id} data={card} stickyTopSpace={stickyTopSpace * (index + 1)}></Card>
        ))}
    </div>
   <div className='text-center '>
  { !showLess && <button onClick={handleLoadProjects} className=' border-[#34d399] border-2 px-5 py-2 rounded-xl text-white capitalize font-semibold text-xl my-10 bg-transparent'>Show More</button>}
 { showLess &&  <button onClick={handleLoadLess} className=' border-[#34d399] border-2 px-5 py-2 rounded-xl text-white capitalize font-semibold text-xl my-10 bg-transparent'>Show Less</button>}
   </div>
    </div>
    );
};

export default Cards;