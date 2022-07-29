import './Landing.scss';
import {useEffect, useRef} from "react";

function Landing(props) {
  return (
      <div>
        <div className="main-container-hero flex flex-jc-c">
          <img src="/lumbridge-lg.png" alt="runescape_2012" className="hero-img"/>
            <div className="sub-container-hero">
              <div className="hero">
                <h1>Darkan</h1>
                <p>Play Runescape in 2012</p>
                <div className="dwn-client">
                  <a href="/download" className="dwn-btn button-hover">Play Now</a>
                </div>
                <p id="no-igp">No in-game purchases, ever.</p>
              </div>
            </div>
        </div>
        <section className="section-a-container">
          <div className="section-a-wrapper">
            <div className="section-a">
              <div className="game-content-header">
                <h2>Experience two servers in one client</h2>
              </div>
              <div className="game-content-container">
                <div className="game-content-wrapper">
                  <div className="game-content">
                    <div className="content-container1">
                      <div className="content-container">
                        <div className="world1-banner">
                          <div className="world1-container">
                            <div className="world-container">
                              <h3>World 1</h3>
                              <p>Play RuneScape as it was in 2012. As a full remake, you can progress through a variety of nostalgic content.</p>
                            </div>
                            <div className="w1-image">
                              <div>
                                <video autoPlay loop>
                                  <source src="/test-video.mp4" type="video/mp4"/>
                                </video>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="world1-list-container">
                          <ul className="world1-list">
                            <li>25 Skills</li>
                            <li>33+ Quests</li>
                            <li>5+ Diaries</li>
                            <li>Loyalty Points</li>
                            <li>Mini-games</li>
                            <li>And more!</li>
                          </ul>
                        </div>
                        <div className="world2-banner">
                          <div className="world2-container">
                            <div className="world-container">
                              <h3>World 2</h3>
                              <p>If you're looking to play Darkan, but want more of an RSPS feel, then world 2 would be perfect for you!</p>
                            </div>
                            <div className="w2-image">
                              <video autoPlay loop>
                                <source src="/test-video.mp4" type="video/mp4"/>
                              </video>
                            </div>
                          </div>
                        </div>
                        <div>
                          <ul className="world2-list">
                            <li>W1 base content</li>
                            <li>25x EXP</li>
                            <li>Edgeville home</li>
                            <li>Supply Shop</li>
                            <li>Slayer Portals</li>
                            <li>And more!</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="content-container2">
                      <div className="section-header">
                        <h2>A community project</h2>
                        <p>Darkan is an <a href="https://github.com/orgs/DarkanRS/repositories" target="_blank" rel="noopener noreferrer" className="cta-developers">open source project</a> with a communuity dedicated to bring back RuneScape in 2012.</p>
                      </div>
                    </div>
                    <div className="content-container3">
                      <div className="cta-container">
                        <h2>Play Now!</h2>
                        <a href="/download"><span className="material-symbols-outlined button-hover">download_for_offline</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Landing;
