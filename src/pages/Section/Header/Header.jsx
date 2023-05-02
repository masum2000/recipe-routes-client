import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center    bg-green-300 py-9 px-10'>
            <div className=' mb-10 '>
            <div className="navbar text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>About Us</Link></li>
                        <li><Link>Contact</Link></li>
                        </ul>
                    </div>
                    <h2 className="text-black font-bold text-4xl">Recipe Routes</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>About Us</Link></li>
                        <li><Link>Contact</Link></li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                   <img src="https://ibb.co/t8x97mS" alt='user' />
                   <button className="btn btn-dark ml-4">Login</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;