import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefsInfo = ({chefs}) => {
    const navigate = useNavigate();

    const handleViewRecipe = ()=>{
        navigate(`/${chefs.id}`)
    }
    return (
        <div>
             <div>
            <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">       
           <div className="max-w-sm rounded overflow-hidden shadow-lg" key={chefs.id}>
            <LazyLoad height={300} ><img className="w-full h-64 object-cover" src={chefs.picture} alt={chefs.name} /></LazyLoad>
               
               <div className="px-6 py-4">
                   <div className="font-bold text-xl">{chefs.name}</div>
               </div>
               <div className="px-6 pb-2">
                   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                       {chefs.yearsOfExperience} years of experience
                   </span>
                   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                       {chefs.numberOfRecipes} recipes
                   </span>
                   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                       {chefs.likes} likes
                   </span>
                   <span className="inline-block bg-sky-600 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                       {/* <Link to={}>
                       
                       </Link> */}
                       <button onClick={handleViewRecipe}> View Recipes </button>
                   </span>
               </div>
           </div>
        </div>
        </div>
        </div>
    );
};

export default ChefsInfo;
