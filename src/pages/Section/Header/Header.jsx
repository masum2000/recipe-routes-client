import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {



    return (
        <div className='text-center   bg-green-300 py-3 md:px-10'>
            <div className=''>
                <div className="navbar text-black">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className=" lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/'>About Us</Link></li>
                                <li><Link to='/'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <h2 className="text-slate-900 font-bold text-4xl">Recipe Routes</h2>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/'>About Us</Link></li>
                            <li><Link to='/'>Contact Us</Link></li>

                        </ul>
                    </div>
                    <div className="navbar-end">

                        <Link>
                            <img className='h-10 w-10 rounded-full' src="https://img.freepik.com/free-photo/portrait-young-man-with-glasses_641386-302.jpg?w=1060&t=st=1683086939~exp=1683087539~hmac=15a33d391f3dba1a79941ac4cfb0111ff03b88696855c470ca81612f82c40eb1" alt='user' />
                        </Link>


                        <button className="btn btn-dark ml-4">Logout</button>
                        <Link>
                            <button className="btn btn-dark ml-4">Login</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;