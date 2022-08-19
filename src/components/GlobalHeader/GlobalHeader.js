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
              <a href="/">
              <div className="player-count-container flex flex-ai-c">
                  <span id="player-count"><strong>{countState}</strong></span>
                  <p>Players Online</p>
              </div>
              </a>
              <div className="nav-links flex flex-ai-c">
                  <div className="dropdown">
                      <p className="dropbtn flex flex-ai-c">Explore<i className="fas fa-caret-down dwn-arrow"></i></p>
                      <div className="dropdown-content">
                          <ul className="dropdown-links">
                              <li><a href="https://discord.gg/RWZt5YN7H4">Discord</a></li>
                              <li><a href="https://github.com/orgs/DarkanRS/repositories" target="_blank"
                                     rel="noopener noreferrer" className="cta-developers">Github</a></li>
                          </ul>
                      </div>
                  </div>
                  <a href="/highscores/all/1">Highscores</a>
                  <div className="dropdown">
                      <p className="dropbtn flex flex-ai-c">Tools<i className="fas fa-caret-down dwn-arrow"></i></p>
                      <div className="dropdown-content">
                          <ul className="dropdown-links">
                              <li><a href="#">World Map</a></li>
                              <li><a href="https://github.com/DarkanRS/api">API Documents</a></li>
                          </ul>
                      </div>
                  </div>
                  <a href="https://github.com/DarkanRS/client-loader/releases/tag/1.0.1" className="cta-dwnl">Download</a>
              </div>
          </div>
      </nav>
  );
}

export default GlobalHeader;
