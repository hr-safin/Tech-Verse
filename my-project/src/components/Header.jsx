import React from 'react';

const Header = ({theme,handleTheme}) => {
    console.log(theme)
    return (
        <div className={theme ? "navbar bg-violet-600 text-white p-4 lg:mt-4 lg:rounded-lg lg:pr-10" : "navbar bg-[#0a192f] border-gray-500 border-b text-white p-4  lg:rounded-sm lg:pr-10"}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-violet-500 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-2xl md:text-3xl lg:text-3xl">Tech Verse</a>
  </div>
  <div className="navbar-end">
    
    <button className="btn btn-ghost btn-circle">
      
      <input onClick={handleTheme} type="checkbox" className="toggle"  />
        
     
    </button>
  </div>
</div>
    );
};

export default Header;