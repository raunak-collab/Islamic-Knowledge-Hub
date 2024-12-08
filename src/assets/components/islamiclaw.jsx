import React from 'react';
import { FaBalanceScale, FaUsers, FaBriefcase, FaBook, FaPrayingHands } from 'react-icons/fa'; // Importing icons
import Navbar from './navbar';

const IslamicLaw = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold text-center mb-6">Islamic Law (Fiqh)</h1>
                <p className="text-lg text-gray-700 text-center mb-8">
                    Islamic Law, known as Fiqh, is a comprehensive system of legal rulings and principles derived from the Quran, Hadith, and other sources. It governs various aspects of a Muslim's life, providing guidance on both personal and communal matters. Fiqh is not only about legal rulings but also about understanding the spirit of the law and its application in diverse situations.
                </p>

                {/* Key Principles */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Key Principles of Islamic Law</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Islamic law is based on several foundational principles, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        <li><strong>Tawhid:</strong> The Oneness of God, which is the foundation of Islamic belief and dictates that everything in existence is under God's sovereignty.</li>
                        <li><strong>Justice:</strong> A fundamental tenet emphasizing fairness and equity in dealings, reinforcing the idea that justice is a divine command.</li>
                        <li><strong>Consultation (Shura):</strong> Encouraging mutual consultation in decision-making, reflecting the importance of collective wisdom in governance.</li>
                        <li><strong>Public Interest (Maslahah):</strong> Prioritizing the welfare of the community, which allows for flexible legal interpretations to ensure societal benefit.</li>
                        <li><strong>Intention (Niyyah):</strong> The intention behind actions is crucial, as it determines the moral value of those actions in the eyes of God.</li>
                    </ul>
                    <p className="text-lg text-gray-600">
                        These principles guide not only individual behavior but also the governance and judicial systems within Islamic societies, fostering a holistic approach to law and ethics.
                    </p>
                    <div className="flex justify-center my-4">
                        <FaBalanceScale className="text-5xl text-blue-600" />
                    </div>
                </div>

                {/* Areas of Islamic Law */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Areas of Islamic Law</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Islamic law encompasses various fields, each addressing different aspects of life:
                    </p>

                    {/* Family Law */}
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Family Law</h3>
                        <p className="text-gray-600 mb-2">
                            Family law governs matters such as marriage, divorce, child custody, and inheritance. It emphasizes the sanctity of marriage, the rights and responsibilities of each spouse, and the welfare of children.
                        </p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><strong>Marriage:</strong> A contractual agreement requiring consent from both parties, often accompanied by a dowry (Mahr) to ensure financial security for the wife.</li>
                            <li><strong>Divorce:</strong> Islamic law provides procedures for divorce (Talaq) that ensure fairness and protection for both spouses, including a waiting period (Iddah) for the woman to ensure clarity about any potential pregnancy.</li>
                            <li><strong>Child Custody:</strong> Laws regarding the welfare and custody of children post-divorce prioritize the best interests of the child, with considerations given to both parents' capabilities.</li>
                            <li><strong>Inheritance:</strong> Islamic inheritance laws dictate the distribution of wealth among heirs, ensuring that both male and female relatives receive their rightful shares, promoting social equity.</li>
                        </ul>
                        <div className="flex justify-center my-4">
                            <FaUsers className="text-5xl text-green-600" />
                        </div>
                    </div>

                    {/* Business Law */}
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Business Law</h3>
                        <p className="text-gray-600 mb-2">
                            Business law in Islam covers trade, contracts, and ethical practices. It emphasizes honesty, transparency, and fairness in all transactions, with the goal of fostering trust within the community.
                        </p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><strong>Trade Ethics:</strong> Encourages fair trading practices, prohibiting deception, fraud, and exploitation, promoting an ethical marketplace.</li>
                            <li><strong>Contracts:</strong> Contracts must be clear and binding, with mutual consent of all parties involved. Unjust or ambiguous terms are discouraged.</li>
                            <li><strong>Prohibition of Riba:</strong> The charging of interest (Riba) is forbidden, promoting equity in financial dealings and encouraging investment in productive ventures rather than exploitative lending practices.</li>
                            <li><strong>Zakat and Charity:</strong> Business transactions are closely tied to social responsibility, with Zakat being obligatory charity aimed at redistributing wealth to help those in need.</li>
                        </ul>
                        <div className="flex justify-center my-4">
                            <FaBriefcase className="text-5xl text-orange-600" />
                        </div>
                    </div>

                    {/* Criminal Law */}
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Criminal Law</h3>
                        <p className="text-gray-600 mb-2">
                            Islamic criminal law addresses offenses and their punishments within an Islamic context, focusing on rehabilitation and societal protection while ensuring justice for victims.
                        </p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><strong>Hudud Crimes:</strong> Offenses with fixed punishments, such as theft and adultery, that are outlined in the Quran and Sunnah.</li>
                            <li><strong>Qisas:</strong> The principle of retribution, where a victim or their family has the right to seek justice equivalent to the harm done, promoting a balance between punishment and compassion.</li>
                            <li><strong>Tazir:</strong> Discretionary punishment for offenses not covered by Hudud, allowing judges to decide appropriate penalties based on the circumstances of the case.</li>
                            <li><strong>Prevention of Harm:</strong> Islamic law emphasizes the importance of preventing harm to society, which may involve measures to deter crime and protect vulnerable populations.</li>
                        </ul>
                        <div className="flex justify-center my-4">
                            <FaBook className="text-5xl text-red-600" />
                        </div>
                    </div>

                    {/* Law of Worship */}
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Law of Worship</h3>
                        <p className="text-gray-600 mb-2">
                            This area regulates acts of worship, ensuring that Muslims fulfill their religious obligations properly and understand the significance behind these acts.
                        </p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><strong>Salah (Prayer):</strong> Guidelines on how and when to perform the five daily prayers, emphasizing discipline, community, and direct connection to God.</li>
                            <li><strong>Zakat (Almsgiving):</strong> Requirements for giving charity and its significance in purifying wealth and aiding the less fortunate, reinforcing social responsibility.</li>
                            <li><strong>Hajj (Pilgrimage):</strong> Rules governing the pilgrimage to Mecca, a pillar of Islam, which includes specific rites to be performed and their spiritual meanings.</li>
                            <li><strong>Fasting (Sawm):</strong> Regulations surrounding fasting during Ramadan, including exemptions and the spiritual benefits of self-discipline and empathy for the less fortunate.</li>
                        </ul>
                        <div className="flex justify-center my-4">
                            <FaPrayingHands className="text-5xl text-purple-600" />
                        </div>
                    </div>
                </div>

                {/* Conclusion */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
                    <p className="text-lg text-gray-600 mb-2">
                        Understanding Islamic law is essential for practicing Muslims, as it guides their conduct and interactions. This platform aims to provide accessible resources for individuals seeking to deepen their knowledge of Islamic law and its applications in daily life.
                    </p>
                    <p className="text-lg text-gray-600">
                        By promoting awareness and education, we hope to contribute to a more informed and just society. Islamic law is not merely a set of rules but a comprehensive system designed to ensure justice, mercy, and social welfare. Engaging with these principles can foster a more ethical and responsible community, grounded in the teachings of Islam.
                    </p>
                </div>
            </div>
        </>
    );
};

export default IslamicLaw;
