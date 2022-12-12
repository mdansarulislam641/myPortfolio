import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    useEffect(()=>{
        fetch('Details.json')
        .then(res=>res.json())
        .then(data => {
          console.log(data)
        })
    },[])
    return (
        <div>
            <h2>this is details page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, et? Autem dolorum omnis dolorem possimus incidunt, aspernatur molestiae cupiditate reprehenderit ipsum ad porro inventore voluptatum quae facere eveniet eaque.</p>
        </div>
    );
};

export default Details;