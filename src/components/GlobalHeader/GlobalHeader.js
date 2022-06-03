import React from 'react';
//import "./GlobalHeader.scss"

function GlobalHeader(props) {
  return (
      <nav className="main-nav flex flex-ai-c flex-jc-sb">
        <div className="top-logo flex flex-ai-c">
          <a href="/"><img src="/logo.svg" /></a>
        </div>
        <div className="hamburger hide-for-desktop">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="flex flex-ai-c hide-for-mobile">
            <a href="/highscores/all/1">Highscores</a>
            <a href="/grandexchange">GE Tracker</a>
            <a href="https://darkan.org/worldmap.html">World Map</a>
            <a href="https://darkan.fandom.com/wiki/Darkan_Wiki">Guides</a>
            <a href="Darkan.jar" className="cta-dwnl" download>Download</a>
        </div>
      </nav>
  );
}

export default GlobalHeader;
