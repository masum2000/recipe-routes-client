import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { AuthContext } from '../../../providers/AuthProviders';
import Header from '../../Section/Header/Header';
import Footer from '../../Section/Footer/Footer';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const [user, setUser] = useState(null);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                // toast.success('Login successful');
                setUser(loggedUser);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            });
    };


    // googleSignIn start
    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        // console.log('hello from google');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    //googleSignIn end

    //github SignIn start
    const handleGithubSignIn = event => {
        event.preventDefault();
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    //github SignIn End




    return (
        <div>
            <Header></Header>
            <ToastContainer></ToastContainer>
            <div className="container w-10/12 mx-auto py-8">
                <div className="grid grid-cols-1   md:grid-cols-2  items-center">
                    <Form onSubmit={handleLogin}>
                    <div className="  ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className=" w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span  className="label-text font-bold">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                        <label className="label font-bold mt-3">
                                            <a href="#" className="label-text-alt ">Forgot password? <span className='text-sm underline text-sky-600 font-bold'>Reset.</span></a>
                                        </label>
                                        <label className="label font-bold ">
                                            <Link to="/register">Are You New?  <a href="#" className="text-sm underline text-sky-600 font-bold"> Register Now.</a></Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                    <button onClick={() => {
                                            toast.success('login successfully!');
                                        }} className="border-2 border-sky-600 text-black p-3 rounded-lg bg-none font-bold   hover:bg-sky-600 duration-300 ">Login</button>
                                    </div>
                                    
                                    <div className='my-4 text-center'>
                                    <p className=' text-sky-600 font-bold text-center mb-3'>Also Connect With</p>
                                        <button onClick={handleGoogleSignIn} className='px-4'>
                                            <img className='w-7' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                                        </button>
                                        <button onClick={handleGithubSignIn} className='px-4'>
                                            <img className='w-7' src="https://i.ibb.co/VxKN3Mg/github.png" alt="" />

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Form>
                    <div>
                        <img src="https://i.ibb.co/Wn7TCsF/20824342-6343845.jpg" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;