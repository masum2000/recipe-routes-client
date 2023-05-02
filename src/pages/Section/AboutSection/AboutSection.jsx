import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
                <div className='d-flex'>
                    <div>
                        <p className="text-lg mb-8">We are a group of passionate foodies who love to cook, bake, and experiment in the kitchen. Our mission is to share our love of food with the world and inspire others to try new recipes and techniques.</p>
                        <p className="text-lg mb-8">Our website features a variety of recipes from around the world, as well as tips and tricks for cooking and baking. We believe that food brings people together and that everyone should have access to delicious and healthy meals.</p>
                        <p className="text-lg mb-8">Thank you for visiting our website and we hope you find inspiration and joy in cooking!</p>
                    </div>
                    <div>
                        <img src='https://img.freepik.com/free-photo/chef-holding-vegetables_1368-11929.jpg?w=996&t=st=1683052259~exp=1683052859~hmac=3fa4fad89da5d1f4702c6550468bdbb3ff251b7ef15608d3b10796b36d4cfeca'></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;