import React from 'react';

const ContactSection = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2  w-10/12  gap-10 py-16 container mx-auto items-center">
                <div className="grid grid-cols-3  gap-4 ">
                    <img src="https://img.freepik.com/free-photo/top-view-food-ingredients_23-2148834755.jpg?w=1380&t=st=1683092892~exp=1683093492~hmac=8f62c90624dd79ac1b36f85b58c561f678a96e03a81dc14ce34556343cb38255" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                    <img src="https://img.freepik.com/free-photo/top-view-delicious-salad-with-ingredients-dark-surface_140725-75212.jpg?w=1380&t=st=1683092919~exp=1683093519~hmac=a7d8d758c8270bbed227ef4dcbd99f2505a306a999c9732ce8bac8b7452911e1" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                    <img src="https://img.freepik.com/free-photo/top-view-delicious-meat-soup-with-greens-potatoes-dark-desk_140725-76538.jpg?w=1380&t=st=1683092933~exp=1683093533~hmac=0e956c80d6ce2c913495cf06ce19ea5dad0de90d8f33858802e7075355816b70" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                    <img src="https://img.freepik.com/free-photo/top-view-food-ingredients-with-notebook-pumpkin_23-2148834716.jpg?w=740&t=st=1683092953~exp=1683093553~hmac=76e77732b9f86cf533dd1d89231dc692a7adcbdd7e72c62e93c15835cc17bd9d" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                    <img src="https://img.freepik.com/free-photo/top-view-chicken-salad-with-vegetables-dark-grey-table-diet-health-salad_140725-73203.jpg?t=st=1683092882~exp=1683093482~hmac=496e1d832fb93c60c7c756acc0841f67888388c98b6dffa22802f2c78c9eccfb" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                    <img src="https://img.freepik.com/free-photo/top-view-greens-seasonings-with-sliced-onions-notepad-dark-desk-salad-food-meal-vegetable-snack_140725-40291.jpg?w=1380&t=st=1683092986~exp=1683093586~hmac=d2591c05691d5cce8e12dec41e163526a5c7f2db4c24742114438b9e2ff0ba07" alt="placeholder" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                    <h2 className="text-sky-600  text-3xl font-bold mb-8">Contact Us</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea id="message" name="message" className="w-full border border-gray-300 p-2 rounded-md"></textarea>
                        </div>
                        <button className="border-2  border-sky-600 text-black p-3 rounded-lg bg-none font-bold   hover:bg-sky-600 duration-300 hover:text-white ">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ContactSection;