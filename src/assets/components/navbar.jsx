import React from 'react';
import { Link } from 'react-router-dom';
import { FaMosque } from 'react-icons/fa'; // Importing an Islamic-themed icon

const Navbar = () => {
    return (
        <>
            {/* Header Section */}
            <header className="bg-gradient-to-r from-green-700 to-blue-900 text-white text-center py-6">
                <div className="flex justify-center items-center space-x-3">
                    <FaMosque className="text-4xl" /> {/* Islamic icon */}
                    <div>
                        <h1 className="text-4xl font-bold">Islamic Knowledge Hub</h1>
                        <p className="mt-2 text-lg">Your source for Hadith and Islamic Law</p>
                    </div>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav className="bg-gray-100 py-4 shadow-md">
                <ul className="flex justify-center space-x-8 text-lg">
                    <li>
                        <Link to="/" className="text-green-700 hover:text-green-900 transition duration-300 hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/hadith" className="text-blue-700 hover:text-blue-900 transition duration-300 hover:underline">
                            Hadith
                        </Link>
                    </li>
                    <li>
                        <Link to="/islamiclaw" className="text-purple-700 hover:text-purple-900 transition duration-300 hover:underline">
                            Islamic Law
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-red-700 hover:text-red-900 transition duration-300 hover:underline">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
