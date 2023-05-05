import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import ChefsInfo from '../ChefsInfo/ChefsInfo';



const ChefSection = () => {
    const chefsInfo = useLoaderData();
   

    return (
        <div className='container mx-auto'>
            <h2 className=" text-center text-3xl text-sky-600 font-bold mt-8">Our All Chefs </h2>
            
            <div className=" grid grid-cols-1  sm:grid-cols-3  justify-items-center">

         {
            chefsInfo.map(chefs =><ChefsInfo key={chefs.id} chefs={chefs}></ChefsInfo>)
         }
            </div>
        </div>
   
    );
};

export default ChefSection;
