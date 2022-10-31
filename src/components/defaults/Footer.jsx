import React from 'react';

import { Link } from 'react-router-dom';

import '../../stylesheets/defaults/Footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className="site-map">
                <div className="f-link-container flex-ai-c">
                    <div className="f-link">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="f-link">
                        <Link to="/download">Download</Link>
                    </div>
                    <div className="f-link">
                        <a 
                            href="https://discordapp.com/invite/Z32ggEB" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Discord
                        </a>
                    </div>
                    <div className="f-link">
                        <a
                            href="https://github.com/DarkanRS/"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
