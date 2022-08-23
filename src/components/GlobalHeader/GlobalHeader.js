import React, {useEffect, useState} from 'react';
import "./GlobalHeader.scss"
import {useParams} from "react-router-dom";
import fetch from "node-fetch";

function GlobalHeader(props) {
    const [countState, setPlayerCount] = useState();
    const fetchPlayerCount = async () => {
        const response = await fetch("https://web.darkan.org:8443/v1/players/online-count");
        let countData = await response.json()
        setPlayerCount(countData.count);
    };
    useEffect(() => {
        fetchPlayerCount()
    }, []);
    return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <div class="top-logo flex flex-ai-c">
            <a href="/">Darkan</a>
        </div>
        <div className="nav-links flex flex-ai-c">
            <div className="dropdown">
                <p className="dropbtn flex flex-ai-c">Explore<i className="fas fa-caret-down dwn-arrow"></i></p>
                <div className="dropdown-content">
                    <ul className="dropdown-links">
                        <li><a href="https://discordapp.com/invite/Z32ggEB" target="_blank" rel="noopener noreferrer">Discord</a></li>
                        <li><a href="https://github.com/orgs/DarkanRS/repositories" target="_blank" rel="noopener noreferrer" className="cta-developers">Github</a></li>
                    </ul>
                </div>
            </div>
            <a href="/highscores/all/1">Highscores</a>
            <a href="https://github.com/DarkanRS/client-loader/releases/tag/1.0.1" target="_blank" rel="noopener noreferrer" className="cta-dwnl">Download</a>
            </div>
            <div className="player-count-container flex flex-ai-c">
            <p id="p-online" className='flex flex-ai-c'><span class="material-symbols-outlined" id="players-icon">diversity_3</span></p>
            <span id="player-count"><strong>{countState}</strong></span>
        </div>
        </div>
    </nav>
  );
}

export default GlobalHeader;
