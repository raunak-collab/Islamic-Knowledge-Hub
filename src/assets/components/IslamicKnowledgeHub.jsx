import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

const IslamicKnowledgeHub = () => {
    const navigate = useNavigate();
    
    // Example Hadiths
    const hadiths = [
        { arabic: "إنما الأعمال بالنيات", translation: "Actions are judged by intentions." },
        { arabic: "الدين النصيحة", translation: "Religion is sincerity." },
        { arabic: "من حسن إسلام المرء تركه ما لا يعنيه", translation: "Part of the excellence of one’s Islam is leaving what does not concern him." }
    ];

    // State to hold the current Hadith
    const [currentHadith, setCurrentHadith] = useState(hadiths[0]);
    const [bookmarkedHadith, setBookmarkedHadith] = useState([]);

    const handleGetStarted = () => {
        navigate('/hadith');
    };

    // Function to load a new random Hadith
    const loadNewHadith = () => {
        const randomIndex = Math.floor(Math.random() * hadiths.length);
        setCurrentHadith(hadiths[randomIndex]);
    };

    // Function to bookmark a Hadith
    const bookmarkHadith = () => {
        setBookmarkedHadith([...bookmarkedHadith, currentHadith]);
    };

    // Function to share Hadith
    const shareHadith = () => {
        const hadithText = `${currentHadith.arabic} - ${currentHadith.translation}`;
        navigator.clipboard.writeText(hadithText).then(() => {
            alert("Hadith copied to clipboard!");
        });
    };

    return (
        <>
            <Helmet>
                <title>Authentic Hadith & Islamic Law | PureIslamicKnowledge</title>
                <meta
                    name="description"
                    content="Discover authentic Hadith collections and deep insights into Islamic law (Fiqh). Learn more about the core teachings of Islam."
                />
                <meta
                    name="keywords"
                    content="Hadith, Islamic Law, Fiqh, Sharia, Prophet Muhammad, Quran, Sunnah"
                />
                <meta property="og:title" content="Explore Hadith and Islamic Law" />
                <meta
                    property="og:description"
                    content="Access authentic Hadith collections and comprehensive Islamic law resources on Pure Islamic Knowledge. Enrich your understanding of Islam with reliable teachings."
                />
                <meta property="og:image" content="URL_to_your_image.jpg" alt="Islamic Knowledge Hub" />
                <meta property="og:url" content="https://www.yourwebsite.com" />
            </Helmet>

            <div>
                <Navbar />

                {/* Hero Section */}
                <div className="hero-section bg-gradient-to-r from-green-800 via-teal-700 to-blue-900 text-white text-center py-16">
                    <h2 className="text-5xl font-extrabold">Welcome to Islamic Knowledge Hub</h2>
                    <p className="mt-4 text-lg">Explore Hadith and Islamic Law with ease and authenticity.</p>
                    <button
                        className="bg-yellow-500 text-white py-3 px-8 mt-6 rounded-full hover:bg-yellow-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        onClick={handleGetStarted}
                        aria-label="Get Started Button"
                    >
                        Get Started
                    </button>
                </div>

                {/* Main Content Section */}
                <div className="container mx-auto py-12 px-4">
                    {/* Hadith Section */}
                    <div id="hadith" className="bg-gray-100 p-8 rounded-lg shadow-md border-l-4 border-green-600 mb-12">
                        <h2 className="text-4xl font-bold mb-6 text-green-700">Hadith of the Day</h2>
                        <p className="text-xl italic"><strong>Arabic Text:</strong> {currentHadith.arabic}</p>
                        <p className="text-lg mt-2"><strong>Translation:</strong> {currentHadith.translation}</p>
                        <div className="mt-6">
                            <button
                                onClick={loadNewHadith}
                                className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                                aria-label="Load New Hadith"
                            >
                                Load New Hadith
                            </button>
                            <button
                                onClick={bookmarkHadith}
                                className="ml-4 bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                aria-label="Bookmark Hadith"
                            >
                                Bookmark Hadith
                            </button>
                            <button
                                onClick={shareHadith}
                                className="ml-4 bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                aria-label="Share Hadith"
                            >
                                Share Hadith
                            </button>
                        </div>
                    </div>

                    {/* Bookmarked Hadiths Section */}
                    {bookmarkedHadith.length > 0 && (
                        <div id="bookmarked-hadiths" className="bg-gray-100 p-8 rounded-lg shadow-md border-l-4 border-yellow-600 mb-12">
                            <h2 className="text-4xl font-bold mb-6 text-yellow-700">Bookmarked Hadiths</h2>
                            <ul className="list-disc list-inside">
                                {bookmarkedHadith.map((hadith, index) => (
                                    <li key={index}>
                                        <strong>{hadith.arabic}</strong> - {hadith.translation}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Islamic Law Section with Lazy Loading */}
                    <div id="law" className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600 mb-12">
                        <h2 className="text-4xl font-bold mb-6 text-blue-700">Islamic Law</h2>
                        <p className="text-lg">Learn about the key principles of Islamic law and how they apply to daily life.</p>
                        <ul className="list-disc list-inside mt-6 space-y-3">
                            <li><a href="/familylaw" className="text-blue-600 hover:underline" aria-label="Family Law">Family Law</a></li>
                            <li><a href="/businesslaw" className="text-blue-600 hover:underline" aria-label="Business Law">Business Law</a></li>
                            <li><a href="/criminallaw" className="text-blue-600 hover:underline" aria-label="Criminal Law">Criminal Law</a></li>
                            <li><a href="/lawofworship" className="text-blue-600 hover:underline" aria-label="Law of Worship">Law of Worship</a></li>
                        </ul>
                    </div>

                    {/* Sunnah Section */}
                    <div id="sunnah" className="bg-gray-100 p-8 rounded-lg shadow-md border-l-4 border-purple-600 mb-12">
                        <h2 className="text-4xl font-bold mb-6 text-purple-700">Sunnah of the Prophet</h2>
                        <p className="text-lg">Explore the practices and traditions of Prophet Muhammad (ﷺ).</p>
                        <ul className="list-disc list-inside mt-6 space-y-3">
                            <li><strong>Salat (صلاة)</strong>: The daily prayers, a fundamental practice in Islam.</li>
                            <li><strong>Siyam (صيام)</strong>: Fasting during the month of Ramadan, an essential act of worship.</li>
                            <li><strong>Zakat (زكاة)</strong>: Giving to charity, which purifies wealth and helps the needy.</li>
                            <li><strong>Hajj (حج)</strong>: The pilgrimage to Mecca, required once in a lifetime for those who are able.</li>
                            <li><strong>Adab (أدب)</strong>: Good manners and etiquette, emphasized in the Prophet's teachings.</li>
                        </ul>
                    </div>

                    {/* Newsletter Signup Section */}
                    <div id="newsletter" className="bg-blue-100 p-8 rounded-lg shadow-md border-l-4 border-blue-600 mb-12">
                        <h2 className="text-4xl font-bold mb-6 text-blue-700">Stay Updated</h2>
                        <p className="text-lg">Sign up for our newsletter to receive updates on new Hadith, articles, and more.</p>
                        <form className="mt-6">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-3 rounded-md border border-gray-400 w-2/3"
                                aria-label="Email Address"
                            />
                            <button className="bg-blue-700 text-white py-2 px-6 rounded ml-4 hover:bg-blue-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label="Subscribe">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <footer className="footer bg-gray-900 text-white text-center py-6 mt-12">
                    <p>&copy; 2024 Islamic Knowledge Hub | <a href="#" className="text-yellow-400 hover:underline" aria-label="Contact Us">Contact Us</a> | <a href="#" className="text-yellow-400 hover:underline" aria-label="Privacy Policy">Privacy Policy</a> | <a href="#" className="text-yellow-400 hover:underline" aria-label="Terms of Service">Terms of Service</a></p>
                </footer>
            </div>
        </>
    );
};

export default IslamicKnowledgeHub;
