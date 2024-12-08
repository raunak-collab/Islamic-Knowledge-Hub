import React, { useState } from 'react';
import { FaGavel, FaBalanceScale, FaShieldAlt, FaCaretDown, FaCaretUp } from 'react-icons/fa'; // Importing icons
import Navbar from './navbar';

const CriminalLaw = () => {
    const [showHudud, setShowHudud] = useState(false);
    const [showQisas, setShowQisas] = useState(false);
    const [showTazir, setShowTazir] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const keyConcepts = [
        {
            title: 'Hudud Crimes',
            content: (
                <>
                    Serious crimes with fixed punishments (e.g., theft, adultery). <br />
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mt-2">
                        <p><strong>Quran:</strong> "As for the thief, the male and the female, amputate their hands in recompense for what they earned as a deterrent [punishment] from Allah." (Quran 5:38)</p>
                    </blockquote>
                </>
            ),
            show: showHudud,
            toggle: () => setShowHudud(!showHudud),
        },
        {
            title: 'Qisas',
            content: (
                <>
                    Retribution, where the victim can seek justice or forgive. <br />
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mt-2">
                        <p><strong>Quran:</strong> "And We ordained for them therein a life for a life, an eye for an eye, a nose for a nose, an ear for an ear, a tooth for a tooth, and for wounds is legal retribution." (Quran 2:178)</p>
                    </blockquote>
                </>
            ),
            show: showQisas,
            toggle: () => setShowQisas(!showQisas),
        },
        {
            title: 'Tazir',
            content: (
                <>
                    Discretionary punishment for less serious offenses, decided by the judge. <br />
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mt-2">
                        <p><strong>Hadith:</strong> "The ruler is a shield for the people. He fights in their front and is protected by them." (Sahih Muslim)</p>
                    </blockquote>
                </>
            ),
            show: showTazir,
            toggle: () => setShowTazir(!showTazir),
        },
    ];

    return (
        <>
            <Navbar />
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold text-center mb-6">Islamic Criminal Law</h1>
                <p className="text-lg text-gray-700 text-center mb-8">
                    Islamic Criminal Law ensures justice and aims to protect society. It emphasizes fairness, rehabilitation, and mercy, focusing on the victim's rights while giving the offender a chance for repentance.
                </p>

                {/* Search Functionality */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search key concepts..."
                        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Key Concepts Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4 flex items-center">
                        <FaGavel className="mr-2 text-blue-600" /> Key Concepts in Criminal Law
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">The key concepts include:</p>
                    {keyConcepts
                        .filter(concept => 
                            concept.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            concept.content.props.children.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((concept, index) => (
                            <div key={index} className="mb-4">
                                <div onClick={concept.toggle} className="flex justify-between cursor-pointer transition duration-200 hover:bg-gray-200 rounded p-2">
                                    <h3 className="text-lg font-semibold text-gray-700">{concept.title}</h3>
                                    {concept.show ? <FaCaretUp className="text-blue-600" /> : <FaCaretDown className="text-blue-600" />}
                                </div>
                                {concept.show && (
                                    <div className="transition-all duration-300 overflow-hidden">
                                        <p className="text-gray-600 mb-2">{concept.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>

                {/* Principles of Justice Section */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4 flex items-center">
                        <FaBalanceScale className="mr-2 text-green-600" /> Principles of Justice
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Islamic Criminal Law is built upon the following principles:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        <li><strong>Presumption of Innocence:</strong> Every accused is presumed innocent until proven guilty.</li>
                        <li><strong>Due Process:</strong> Fair trial procedures must be followed to ensure justice.</li>
                        <li><strong>Mercy and Repentance:</strong> The law encourages forgiveness and rehabilitation rather than mere punishment.</li>
                    </ul>
                    <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600 mb-4">
                        <p>“O you who have believed, be persistently standing firm in justice, witnesses in justice, and do not let the hatred of a people prevent you from being just.”</p>
                        <p className="mt-2 text-right">— Quran 5:8</p>
                    </blockquote>
                </div>

                {/* Famous Islamic Quotes Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4 flex items-center">
                        <FaShieldAlt className="mr-2 text-purple-600" /> Islamic Teachings
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Important teachings from the Quran highlight the importance of justice:
                    </p>
                    <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600 mb-4">
                        <p>“Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice.”</p>
                        <p className="mt-2 text-right">— Quran 4:58</p>
                    </blockquote>
                    <p className="text-lg text-gray-600 mb-4">
                        Another profound reminder:
                    </p>
                    <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600 mb-4">
                        <p>“The just ruler will be seated upon pulpits of light.”</p>
                        <p className="mt-2 text-right">— Sahih Muslim</p>
                    </blockquote>
                </div>

                {/* Conclusion Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
                    <p className="text-lg text-gray-600">
                        Islamic Criminal Law serves as a framework to ensure justice and societal harmony. By balancing the rights of victims and offenders, it seeks to maintain moral and ethical standards in the community.
                    </p>
                </div>
            </div>
        </>
    );
};

export default CriminalLaw;
