import React from 'react';
import bannerImg from '../../../assets/bannerImg.jpg'
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className=''>
            <div className="hero  md:h-screen " style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: "cover",backgroundPosition: "top center"}}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <div className='mx-auto'>
                                <h1 className="mb-10 md:text-5xl lg:text-6xl text-3xl font-bold  ">Welcome to <span className='text-sky-500'>Recipe Routes</span></h1>
                                <Marquee>
                                <h1 className="mb-10 md:text-2xl lg:text-3xl text-2xl   ">Eating a balanced diet and practicing good food hygiene can help you live a healthier life...</h1>
                                </Marquee>
                        </div>
                        <div className=' md:w-4/6 mx-auto'>
                            <p className="mb-10">We provide the best culinary services in Bangladesh. Our world-class chefs use only the freshest ingredients to create delicious and healthy meals that cater to all tastes and preferences.</p>
                        </div>
                        <button className="border-2 border-sky-600 text-white p-3 rounded-lg bg-none font-bold   hover:bg-sky-600 duration-300 ">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;