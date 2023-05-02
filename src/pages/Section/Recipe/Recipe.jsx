// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';

const Recipe = () => {

    const [recipes, setRecipes] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch('http://localhost:5000/recipe');
                const data = await response.json();
                const filteredRecipe = data.filter((recipe) => recipe.chef_id === id);
                setRecipes(filteredRecipe);
            }
            catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
        fetchRecipe();
    }, [id])

    return (
        <div>
            <Header></Header>
            <div className='recipe-container'>
                <div className='recipe-header'>
                    {
                        recipes.map((recipe) => (
                            <div key={recipe._id} className=''>
                                <h1 className='recipe-title'>{recipe.chef_name}</h1>
                                <p className='recipe-bio'>{recipe.chef_bio}</p>
                                <img className=' profile-picture' src={recipe.chef_picture} alt="" />

                            </div>
                        ))
                    }
                </div>
                <div className='divider'></div>
                <div className='recipes'>
                   <h1>Recipes</h1>
                   <div className='recipe-card-grid'>
                    {recipes.map((recipe) => (
                        <div 
                        key={recipe._id} className='recipe-card'>
                          <div className='max-w-xs rounded overflow-hidden shadow-lg m-4'>
                            <img className='w-full h-48 object-cover' src={recipe.pic} alt=''/>
                            <div className='px-6 py-4'>
                              <div className='font-bold text-xl mb-2'>{recipe.name}</div>
                              <p className='text-gray-700 text-base'>{recipe.description}</p>
                            </div>
                            <div className='px-6 pt-4 pb-2'>
                              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>{recipe.prep_time} prep time</span>
                              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>{recipe.cook_time} cook time</span>
                            </div>
                          </div>
                        </div>
                    ))}
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
