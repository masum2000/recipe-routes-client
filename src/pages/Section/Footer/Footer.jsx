import React from 'react';

const Footer = () => {
    return ( 
        <div className='bg-sky-700  bottom-0 left-0 text-center md:text-start text-gray-600'>
            <div className=" w-full md:w-9/12 mx-auto divide-y">
               <div className="grid md:grid-cols-3 mt-10 ">
                      <div className="col-span-1  text-gray-300 py-10 my-10">
                          <h1 className='font-bold text-2xl'>Recipe Routes</h1>
                           <p className='mt-5 md:w-2/4'>We provide the best culinary services in Bangladesh. Our world-class chefs use only the freshest ingredients to create delicious and healthy meals that cater to all tastes and preferences.</p>
                          <div>
                           
                           </div>
                      </div>
                      <div className="grid md:grid-cols-4 sm:grid-cols-2 col-span-2 text-gray-300 gap-6 py-10  md:my-10">
                          <div className="space-y-2">
                            <p className='text-2xl font-bold'>Company</p>
                            <p>About Us</p>
                            <p>Work</p>
                            <p>Latest News</p>
                            <p>Recipes</p>
                          </div>
                          <div className="space-y-2">
                             <p className='text-2xl font-bold'>Product</p>
                             <p>Prototype</p>
                             <p>Plans & Pricing</p>
                             <p>Customers</p>
                             <p>Integrations</p>
                          </div>
                          <div className="space-y-2">
                            <p className='text-2xl font-bold'>Support</p>
                            <p>Help Desk</p>
                            <p>Sales</p>
                            <p>Become a Partner</p>
                            <p>Developers</p>
                          </div>
                          <div className="space-y-2 ">
                            <p className='text-2xl font-bold'>Contact</p>
                            <p>Mirpur-10,Dhaka</p>
                            <p>+880-1780999575</p>
                            <p></p>
                            <p></p>
                          </div>
                      </div>
              </div>
              <div className=''></div>
              <div className=' md:flex text-white justify-between py-5 '>
                
                <div>© 2023 RecipeRoutes. All Rights Reserved  </div>
                <div>Powered by RecipeRoutes</div>
              </div>
           </div>
        </div>
        
    );
};

export default Footer;