import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import ChefsInfo from '../ChefSection/ChefsInfo';


const ChefSection = () => {
    const chefsInfo = useLoaderData();
    console.log(chefsInfo);
    // const [chefs, setChefs] = useState([]);
    
    // const [isLoading, setIsLoading] = useState(true);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     fetch('http://localhost:5000/chefs')
    //         .then(res => res.json())
    //         .then(data => {
    //             setChefs(data)
    //          setIsLoading(false)
    //         })
    //         .catch(error => console.error(error))
    // }, []);

    // const handleViewRecipes = (id) => {
    //     navigate(`/chefs/${id}/recipes`);
    //     // console.log(chefs)
    // };

    return (
        <div>
            <h2 className="text-center text-3xl font-bold mb-8">Our All Chefs </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 justify-items-center">

         {
            chefsInfo.map(chefs =><ChefsInfo key={chefs.id} chefs={chefs}></ChefsInfo>)
         }
            </div>
        </div>
        
//         <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
//             <h2 className="text-center text-3xl font-bold mb-8">Our All Chefs </h2>

           
//            {isLoading ?
//            <div className='flex justify-center items-center '>
//            <div className='animate-spin radial-progress text-sky-700' style={{"--value":90,"--size": "30px", "--thickness": "3px"}}></div>
//        </div>:
//        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 justify-items-center">
//        {chefs.map((chef) => (
//            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={chef.id}>
//                <img className="w-full h-64 object-cover" src={chef.picture} alt={chef.name} />
//                <div className="px-6 py-4">
//                    <div className="font-bold text-xl">{chef.name}</div>
//                </div>
//                <div className="px-6 pb-2">
//                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                        {chef.yearsOfExperience} years of experience
//                    </span>
//                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                        {chef.numberOfRecipes} recipes
//                    </span>
//                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                        {chef.likes} likes
//                    </span>
//                    <span className="inline-block bg-sky-600 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                        <Link to={`/chef/${chef.id}`}>View Recipes</Link>
//                        <button  onClick={()=>handleViewRecipes(chef.id)}> View Recipes </button>
//                    </span>
//                </div>
//            </div>
//        ))}
//    </div>

//            }
           

            
//         </div>
    );
};

export default ChefSection;
