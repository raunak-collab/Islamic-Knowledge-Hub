import React from 'react';
import IslamicKnowledgeHub from './assets/components/IslamicKnowledgeHub';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hadithbook from './assets/components/hadithbook';
import About from './assets/components/about';
import IslamicLaw from './assets/components/islamiclaw';
import FamilyLaw from './assets/components/Familylaw';
import CriminalLaw from './assets/components/Criminallaw';
import BusinessLaw from './assets/components/Businesslaw';
import LawOfWorship from './assets/components/LawOfWorship';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<IslamicKnowledgeHub />} />
                    <Route path="/hadith" element={<Hadithbook />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/islamiclaw" element={<IslamicLaw />} />
                    <Route path="/familylaw" element={<FamilyLaw />} />
                    <Route path="/businesslaw" element={<BusinessLaw />} />
                    <Route path="/criminallaw" element={<CriminalLaw />} />
                    <Route path="/lawofworship" element={<LawOfWorship />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
