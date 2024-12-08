import React, { useState, useEffect } from 'react';
import Navbar from './navbar';

const HadithBook = () => {
    const [hadithBooks, setHadithBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [hadithData, setHadithData] = useState([]);

    // Sample Data for Hadith Books
    const sampleBooks = [
        { id: 1, title: "Sahih Bukhari" },
        { id: 2, title: "Sahih Muslim" },
        { id: 3, title: "Sunan Abu Dawood" },
        { id: 4, title: "Jami' at-Tirmidhi" },
        { id: 5, title: "Sunan an-Nasa'i" },
        { id: 6, title: "Sunan Ibn Majah" },
        // Add more books as needed
    ];

    // Function to handle book selection
    const handleBookSelection = (book) => {
        setSelectedBook(book);
        fetchHadithData(book.id);
    };

    // Fetching sample Hadith data based on selected book
    const fetchHadithData = (bookId) => {
        const sampleHadiths = {
            1: [
                { id: 1, text: "Actions are judged by intentions.", translation: "إنما الأعمال بالنيات" },
                { id: 2, text: "The best among you are those who have the best manners.", translation: "إن من أحبكم إليّ وأقربكم مني مجلساً يوم القيامة أحاسنكم أخلاقاً" },
                { id: 3, text: "Whoever does a good deed, it will be for him (as a reward).", translation: "قال النبي: 'من يعمل حسنة فلنفسه.'" },
                { id: 4, text: "Allah helps those who help others.", translation: "قال النبي: 'إن الله في عون العبد ما كان العبد في عون أخيه.'" },
            ],
            2: [
                { id: 1, text: "Whoever believes in Allah and the Last Day should speak good or remain silent.", translation: "قال النبي: 'من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت.'" },
                { id: 2, text: "The best of people are those who are most beneficial to others.", translation: "أفضل الناس أنفعهم للناس." },
                { id: 3, text: "Modesty brings nothing but good.", translation: "قال النبي: 'الحياء لا يأتي إلا بخير.'" },
                { id: 4, text: "The strong man is not the one who overcomes people with his strength, but the one who controls himself while in anger.", translation: "قال النبي: 'ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب.'" },
            ],
            3: [
                { id: 1, text: "The most beloved deeds to Allah are those that are done consistently.", translation: "قال النبي: 'أحب الأعمال إلى الله أدومها وإن قل.'" },
                { id: 2, text: "The prayer of a man in his house is a light.", translation: "صلاة الرجل في بيته نور." },
                { id: 3, text: "Be merciful to those on the earth, and the One in the heavens will have mercy upon you.", translation: "قال النبي: 'ارحموا من في الأرض يرحمكم من في السماء.'" },
                { id: 4, text: "The believer does not insult or curse others.", translation: "قال النبي: 'ليس المؤمن بالطعان ولا اللعان ولا الفاحش ولا البذيء.'" },
            ],
            4: [
                { id: 1, text: "Allah is not kind to him who is not kind to people.", translation: "قال النبي: 'ليس منا من لا يرحم الناس.'" },
                { id: 2, text: "The Prophet said, 'Modesty is a part of faith.'", translation: "الحياء من الإيمان." },
                { id: 3, text: "He who does not thank people has not thanked Allah.", translation: "قال النبي: 'من لا يشكر الناس لا يشكر الله.'" },
                { id: 4, text: "Do not be envious of one another.", translation: "قال النبي: 'لا تحاسدوا، ولا تباغضوا، ولا تدابروا، وكونوا عباد الله إخوانا.'" },
            ],
            5: [
                { id: 1, text: "The best wealth is the wealth of the soul.", translation: "قال النبي: 'ليس الغنى عن كثرة العرض ولكن الغنى غنى النفس.'" },
                { id: 2, text: "The most beloved of deeds to Allah is the one that is continuous, even if it is little.", translation: "قال النبي: 'أحب الأعمال إلى الله أدومها وإن قل.'" },
                { id: 3, text: "If someone seeks your advice, give them sincere advice.", translation: "قال النبي: 'الدين النصيحة.'" },
                { id: 4, text: "Do not look down upon any good deed, even if it is meeting your brother with a cheerful face.", translation: "قال النبي: 'لا تحقرن من المعروف شيئاً ولو أن تلقى أخاك بوجه طليق.'" },
            ],
            6: [
                { id: 1, text: "Every one of you is a guardian and responsible for what is in his custody.", translation: "قال النبي: 'كلكم راع وكلكم مسؤول عن رعيته.'" },
                { id: 2, text: "There is no harm nor reciprocating harm.", translation: "قال النبي: 'لا ضرر ولا ضرار.'" },
                { id: 3, text: "Whoever is deprived of kindness is deprived of goodness.", translation: "قال النبي: 'من يحرم الرفق يحرم الخير كله.'" },
                { id: 4, text: "The best among you are those who learn the Quran and teach it.", translation: "قال النبي: 'خيركم من تعلم القرآن وعلمه.'" },
            ],
        };
        setHadithData(sampleHadiths[bookId]);
    };
    

    useEffect(() => {
        setHadithBooks(sampleBooks);
    }, []);

    return (
        <>
            <Navbar />
            <div className="container mx-auto py-12">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar for Hadith Books */}
                    <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Hadith Books</h2>
                        <ul className="space-y-2">
                            {hadithBooks.map((book) => (
                                <li
                                    key={book.id}
                                    className={`cursor-pointer p-2 rounded hover:bg-blue-100 transition duration-300 ${
                                        selectedBook && selectedBook.id === book.id ? 'bg-blue-200' : ''
                                    }`}
                                    onClick={() => handleBookSelection(book)}
                                >
                                    {book.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main content area for displaying selected Hadiths */}
                    <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-6">
                            {selectedBook ? selectedBook.title : "Select a Hadith Book"}
                        </h2>
                        {hadithData.length > 0 ? (
                            hadithData.map((hadith) => (
                                <div key={hadith.id} className="mb-6">
                                    <p className="text-xl font-semibold text-gray-700">
                                        <strong>Arabic:</strong> {hadith.translation}
                                    </p>
                                    <p className="text-lg mt-2 text-gray-600">
                                        <strong>Translation:</strong> {hadith.text}
                                    </p>
                                    <hr className="my-4" />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Please select a Hadith book to view Hadiths.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HadithBook;
