import React from 'react';

const ContactSection = () => {
    return (
        <div>
            <div className="max-w-lg mx-auto py-8">
                <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
                <form  className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name"  onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email"  onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea id="message" name="message"  onChange={(e) => setMessage(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md"></textarea>
                    </div>
                    <button type="submit" className="bg-success content-center px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200">Submit</button>
                </form>
            </div>
        </div>

    );
};

export default ContactSection;