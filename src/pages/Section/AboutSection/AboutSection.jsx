import React from 'react';


const AboutSection = () => {
    return (
        <div>
            <div className="container w-10/12 mx-auto py-8">
                <div className="grid grid-cols-1   md:grid-cols-2 gap-8 items-center">
                    <div className=''>
                        <h2 className="text-sky-600  text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-lg mb-4">
                        "Our company was founded with the mission of providing high-quality, healthy meals to people on-the-go. We believe that eating well shouldn't have to be a hassle, and that's why we've dedicated ourselves to creating delicious meals that are both convenient and nutritious. Our team of chefs use only the freshest ingredients, and our meals are carefully crafted to meet a variety of dietary needs and preferences. Whether you're looking for a quick lunch or a full week's worth of meals, we've got you covered. We're passionate about what we do, and we're excited to share our love of healthy eating with you."
                        </p>
                        <button className="border-2 border-sky-600 text-black p-3 rounded-lg bg-none font-bold   hover:bg-sky-600 duration-300 hover:text-white ">More Details</button>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/chef-holding-vegetables_1368-11929.jpg?w=996&t=st=1683052259~exp=1683052859~hmac=3fa4fad89da5d1f4702c6550468bdbb3ff251b7ef15608d3b10796b36d4cfeca" alt="About Us" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;