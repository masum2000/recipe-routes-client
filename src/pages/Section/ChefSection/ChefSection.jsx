import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChefSection = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    })

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-4'>Our All Chef are Here</h2>
            <div class="flex flex-wrap justify-center">
                {chefs.map((chef) => (
                    <div class="max-w-xs rounded overflow-hidden shadow-lg m-4" key={chef.id}>
                        <img class="w-full h-64 object-cover" src={chef.picture} alt="" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl ">{chef.name}</div>
                        </div>
                        <div class="px-6  pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{chef.yearsOfExperience} years of experience</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{chef.numberOfRecipes} recipes</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{chef.likes} likes</span>
                            <span  class="inline-block bg-success rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><button className=" ">View Recipe</button></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChefSection;