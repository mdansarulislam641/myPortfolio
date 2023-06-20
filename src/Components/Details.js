import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import '../Common.css'
const Details = () => {
    const {id} = useParams();
    const [project , setProject] = useState({});
    // get details for single project
    useEffect(()=>{
        const getShopData = async () =>{
         const res = await fetch("/Details.json")
         const data = await res.json();
         setProject(data.find(pr => parseInt(pr.id) === parseInt(id)));
        }
        getShopData();
     },[id]);
     const {name , images , description} = project || {};
     console.log(project , "this is pro")
    return (
        <section>
            <div className='max-w-screen-xl mx-auto'>
            <h2>{name}</h2>
            {/* image container */}
            <div className='grid relative   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
             
               {
                    images?.map(image => <div className='screen'>

                <img  className='h-96 object-cover' src={image} alt="details-image" />
                    </div>)
                }
            </div>
            {/* this is project details */}
            <div>
                <p>{description}</p>
            </div>
            </div>
        </section>
    );
};

export default Details;