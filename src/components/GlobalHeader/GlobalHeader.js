import "./GlobalHeader.scss"
import logo from './logo.svg';
import {useState} from "react";
import Landing from "../Landing/Landing";

function GlobalHeader(props) {
  function chooseHighscores() {
    props.onChangeView("Highscores")
  }
  return (
      <nav className="main-nav flex flex-ai-c flex-jc-sb">
        <div className="top-logo flex flex-ai-c">
          <a href="/home"><img src={logo} /></a>
        </div>
        <div className="hamburger hide-for-desktop">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="flex flex-ai-c hide-for-mobile">
          <div className="dropdown">
            <p className="dropbtn flex flex-ai-c">Explore<i className="fas fa-caret-down dwn-arrow"></i></p>
            <div className="dropdown-content">
              <ul className="dropdown-links">
                <li><a href="/features">Features</a></li>
                <li><a href="/guides">Guides</a></li>
              </ul>
            </div>
          </div>
          <a onClick={chooseHighscores}>Highscores</a>
          <div className="dropdown">
            <p className="dropbtn flex flex-ai-c">Tools<i className="fas fa-caret-down dwn-arrow"></i></p>
            <div className="dropdown-content">
              <ul className="dropdown-links">
                <li><a href="/ge-tracker">GE Tracker</a></li>
                <li><a href="/skill-calculator">Skill Calculator</a></li>
                <li><a href="/bug-reporter">Bug Reporter</a></li>
                <li><a href="/world-map">World Map</a></li>
                <li><a href="/api">API Documents</a></li>
              </ul>
            </div>
          </div>
          <a href="/create-account">Create account</a>
          <a href="/login">Login</a>
          <a href="/assets/uploads/files/Darkan.exe" className="cta-dwnl">Download</a>
        </div>
      </nav>
  );
}

export default GlobalHeader;
