import React from 'react';


const AboutSection = () => {
    return (
        <div>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className=''>
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-lg mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices nunc vitae nibh hendrerit mollis. Aliquam fringilla mauris ac nisi bibendum malesuada. In euismod erat vel lacus viverra laoreet. Nullam auctor leo vel libero malesuada pretium.
                        </p>
                        <button className="bg-success px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200">Learn More</button>
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