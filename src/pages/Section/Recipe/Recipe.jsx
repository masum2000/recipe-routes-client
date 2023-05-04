import React, { useState } from 'react';
import {  FaBookmark} from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Recipe = () => {
    const { id } = useParams();
    const recipes = useLoaderData();
    console.log(recipes);
    const recipe = recipes.find((r) => r.id == id)
    console.log(recipe.recipe_details);

    return (
        <div>
            <Header></Header>

            <div className="card lg:card-side  container w-10/12 mx-auto py-8">
                <img className='rounded-lg md:w-2/5' src={recipe.picture} alt="Album" />
                <div className="card-body">
                    <h2 className="card-title">{recipe.name}</h2>
                    <p>{recipe.chef_bio}</p>
                    <p><span className='font-bold'>Total Likes:</span> {recipe.likes}</p>
                    <p><span className='font-bold'>Number of Recipes:</span> {recipe.numberOfRecipes}</p>
                    <p><span className='font-bold'>Number of Experience:</span> {recipe.yearsOfExperience} years</p>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 w-10/12 mx-auto py-8'>
            {
                
                recipe.recipe_details.map(recipe =>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='' src={recipe.pic} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{recipe.recipe_name}</h2>
                                    {/* <div className="badge badge-secondary">NEW</div> */}
                                <p className='font-bold'>Ingredients:</p>
                                <li>{recipe.ingredients}</li>
                                <p><span className='font-bold'>Cooking Method: </span>{recipe.cooking_method}</p>
                                {/* <div className="card-actions justify-end">
                                    <div className="badge badge-outline">{recipe.rating}</div>
                                    <div className="badge badge-outline">Products</div>
                                </div> */}
                                <div className='flex justify-between mt-3 items-center'>
                                <div><button  className='bg-sky-200 p-3 rounded-md'>Rating:{recipe.rating}</button></div>
                                <div><button  className=''><FaBookmark className='h-10'></FaBookmark></button></div>
                                
                                </div>
                                
                            </div>
                        </div>
                        </div>
                    
                )
            }

                    </div>


            <Footer></Footer>
        </div>
    );
};

export default Recipe;