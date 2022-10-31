import React from 'react';

import { Link } from 'react-router-dom';

import '../../stylesheets/defaults/Header.scss';

export default function Header(props) {
    return (
        <nav className="nav-wrapper">
            <div className="nav-container">
                <div className="top-logo flex flex-ai-c">
                    <Link to="/">
                        Darkan
                    </Link>
                </div>
                <div className="nav-links flex flex-ai-c">
                    <div className="dropdown">
                        <p className="dropbtn flex flex-ai-c">Explore<i className="fas fa-caret-down dwn-arrow"></i></p>
                        <div className="dropdown-content">
                            <ul className="dropdown-links">
                                <li><a href="https://discordapp.com/invite/Z32ggEB" target="_blank" rel="noopener noreferrer">Discord</a></li>
                                <li><a href="https://github.com/DarkanRS" target="_blank" rel="noopener noreferrer" className="cta-developers">Github</a></li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/highscores">Highscores</Link>
                    <Link to="/grand-exchange">Grand Exchange</Link>
                    <Link to="/download">Download</Link>
                </div>
            </div>
        </nav>
    )
}
