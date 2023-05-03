import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='text-center bg-sky-700 py-6 md:px-10'>
      <div className=''>
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to='/' exact activeClassName='active-link'>Home</NavLink></li>
                <li><NavLink to='/blog' activeClassName='active-link'>Blog</NavLink></li>
                <li><NavLink to='/about' activeClassName='active-link'>About Us</NavLink></li>
                <li><NavLink to='/contact' activeClassName='active-link'>Contact Us</NavLink></li>
              </ul>
            </div>
            <h2 className="text-white font-bold text-4xl cursor-pointer">Recipe Routes</h2>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
              <li><NavLink to='/' exact activeClassName='active-link'>Home</NavLink></li>
              <li><NavLink to='/blog' activeClassName='active-link'>Blog</NavLink></li>
              <li><NavLink to='/about' activeClassName='active-link'>About Us</NavLink></li>
              <li><NavLink to='/contact' activeClassName='active-link'>Contact Us</NavLink></li>
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink to='/profile'>
              <img className='h-10 w-10 rounded-full' src="https://img.freepik.com/free-photo/portrait-young-man-with-glasses_641386-302.jpg?w=1060&t=st=1683086939~exp=1683087539~hmac=15a33d391f3dba1a79941ac4cfb0111ff03b88696855c470ca81612f82c40eb1" alt='user' />
            </NavLink>
            <button className="p-3 rounded-lg font-bold bg-white text-black ml-4">Logout</button>
            <NavLink to='/login'>
              <button className="p-3 rounded-lg font-bold bg-white text-black ml-4">Login</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
