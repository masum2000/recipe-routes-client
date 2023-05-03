import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div className=" w-8/12 mx-auto ">
            <h2 className='font-bold text-3xl text-center py-10'>Blog Page</h2>
            <div className='bg-gray-200 p-8 mb-8 rounded-lg'>
                <p className='font-bold text-xl'>Question: When should we use context API in react js?</p>
                <p><span className='font-bold'>Answer:</span>  The Context API in ReactJS is used for passing data between components without the need to pass props down the component tree manually. Here are some situations when you should consider using the Context API in your ReactJS application:
                1.When you need to share data between components that are not directly related to each other in the component tree. For example, if you have a user authentication component that needs to share its state with multiple components, you can use the Context API to pass the user state down to those components.
                2.When you have deeply nested components that need to access data from a common parent. In this case, passing data through props can become tedious and error-prone. The Context API can simplify this process by allowing you to pass the data down to all child components in one go.</p>
            </div>
            <div className='bg-gray-200 p-8 mb-8 rounded-lg '>
                <p className='font-bold text-xl'>Question: What is custom hook in react js?</p>
                <p><span className='font-bold'>Answer:</span>  Custom hooks are a powerful and flexible feature in ReactJS that can help you extract and reuse logic in your application, making it more modular and easier to A custom hook in ReactJS is a JavaScript function that uses one or more of the built-in React hooks (such as useState, useEffect, useContext, etc.) to implement some functionality that can be reused across multiple components in your application.Custom hooks allow you to encapsulate and reuse logic in your React components, making your code more modular, readable, and easier to maintain. You can think of a custom hook as a way to extract and share common functionality that is not specific to a particular component, but rather applicable to multiple components.maintain.</p>
            </div>
            <div className='bg-gray-200 p-8 mb-8 rounded-lg'>
                <p className='font-bold text-xl'>Question: What is useRef in react js?</p>
                <p><span className='font-bold'>Answer:</span> In ReactJS, useRef is a hook that returns a mutable ref object whose .current property can be set to hold a value. useRef is primarily used to access the DOM nodes or to store mutable data that is not intended to trigger a re-render of the component.</p>
            </div>
            <div className='bg-gray-200 p-8 mb-8 rounded-lg'>
                <p className='font-bold text-xl'>Question: What is useMemo in js?</p>
                <p><span className='font-bold'>Answer:</span> In ReactJS, useMemo is a hook that allows you to memoize a value, which means to cache the result of a computation so that it can be reused if the inputs to the computation have not changed. useMemo is used to optimize the performance of a component by avoiding unnecessary re-computations.</p>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Blog;