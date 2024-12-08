import React, { useState } from 'react';
import Navbar from './navbar';
import { FaHeart, FaUserAlt, FaGavel, FaChild, FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Importing relevant icons

const FamilyLaw = () => {
    const [faqOpen, setFaqOpen] = useState(false); // State for FAQs

    const toggleFaq = () => {
        setFaqOpen(!faqOpen);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-5xl font-bold text-center mb-8 font-sans">Family Law in Islam</h1>
                <p className="text-lg text-gray-800 text-center mb-8 font-serif">
                    Family law in Islam governs personal matters such as marriage, divorce, inheritance, and the welfare of children, ensuring fairness and justice in family relationships.
                </p>

                {/* Marriage Section */}
                <div className="bg-gray-200 p-8 rounded-lg shadow-lg mb-8 transition-transform duration-300 hover:scale-105">
                    <h2 className="text-4xl font-semibold mb-4 flex items-center">
                        <FaHeart className="mr-3 text-red-600 text-3xl" />
                        Marriage (Nikah)
                    </h2>
                    <p className="text-lg text-gray-700 mb-4 font-serif">
                        In Islam, marriage is considered a contract between a man and a woman, requiring the consent of both parties. It is a sacred bond intended for mutual support, love, and companionship.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li><strong>Consent:</strong> Both the bride and groom must consent to the marriage willingly.</li>
                        <li><strong>Dowry (Mahr):</strong> The groom is required to provide a dowry to the bride, which remains her personal property.</li>
                        <li><strong>Witnesses:</strong> A valid marriage requires two witnesses to ensure transparency and honesty.</li>
                    </ul>
                    <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-600">
                        <p><strong>Hadith:</strong> “There is no marriage except with a Wali (guardian) and two witnesses.” (Sunan Abi Dawood)</p>
                    </blockquote>
                    <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-600">
                        <p><strong>Quran:</strong> “And among His signs is that He created for you from yourselves mates that you may find tranquility in them.” (Quran 30:21)</p>
                    </blockquote>
                </div>

                {/* Divorce Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg mb-8 transition-transform duration-300 hover:scale-105">
                    <h2 className="text-4xl font-semibold mb-4 flex items-center">
                        <FaUserAlt className="mr-3 text-orange-600 text-3xl" />
                        Divorce (Talaq)
                    </h2>
                    <p className="text-lg text-gray-700 mb-4 font-serif">
                        Divorce in Islam is permitted but is seen as a last resort. The process ensures fairness to both parties, especially the woman.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li><strong>Three Talaq:</strong> Divorce is granted after the husband pronounces Talaq three times, with each pronouncement followed by a waiting period (Iddah).</li>
                        <li><strong>Iddah:</strong> The waiting period allows for reconciliation and ensures the woman is not pregnant before the final divorce.</li>
                        <li><strong>Khula:</strong> Women can seek divorce through Khula, where the wife initiates separation.</li>
                    </ul>
                    <blockquote className="border-l-4 border-orange-600 pl-4 italic text-gray-600">
                        <p><strong>Hadith:</strong> “The most disliked of permissible things to Allah is divorce.” (Sunan Ibn Majah)</p>
                    </blockquote>
                    <blockquote className="border-l-4 border-orange-600 pl-4 italic text-gray-600">
                        <p><strong>Quran:</strong> “When you divorce women, and they have fulfilled their term, either retain them with kindness or part with them in a good manner.” (Quran 65:2)</p>
                    </blockquote>
                </div>

                {/* Inheritance Section */}
                <div className="bg-gray-200 p-8 rounded-lg shadow-lg mb-8 transition-transform duration-300 hover:scale-105">
                    <h2 className="text-4xl font-semibold mb-4 flex items-center">
                        <FaGavel className="mr-3 text-blue-600 text-3xl" />
                        Inheritance (Mirath)
                    </h2>
                    <p className="text-lg text-gray-700 mb-4 font-serif">
                        Islamic inheritance laws are designed to ensure equitable distribution of wealth among heirs, promoting fairness while maintaining family harmony.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li><strong>Equal Justice:</strong> Both men and women are entitled to inherit, though their shares may differ based on their roles and responsibilities.</li>
                        <li><strong>Fixed Shares:</strong> The Quran outlines specific shares for heirs like parents, spouses, and children, ensuring a just distribution of wealth.</li>
                        <li><strong>Charity and Will:</strong> Islam encourages leaving a portion of one’s wealth for charitable causes through a will, as long as it does not exceed one-third of the total estate.</li>
                    </ul>
                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                        <p><strong>Hadith:</strong> “It is not permissible for a Muslim to take the wealth of his brother except with his good will.” (Sahih Muslim)</p>
                    </blockquote>
                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                        <p><strong>Quran:</strong> “For men is a share of what they have earned, and for women is a share of what they have earned.” (Quran 4:32)</p>
                    </blockquote>
                </div>

                {/* Child Custody Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg mb-8 transition-transform duration-300 hover:scale-105">
                    <h2 className="text-4xl font-semibold mb-4 flex items-center">
                        <FaChild className="mr-3 text-green-600 text-3xl" />
                        Child Custody
                    </h2>
                    <p className="text-lg text-gray-700 mb-4 font-serif">
                        Child custody decisions in Islam prioritize the well-being and welfare of the child, considering both parents' abilities and the child's needs.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li><strong>Mother's Custody:</strong> In most cases, the mother is granted custody of young children, as Islam recognizes her nurturing role.</li>
                        <li><strong>Father's Role:</strong> While custody may rest with the mother, the father is typically responsible for the financial support and education of the child.</li>
                        <li><strong>Best Interests of the Child:</strong> Decisions are made based on the child’s best interests, including emotional and material well-being.</li>
                    </ul>
                    <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
                        <p><strong>Hadith:</strong> “A woman is the guardian of her husband’s house and is responsible for it.” (Sahih Bukhari)</p>
                    </blockquote>
                    <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
                        <p><strong>Quran:</strong> “And do not kill your children for fear of poverty; We provide for them and for you. Surely killing them is a great sin.” (Quran 17:31)</p>
                    </blockquote>
                </div>

                {/* FAQs Section */}
                <div className="bg-gray-200 p-8 rounded-lg shadow-lg mb-8 transition-transform duration-300 hover:scale-105">
                    <h2 className="text-4xl font-semibold mb-4 flex items-center cursor-pointer" onClick={toggleFaq}>
                        <span className="mr-2">FAQs</span>
                        {faqOpen ? <FaAngleUp className="text-xl" /> : <FaAngleDown className="text-xl" />}
                    </h2>
                    {faqOpen && (
                        <div className="mt-4">
                            <div className="mb-4">
                                <strong className="text-lg">1. What is the role of a Wali in marriage?</strong>
                                <p className="text-gray-600">The Wali (guardian) is a crucial figure in an Islamic marriage, representing the bride's interests and ensuring that her rights are upheld.</p>
                            </div>
                            <div className="mb-4">
                                <strong className="text-lg">2. Can a woman initiate divorce in Islam?</strong>
                                <p className="text-gray-600">Yes, a woman can initiate divorce through the process of Khula, where she can seek separation from her husband.</p>
                            </div>
                            <div className="mb-4">
                                <strong className="text-lg">3. How is inheritance divided among siblings?</strong>
                                <p className="text-gray-600">Inheritance is divided based on fixed shares as outlined in the Quran, considering the roles and responsibilities of each sibling.</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Conclusion Section */}
                <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-semibold mb-4">Conclusion</h2>
                    <p className="text-lg text-gray-700 font-serif">
                        Islamic family law ensures that relationships within the family are governed by justice, respect, and fairness. By adhering to these principles, families can maintain harmony and uphold the rights of all members.
                    </p>
                </div>
            </div>
        </>
    );
};

export default FamilyLaw;
