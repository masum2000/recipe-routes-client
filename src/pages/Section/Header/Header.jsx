import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const auth =getAuth(app)

const Header = () => {


    const [photoURL, setPhotoURL] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { user, setUser } = useContext(AuthContext) // Add setUser here
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setDisplayName(user.displayName);
                setPhotoURL(user.photoURL);
            } else {
                setUser(null);
                setDisplayName('');
                setPhotoURL('');
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);


  return (
    <div className='text-center bg-sky-700 py-3 md:px-10'>
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
                
              </ul>
            </div>
            <h2 className="text-white pl-2 font-bold md:text-3xl cursor-pointer">Recipe Routes</h2>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
              <li><NavLink to='/' exact activeClassName='active-link'>Home</NavLink></li>
              <li><NavLink to='/blog' activeClassName='active-link'>Blog</NavLink></li>
              
            </ul>
          </div>
          <div className="navbar-end">
                    {user ? (
                        <>
                            <div className="mr-20">
                                <div className="group relative flex justify-center">
                                    <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <img className="w-10 rounded-full" src={photoURL} alt={displayName} />
                                    </button>
                                    <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                                        {displayName}
                                    </span>
                                </div>
                            </div>
                            <button onClick={() => auth.signOut()} className="bg-white p-2 text-black rounded-md font-bold">
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink to="/login" activeClassName="bg-purple-500">
                            <button className="bg-white p-2 text-black rounded-md font-bold">Login</button>
                        </NavLink>
                    )}
                </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
