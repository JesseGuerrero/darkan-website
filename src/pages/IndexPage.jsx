import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

import '../stylesheets/index/IndexPage.scss';

export default function IndexPage() {

    let [ playerCount, setPlayerCount ] = useState(0);

    useEffect(() => {

        let loadPlayerCount = async () => {

            try {

                let res = await axios.get('/players/online-count');
    
                setPlayerCount(res.data.count);
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
                        <h1>Darkan</h1>
                        <p>Play Runescape in 2012</p>
                        <div className="dwn-client">
                            <a href="/download" className="dwn-btn button-hover">Play Now</a>
                        </div>
                        <p id="no-igp">{ playerCount + ' Players Online' }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
