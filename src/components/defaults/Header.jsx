import React from 'react';

import { Link } from 'react-router-dom';

import '../../stylesheets/defaults/Header.scss';

export default function Header() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-container">
                <div className="top-logo flex flex-ai-c">
                    <Link to="/">
                        <img src="/logo.svg" alt="logo" className="logo-img" />
                    </Link>
                </div>
                <div className="nav-links flex flex-ai-c">
                    <Link to="/">Home</Link>
                    <Link to="/highscores">Highscores</Link>
                    <a 
                        href="https://github.com/DarkanRS/client-loader/releases" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cta-dwnl"
                    >
                        Download
                    </a>
                    <Link to="/map">World Map</Link>
                </div>
            </div>
        </nav>
    )
}
