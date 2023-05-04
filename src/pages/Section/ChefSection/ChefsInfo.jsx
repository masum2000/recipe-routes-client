import React from 'react';
import { Link } from 'react-router-dom';

const chefsInfo = ({chefs}) => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">       
           <div className="max-w-sm rounded overflow-hidden shadow-lg" key={chefs.id}>
               <img className="w-full h-64 object-cover" src={chefs.picture} alt={chefs.name} />
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
                       <Link to={`/${chefs.id}`}>
                       <button> View Recipes </button>
                       </Link>
                   </span>
               </div>
           </div>
        </div>
        </div>
    
    );
};

export default chefsInfo;