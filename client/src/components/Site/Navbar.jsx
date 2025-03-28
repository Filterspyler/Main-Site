import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-16 sm:h-24 md:h-28 lg:h-32
                        flex items-center justify-center z-50 bg-white shadow-md">

            <div className="w-full max-w-screen-md flex items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src="/img/filterspyler-logo.png" className="h-10 sm:h-14 md:h-16 lg:h-20" alt="Logo" />
                    <Link to="/" className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        FILTERSPYLER
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 text-md">
                    <Link to="/" className="hover:text-gray-300 transition">Home</Link>
                    <Link to="/products" className="hover:text-gray-300 transition">Products</Link>
                    <Link to="/purchase" className="hover:text-gray-300 transition">Purchase</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleDropdown} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 sm:top-24 left-0 w-full bg-white shadow-md">
                    <div className="flex flex-col">
                        <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Home</Link>
                        <Link to="/products" className="block px-4 py-2 hover:bg-gray-200">Products</Link>
                        <Link to="/purchase" className="block px-4 py-2 hover:bg-gray-200">Purchase</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
