import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div ref={ref} className=" w-8/12 mx-auto ">
                <h2 className='font-bold text-3xl text-center py-10'>Blog Page</h2>
                <div className='bg-gray-200 p-8 mb-8 rounded-lg'>
                    <p className='font-bold text-xl'>Question: Tell us the differences between uncontrolled and controlled components.?</p>
                    <p><span className='font-bold'>Answer:</span>  Controlled components in React are components whose state and behavior are controlled by the parent component. To change their state and behavior, these components rely on props sent down from the parent component. Uncontrolled components are those that manage their own state on their own.</p>
                </div>
                <div className='bg-gray-200 p-8 mb-8 rounded-lg '>
                    <p className='font-bold text-xl'>Question: How to validate React props using PropTypes?</p>
                    <p><span className='font-bold'>Answer:</span>  In React, PropTypes is a built-in type checking feature that enables developers to validate props passed to components. It helps to catch errors early and make components more reliable.(i)Install PropTypes, (ii)Import PropTypes, (iii)Define PropTypes, (iv)View PropTypes error messages. </p>
                </div>
                <div className='bg-gray-200 p-8 mb-8 rounded-lg'>
                    <p className='font-bold text-xl'>Question: Tell us the difference between nodejs and express js.?</p>
                    <p><span className='font-bold'>Answer:</span> Node.js and Express.js are both used in building server-side applications using JavaScript. However, there are some differences between them. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is designed to help developers create scalable network applications using event-driven I/O. It allows developers to use JavaScript on the server-side, which enables them to write the server-side code using the same language as the client-side code. Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools for building web and mobile applications. Express.js simplifies the development process by providing developers with tools to handle HTTP requests and responses, set up middleware functions, and manage routes.</p>
                </div>
                <div className='bg-gray-200 p-8 mb-8 rounded-lg'>
                    <p className='font-bold text-xl'>Question: What is a custom hook, and why will you create a custom hook?</p>
                    <p><span className='font-bold'>Answer:</span> A custom hook in React is a JavaScript function that provides reusable functionality in functional components by utilizing built-in hooks and/or additional custom hooks. Custom hooks can be written to abstract away sophisticated logic, state management, or any other repetitive code patterns shared by components.
                        Developers may use custom hooks to encapsulate functionality into reusable, composable modules that can be readily shared across various components. This can aid in code organization by reducing repetition and making components more declarative and simpler to read.
                    </p>
                </div>
                <div>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className="bg-white hover:bg-slate-600 hover:text-white rounded-xl font-semibold text-red-600 py-3 px-5 text-xl" onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;