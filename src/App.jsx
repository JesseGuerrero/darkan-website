import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Footer from './components/defaults/Footer';
import Header from './components/defaults/Header';
import HighscoresPage from './pages/HighscoresPage';
import IndexPage from './pages/IndexPage';

import "./stylesheets/global.scss"

function App() {
    return (
        <Router>
        <div className="App">
            <Header />
                <Routes>
                    <Route path="/" element={<IndexPage />} />

                    <Route path="/highscores" element={<HighscoresPage />} />
                    <Route path="/highscores/:category" element={<HighscoresPage />} />
                    <Route path="/highscores/:category/:page" element={<HighscoresPage />} />
                    <Route path="/highscores/:category/:skill/:page" element={<HighscoresPage />} />
                    
                </Routes>
            <Footer />
        </div>
        </Router>
    );
}

export default App;
