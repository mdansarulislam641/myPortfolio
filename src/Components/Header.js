import React from 'react';

const Header = () => {
   
    return (
        <div className='text-white sticky top-0 z-10 bg-gray-600 '>
        
            <div className="navbar max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
    
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact bg-gray-600 dropdown-content mt-3 p-2 shadow rounded-box w-52">
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Project</a></li>
        <li><a href='#contact-me'>Contact</a></li>
      </ul>
    </div>
    <a href='/' className="font-extrabold font-mono   text-3xl text-amber-600">ANSARUL</a>
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
    <a  target='_blank' href='https://drive.google.com/drive/u/0/folders/1QrOSA_4DoyejA9keZbqo8PEVxcCoEAsU' download='https://drive.google.com/drive/u/0/folders/1QrOSA_4DoyejA9keZbqo8PEVxcCoEAsU' className="btn btn-primary">Get Resume</a>
  </div>
</div>
        </div>
    );
};

export default Header;