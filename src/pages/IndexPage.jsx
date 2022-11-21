import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

import '../stylesheets/index/IndexPage.scss';

export default function IndexPage() {

    let [ playerCount, setPlayerCount ] = useState(0);

    useEffect(() => {

        let loadPlayerCount = async () => {

            try {

                const res = await fetch('https://darkan.org:8443/v1/players/online-count');
                let response = await res.json()
                setPlayerCount(response.count);
            } catch(error) {
                setPlayerCount(0);
            }
        };

        loadPlayerCount();

        let interval = setInterval(loadPlayerCount, 5000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="top-container">
            <div className="main-container-hero flex flex-jc-c">
                <img src="/lumbridge-lg.png" alt="runescape_2012" className="hero-img" />
                <div className="sub-container-hero">
                    <div className="hero">
                        <h1>World 4</h1>
                        <a href="https://jesseguerrero.github.io/runescape-modded/" target="_blank" rel="noopener noreferrer"> <p>Play Modded 2012 Runescape</p></a>
                        <div className="dwn-client">
                            <a href="https://github.com/DarkanRS/client-loader/releases/latest" target="_blank" rel="noopener noreferrer" className="dwn-btn button-hover">Play Now</a>
                        </div>
                        <p id="no-igp">{ playerCount + ' Players Online' }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
