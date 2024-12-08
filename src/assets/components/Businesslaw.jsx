import React from 'react';
import { FaBalanceScale, FaHandshake, FaPercent, FaFileContract, FaLock, FaHandHoldingHeart, FaChartLine } from 'react-icons/fa'; // Importing React Icons
import Navbar from './navbar';
import './styles.css'; // Import your CSS file for custom styles

const BusinessLaw = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-5xl font-bold text-center mb-6 text-blue-700 arabic-font">Islamic Business Law</h1>
                <p className="text-lg text-gray-700 text-center mb-8">
                    Business Law in Islam ensures that business transactions are conducted in a fair, ethical, and responsible manner. It encourages honesty, transparency, and justice while discouraging exploitation, fraud, and interest (riba). The ultimate goal is to foster an ethical business environment that benefits both individuals and society.
                </p>

                {/* Typography Image */}
                <div className="mb-8 text-center">
                    <img src="/img/t-1.jpg" alt="Islamic Typography" className="mx-auto w-3/4 h-auto rounded-lg shadow-md" />
                </div>

                {/* Key Concepts */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-4xl font-semibold mb-4 text-center text-blue-600 arabic-font">Key Concepts in Business Law</h2>
                    <p className="text-lg text-gray-600 mb-4 text-center">
                        The foundational principles of Islamic Business Law include:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaBalanceScale className="w-16 h-16 mb-4 text-blue-300" />
                            <p className="text-lg text-gray-600"><strong>Honesty:</strong> Being truthful in all transactions, avoiding deceit and fraud.</p>
                            <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600">
                                <p><strong>Hadith:</strong> "The Prophet (peace be upon him) said, 'The truthful merchant will be with the Prophets, the truthful, and the martyrs.'" (Sunan Ibn Majah)</p>
                            </blockquote>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaHandshake className="w-16 h-16 mb-4 text-blue-300" />
                            <p className="text-lg text-gray-600"><strong>Fair Trade:</strong> Prohibiting exploitative practices and ensuring fairness to both parties in business deals.</p>
                            <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600">
                                <p><strong>Quran:</strong> "And give full measure and weight in justice." (Quran 6:152)</p>
                            </blockquote>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaPercent className="w-16 h-16 mb-4 text-blue-300" />
                            <p className="text-lg text-gray-600"><strong>Prohibition of Riba:</strong> Interest (riba) is strictly forbidden to prevent exploitation and ensure economic justice.</p>
                            <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600">
                                <p><strong>Quran:</strong> "Those who consume interest cannot stand on the Day of Resurrection except as one stands who is being beaten by Satan into insanity." (Quran 2:275)</p>
                            </blockquote>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaFileContract className="w-16 h-16 mb-4 text-blue-300" />
                            <p className="text-lg text-gray-600"><strong>Contracts:</strong> All business transactions must be formalized with clear, fair, and mutual consent of all involved parties.</p>
                            <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600">
                                <p><strong>Quran:</strong> "O you who have believed, fulfill [all] contracts." (Quran 5:1)</p>
                            </blockquote>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaLock className="w-16 h-16 mb-4 text-blue-300" />
                            <p className="text-lg text-gray-600"><strong>Trust (Amanah):</strong> Business dealings are based on trust, where fulfilling one's promises is a religious obligation.</p>
                            <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600">
                                <p><strong>Hadith:</strong> "When a man tells something and he intends it to be a trust, then it is a trust." (Sunan Abi Dawood)</p>
                            </blockquote>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaChartLine className="w-16 h-16 mb-4 text-blue-300" />
                            <p className="text-lg text-gray-600"><strong>Prohibition of Gharar (Uncertainty):</strong> Transactions should be free from excessive risk and uncertainty. Transparency is key in all agreements.</p>
                            <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600">
                                <p><strong>Quran:</strong> "And do not eat up your wealth among yourselves unjustly or send it [in bribery] to the rulers." (Quran 2:188)</p>
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Ethical Financial Transactions */}
                <div className="bg-gray-50 shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-4xl font-semibold mb-4 text-center text-blue-600 arabic-font">Ethical Financial Transactions</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Islamic finance is centered on ethical investments and social responsibility. Some core financial practices include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        <li><strong>Profit and Loss Sharing (Mudarabah and Musharakah):</strong> Profits and losses are shared equitably between partners, promoting risk-sharing rather than risk-transfer.</li>
                        <li><strong>Asset-backed Financing:</strong> Every transaction must be tied to a tangible asset, ensuring finance is used for productive purposes and not speculative gains.</li>
                        <li><strong>Prohibition of Speculation (Maisir):</strong> Islamic law prohibits gambling and speculative activities, as they lead to uncertainty and potential harm.</li>
                    </ul>
                    <p className="text-lg text-gray-600 mb-4">
                        These principles ensure that wealth circulates within the economy fairly and productively, reducing inequality and preventing financial exploitation.
                    </p>
                </div>

                {/* Social Responsibility in Business */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-4xl font-semibold mb-4 text-center text-blue-600 arabic-font">Social Responsibility in Business</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Businesses are not only responsible for making profits but also for contributing to the well-being of society. In Islam, this is emphasized through the concepts of charity (Zakat) and social justice:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        <li><strong>Zakat (Charity):</strong> Business owners are required to give a portion of their wealth (2.5%) to the poor and needy, ensuring wealth redistribution.</li>
                        <li><strong>Welfare of Employees:</strong> Employers must treat their employees with dignity, providing fair wages, healthy working conditions, and timely payments.</li>
                        <li><strong>Environmental Responsibility:</strong> Businesses must operate in a way that does not harm the environment, as Islam promotes the stewardship of the earth (Khilafah).</li>
                    </ul>
                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                        <p><strong>Hadith:</strong> "The hand of the giver is better than the hand of the taker." (Sahih Bukhari)</p>
                    </blockquote>
                </div>

                {/* Case Study: Islamic Finance in Action */}
                <div className="bg-gray-50 shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-4xl font-semibold mb-4 text-center text-blue-600 arabic-font">Case Study: Islamic Finance in Action</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        One of the most successful models of Islamic finance is the concept of <strong>Sukuk</strong> (Islamic bonds). Unlike conventional bonds that earn interest, Sukuk are structured as asset-backed investments. Investors in Sukuk do not own a debt obligation but rather a share of a tangible asset, thus earning profits from real economic activities.
                    </p>
                    <img src={"/img/sukuk.webp"} alt="Sukuk" className="my-4 mx-auto w-96 h-48 rounded-lg shadow-md" />
                    <p className="text-lg text-gray-600 mb-4">
                        Sukuk have been widely used in the global finance market and have helped fund large-scale projects in infrastructure, healthcare, and education, providing ethical investment opportunities for Muslims and non-Muslims alike.
                    </p>
                </div>

                {/* Conclusion */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-4xl font-semibold mb-4 text-center text-blue-600 arabic-font">Conclusion</h2>
                    <p className="text-lg text-gray-600 mb-2">
                        Islamic Business Law is designed to ensure fairness, transparency, and social welfare in all commercial transactions. By adhering to these principles, businesses can promote not only individual prosperity but also the well-being of society as a whole. This ethical approach to business, grounded in the values of honesty and justice, continues to inspire modern-day financial systems, particularly in the field of Islamic finance.
                    </p>
                </div>
            </div>
        </>
    );
};

export default BusinessLaw;
