import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../providers/AuthProviders';
import app from '../../../firebase/firebase.config';
import Header from '../../Section/Header/Header';
import Footer from '../../Section/Footer/Footer';


const auth = getAuth(app)
const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        console.log(name, email, password);

        if (!email || !password) {
            toast.error('Please enter both email and password');
            return;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
                toast.success('Registration successful');
                updateUserData(result.user, name, photo);

                // Sign out the user immediately after registration
                signOut(auth)
                    .then(() => {
                        console.log('User signed out');
                    })
                    .catch(error => {
                        console.error('Error signing out user:', error);
                    });
            })
            .catch(error => {
                console.error(error);
                toast.error('Registration failed');
            });
    };


    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
            })
            .catch(error => {
                console.error(error);
                toast.error('Registration failed');
            });
    }


    return (
        <div>
            <ToastContainer />
            <Header></Header>
            <div className="container w-10/12 mx-auto py-8">
                <div className="grid grid-cols-1   md:grid-cols-2 gap-8 items-center">
                <form onSubmit={handleSubmit} className="w-80 p-8 rounded-lg bg-white shadow-lg">
                    <h2 className="text-3xl font-bold mb-4 text-center">Registration</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-bold text-gray-700 mb-2">Name</label>
                        <input type="name" name='name' placeholder="Type here" className="input input-bordered  w-full max-w-xs" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold text-gray-700 mb-2">Email</label>
                        <input type="email" name='email' placeholder="Type here" className="input input-bordered  w-full max-w-xs" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-bold text-gray-700 mb-2">Password</label>
                        <input type="password" name='password' placeholder="Type here" className="input input-bordered  w-full max-w-xs" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photourl" className="block font-bold text-gray-700 mb-2">Photo Url</label>
                        <input type="url" name='photo' placeholder="Type here" className="input input-bordered  w-full max-w-xs" />
                    </div>
                    <button className="border-2 border-sky-600 text-black p-3 mb-3 rounded-full w-full bg-none font-bold   hover:bg-sky-600 duration-300 ">Register</button>
                    <Link to='/login' className="link text-sky-600  text-center ">Have an Account? Now Login</Link>
                </form>
                <div>
                    <img src="https://i.ibb.co/LhFF0xG/20824341-6368592.jpg" />
                </div>
                </div>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Register