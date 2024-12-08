import React from 'react';
import Navbar from './navbar';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
                <p className="text-lg text-gray-700 text-center mb-8">
                    Welcome to the Islamic Knowledge Hub, your trusted source for authentic Hadith and comprehensive Islamic law.
                </p>

                {/* Mission Statement */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600">
                        Our mission is to provide a platform where individuals can access reliable Islamic knowledge, fostering a deeper understanding of the teachings of Islam. We aim to create a community of learners who seek guidance and wisdom from authentic sources.
                    </p>
                </div>

                {/* Vision Statement */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-600">
                        We envision a world where everyone has access to authentic Islamic teachings, empowering individuals to live fulfilling lives in accordance with the principles of Islam. Our goal is to be a leading resource for learning and understanding Islamic law and Hadith.
                    </p>
                </div>

                {/* Resources Available */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Resources Available</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Our platform offers a wide range of resources including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Comprehensive collections of Hadith.</li>
                        <li>In-depth articles on Islamic law (Fiqh).</li>
                        <li>Interactive quizzes to test your knowledge.</li>
                        <li>Community forums for discussion and sharing knowledge.</li>
                    </ul>
                </div>

                {/* Team Information */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Our team consists of scholars, educators, and tech enthusiasts committed to promoting Islamic knowledge. We work collaboratively to ensure that our content is accurate, relevant, and accessible to everyone.
                    </p>

                    {/* Team Members */}
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <li className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold">Dr. Aisha Khan</h3>
                            <p className="text-gray-600">Islamic Scholar and Content Creator</p>
                        </li>
                        <li className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold">Mohammed Ali</h3>
                            <p className="text-gray-600">Web Developer and Designer</p>
                        </li>
                        <li className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold">Fatima Zahra</h3>
                            <p className="text-gray-600">Community Outreach Coordinator</p>
                        </li>
                    </ul>
                </div>

                {/* User Testimonials */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold mb-4">What Our Users Say</h2>
                    <div className="space-y-4">
                        <blockquote className="text-lg text-gray-600 italic">
                            "Islamic Knowledge Hub has transformed the way I learn about Islam. The resources are incredibly helpful!" - Amina S.
                        </blockquote>
                        <blockquote className="text-lg text-gray-600 italic">
                            "I appreciate the authentic content and the community aspect. It's great to connect with others who are also learning." - Hassan T.
                        </blockquote>
                        <blockquote className="text-lg text-gray-600 italic">
                            "The platform is user-friendly, and the information is always up-to-date. Highly recommend!" - Zainab M.
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
