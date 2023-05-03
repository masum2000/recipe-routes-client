import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='flex flex-col items-center justify-center h-screen p-16 bg-white text-gray-900'>
            <img className='md:w-2/6' src='https://i.ibb.co/SVhHsLm/1588614-222468-P1-PZG2-870.jpg' />
            <Link
                to='/'
                className="border-2 border-sky-600 text-black mt-6 p-3 rounded-lg bg-none font-bold hover:text-white  hover:bg-sky-600 duration-300 "
            >
                Back to Home
            </Link>
        </section>
    );
};

export default ErrorPage;