import React from 'react';
import bannerImg from '../../../assets/bannerImg.jpg'

const Banner = () => {
    return (
        <div className=''>
            <div className="hero  md:h-screen " style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: "cover",backgroundPosition: "top center"}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <div className='mx-auto'>
                                <h1 className="mb-5 md:text-5xl lg:text-6xl text-3xl font-bold  ">Welcome to Recipe Routes</h1>
                                <h1 className="mb-5 md:text-2xl lg:text-3xl text-2xl text-green-300  ">Eating a balanced diet and practicing good food hygiene can help you live a healthier life.</h1>
                        </div>
                        <div className=' md:w-4/6 mx-auto'>
                            <p className="mb-5">We provide the best culinary services in Bangladesh. Our world-class chefs use only the freshest ingredients to create delicious and healthy meals that cater to all tastes and preferences.</p>
                        </div>
                        <button className="btn btn-success ">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;