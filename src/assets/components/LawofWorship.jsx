import React from 'react';
import Navbar from './navbar';
import { FaPray, FaMoneyBillWave, FaHiking, FaFrownOpen } from 'react-icons/fa'; // Importing icons

const LawOfWorship = () => {
    return (
        <>
            <Navbar />
            <header className="bg-gradient-to-r from-green-400 to-blue-500 py-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-2">Law of Worship</h1>
                    <p className="text-xl text-gray-200">Understanding the principles of worship in Islam</p>
                </div>
            </header>
            <div className="container mx-auto py-12 px-4">
                <p className="text-lg text-gray-700 text-center mb-8">
                    The Law of Worship in Islam outlines how Muslims should perform acts of worship. It includes prayer, fasting, and pilgrimage, all of which are essential for spiritual growth and building a relationship with Allah.
                </p>

                {/* Key Acts of Worship Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Key Acts of Worship</h2>
                    <p className="text-lg text-gray-600 mb-4">The key acts of worship include:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-4">
                        <li className="flex items-start">
                            <FaPray className="mr-2 text-green-600 text-4xl" />
                            <div>
                                <strong>Salah (Prayer):</strong>
                                <span className="ml-2">The five daily prayers are a direct connection with Allah, performed at specific times and include recitations from the Quran.</span>
                                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mt-2">
                                    <p><strong>Quran:</strong> "And establish prayer and give zakah and obey the Messenger - that you may receive mercy." (Quran 24:56)</p>
                                </blockquote>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaMoneyBillWave className="mr-2 text-blue-600 text-4xl" />
                            <div>
                                <strong>Zakat (Charity):</strong>
                                <span className="ml-2">Giving charity purifies wealth and helps the less fortunate. Zakat is obligatory for all Muslims who meet the necessary criteria and is typically calculated as 2.5% of one’s savings annually.</span>
                                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mt-2">
                                    <p><strong>Quran:</strong> "Take, [O Muhammad], from their wealth a charity by which you purify them and cause them to grow." (Quran 9:103)</p>
                                </blockquote>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaHiking className="mr-2 text-purple-600 text-4xl" />
                            <div>
                                <strong>Hajj (Pilgrimage):</strong>
                                <span className="ml-2">The pilgrimage to Mecca, required at least once in a lifetime for those who are physically and financially able, symbolizes unity and equality among Muslims worldwide.</span>
                                <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600 mt-2">
                                    <p><strong>Quran:</strong> "And proclaim to the people the Hajj. They will come to you on foot and on every lean camel; they will come from every distant pass." (Quran 22:27)</p>
                                </blockquote>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaFrownOpen className="mr-2 text-red-600 text-4xl" />
                            <div>
                                <strong>Sawm (Fasting):</strong>
                                <span className="ml-2">Fasting during Ramadan teaches self-discipline and empathy for the poor. Muslims abstain from food, drink, and other physical needs from dawn until sunset, promoting spiritual reflection and growth.</span>
                                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-600 mt-2">
                                    <p><strong>Quran:</strong> "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous." (Quran 2:183)</p>
                                </blockquote>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Significance of Worship Section */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Significance of Worship</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        The acts of worship in Islam are not just rituals; they are fundamental components of a Muslim's life, aimed at enhancing spirituality, developing a sense of community, and cultivating a strong ethical framework. 
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        <li><strong>Spiritual Growth:</strong> Worship helps believers grow closer to Allah, fostering a deep spiritual connection and personal relationship with Him.</li>
                        <li><strong>Community Bonding:</strong> Many acts of worship, such as prayer and charity, encourage community participation and support, strengthening bonds among Muslims.</li>
                        <li><strong>Moral Development:</strong> Worship instills moral values, encouraging adherents to lead lives of honesty, integrity, and compassion.</li>
                    </ul>
                </div>

                {/* Hadith on Worship Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Islamic Teachings on Worship</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        The importance of worship is emphasized in many Hadiths. For example, the Prophet Muhammad (peace be upon him) said:
                    </p>
                    <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600 mb-4">
                        <p>“The best of deeds is the prayer at its proper time.”</p>
                        <p className="mt-2 text-right">— Sahih Bukhari</p>
                    </blockquote>
                    <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600 mb-4">
                        <p>“Whoever fasts Ramadan out of faith and seeking reward, his previous sins will be forgiven.”</p>
                        <p className="mt-2 text-right">— Sahih Bukhari</p>
                    </blockquote>
                    <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600 mb-4">
                        <p>“The Hajj is Arafah.”</p>
                        <p className="mt-2 text-right">— Sunan Ibn Majah</p>
                    </blockquote>
                </div>

                {/* Call to Action Section */}
                <div className="bg-blue-600 p-6 rounded-lg shadow-md mb-8 text-white text-center">
                    <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
                    <p className="mb-4">Join our community to learn more about Islamic practices and connect with fellow believers.</p>
                    <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-200">
                        Sign Up Now
                    </button>
                </div>

                {/* Conclusion Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
                    <p className="text-lg text-gray-600">
                        The Law of Worship is integral to the Islamic faith, encompassing a range of practices designed to foster a connection with Allah and promote ethical living. Understanding and performing these acts of worship is vital for every Muslim seeking spiritual fulfillment and guidance in life.
                    </p>
                </div>
            </div>
        </>
    );
};

export default LawOfWorship;
