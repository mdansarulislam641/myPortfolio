import React from 'react';
import '../Common.css';
const Header = () => {
   
    return (
        <div className='text-white py-2 sticky top-0 z-10 bg-gray-800 shadow-md shadow-teal-900'>
        
            <div className="navbar max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
    
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
        <li className=''><a className='texttt' href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Project</a></li>
        <li><a href='#contact-me'>Contact</a></li>
      </ul>
    </div>
    <a href='/' className="font-extrabold font-mono   text-4xl text-teal-200">ANSARUL</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Project</a></li>
        <li><a href='#contact-me'>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a  target='_blank' href='https://drive.google.com/drive/u/0/folders/1QrOSA_4DoyejA9keZbqo8PEVxcCoEAsU' download='https://drive.google.com/drive/u/0/folders/1QrOSA_4DoyejA9keZbqo8PEVxcCoEAsU' className="bg-[text-color] border-2 border-teal-300 px-2 py-2 rounded-md" rel="noreferrer">Get Resume</a>
  </div>
</div>
        </div>
    );
};

export default Header;