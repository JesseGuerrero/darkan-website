import './Landing.scss';
import {useEffect, useRef} from "react";

function Landing(props) {
  return (
      <div>
        <div className="top-container">
          <div className="main-container-hero flex flex-jc-c">
          <img src="/lumbridge-lg.png" alt="runescape_2012" class="hero-img"/>
              <div className="sub-container-hero">
                <div className="hero">
                  <h1>Darkan</h1>
                  <p>Play Runescape in 2012</p>
                  <div className="dwn-client">
                    <a href="https://github.com/DarkanRS/client-loader/releases/tag/1.0.1" target="_blank" rel="noopener noreferrer" className="dwn-btn button-hover">Play Now</a>
                  </div>
                  <p id="no-igp">No in-game purchases, ever.</p>
                </div>
              </div>
          </div>
        </div>
        <section className="section-a-container">
          <div className="section-a-wrapper">
            <div className="section-a">
              <div className="game-content-header">
                <h2>Experience two servers in one client</h2>
                <div className="img-gradient">
                  <img src="/worlds.png" className="client-image"/>
                </div>
                <div className="link-discord flex flex-jc-sa">
                  <p>Stay connected with our community!</p>
                </div>
                <div className="flex flex-jc-sa social-link-icons">
                  <a href="https://discordapp.com/invite/Z32ggEB" target="_blank" rel="noopener noreferrer"><img src="/social/discord-brands.svg" className="social-icons discord-icon"/></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><img src="/social/instagram-brands.svg" className="social-icons insta-icon"/></a>
                  <a href="https://www.facebook.com/events/546672149317559/" target="_blank" rel="noopener noreferrer"><img src="/social/facebook-brands.svg" className="social-icons fb-icon"/></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><img src="/social/twitter-brands.svg" className="social-icons twitter-icon"/></a>
                  <a href="https://www.reddit.com/r/2012scape?utm_medium=android_app&utm_source=share" target="_blank" rel="noopener noreferrer"><img src="/social/reddit-brands.svg" className="social-icons twitter-icon"/></a>
                </div>
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
                              <h4>2012 Remake</h4>
                              <p>As a complete remake, players are able to <a href="https://github.com/DarkanRS/client-loader/releases/tag/1.0.1">play through</a> a
                                variety of beginner to expert level skills, tasks, quests, and more exactly as it was in
                                2012.</p>
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
                            <li>Full-game development</li>
                            <li>QOL additions</li>
                            <li>Constant updates</li>
                            <li>Loyalty system</li>
                          </ul>
                        </div>
                        <div className="mid-cta-banner">
                          <h2>Rank from noob to #1</h2>
                          <p>If you're all about EXP, then spectate the <a href="/highscores/all/1">highscores</a> to see
                            who's not EXP wasting.</p>
                        </div>
                        <div className="world2-banner">
                          <div className="world2-container">
                            <div className="world-container">
                              <h3>World 2</h3>
                              <h4>Darkan RSPS</h4>
                              <p>What happens when you add 25x EXP rates and custom content to World 1? You get
                                World 2.</p>
                            </div>
                            <div className="w2-image">
                              <video autoPlay loop>
                                <source src="test-video.mp4" type="video/mp4"/>
                              </video>
                            </div>
                          </div>
                        </div>
                        <div className="world2-list-container">
                          <ul className="world2-list">
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
                        <p>Darkan is an <a href="https://github.com/DarkanRS" target="_blank" rel="noopener noreferrer" className="cta-developers">open source project</a> with a communuity dedicated to bring back RuneScape in 2012.</p>
                      </div>
                    </div>
                    <div className="content-container3">
                      <div className="cta-container">
                        <h2>Play Now!</h2>
                        <a href="https://github.com/DarkanRS/client-loader/releases/tag/1.0.1" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined button-hover">download_for_offline</span></a>
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
