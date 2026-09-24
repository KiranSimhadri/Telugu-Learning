import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AlphabetDashboard from './AlphabetDashboard';
import AcchuluFlashcards from './AcchuluFlashcards';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Intermediate Alphabet Hub */}
        <Route path="/alphabets" element={<AlphabetDashboard />} />
        
        {/* Specific Learning Modules */}
        <Route path="/alphabets/acchulu" element={<AcchuluFlashcards />} />
      </Routes>
    </Router>
  );
}

export default App;