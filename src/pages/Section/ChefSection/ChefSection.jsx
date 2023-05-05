import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import ChefsInfo from '../ChefsInfo/ChefsInfo';

const ChefSection = () => {
  const chefsInfo = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Set loading state to true when component is mounted
  }, []);

  useEffect(() => {
    if (chefsInfo) {
      setIsLoading(false); // Set loading state to false when data is loaded
    }
  }, [chefsInfo]);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-sky-600"></div>
        </div>
      ) : (
        <>
          <h2 className="text-center text-3xl text-sky-600 font-bold mt-8">Our All Chefs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center">
            {chefsInfo.map((chefs) => (
              <ChefsInfo key={chefs.id} chefs={chefs}></ChefsInfo>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ChefSection;
