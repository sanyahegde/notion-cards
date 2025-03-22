// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ProfilePage from './components/ProfilePage';
import DeckPage from './components/DeckPage';
import SignupPage from './components/SignupPage'; 
import LoginPage from './components/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/deck" element={<DeckPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* <Route path="/feature" element={<FeatureCardPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
