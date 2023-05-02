import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const ChefSection = () => {
    const [chefs, setChefs] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, []);

    const handleViewRecipes = () => {
        navigate(`/chefs/${chefs.id}/recipes`);
    };

    return (
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold mb-8">Our All Chefs are Here</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 justify-items-center">
                {chefs.map((chef) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={chef.id}>
                        <img className="w-full h-64 object-cover" src={chef.picture} alt={chef.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl">{chef.name}</div>
                        </div>
                        <div className="px-6 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {chef.yearsOfExperience} years of experience
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {chef.numberOfRecipes} recipes
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {chef.likes} likes
                            </span>
                            <span className="inline-block bg-success rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {/* <Link to={`/chef/${chef.id}`}>View Recipes</Link> */}
                                <button className="btn btn-primary" onClick={handleViewRecipes}>
                                    View Recipes
                                </button>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChefSection;
