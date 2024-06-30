import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
    return (
        <section className="bg-no-repeat bg-cover overflow-hidden bg-[#1F0C3A] max-h-full pt-1">
            <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-xl text-center">
                    <motion.img 
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="404" 
                        className="w-64 mx-auto" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    />
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                    <p className="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to="/" className="btn btn-lg p-4">Back to Homepage</Link>
                </div>   
            </div>
        </section>
    );
};

export default Error;