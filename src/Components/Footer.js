import React from 'react';

const Footer = () => {
    return (
        <footer className='bgg py-20 text-center' >
           <div className='max-w-screen-xl mx-auto'>
           <h2 className='text-amber-600 text-5xl text-extrabold font-bold'><a href="#home">Portfolio</a></h2>
         
           <p className='text-white'>12/12/2022</p>
           <div>
            <h2 className='text-xl text-amber-400'>Social Media</h2>
           <a className='text-xl hover:text-amber-500  text-white link link-hover' href="https://github.com/mdansarulislam641">github |</a>
                   <a className='text-xl  hover:text-amber-500 mx-2 text-white link link-hover' href="https://www.linkedin.com/in/md-ansarul-haque/">Linkedin |</a>
                   <a className='text-xl  hover:text-amber-500 text-white link link-hover' href="https://www.linkedin.com/in/md-ansarul-haque/"> facebook</a>
                   <p className='text-white'>  copyright Md Ansarul Haque</p>
           </div>
           </div>
        </footer>
    );
};

export default Footer;