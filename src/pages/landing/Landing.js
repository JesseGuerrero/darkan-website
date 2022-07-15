import './Landing.scss';
import {useEffect, useRef} from "react";

function Landing(props) {
  return (
      <div>
        <div class="main-container-hero flex flex-jc-c">
          <img src="/lumbridge-lg.png" alt="runescape_2012" class="hero-img"/>
            <div class="sub-container-hero">
              <div class="hero">
                <h1>Darkan</h1>
                <p>Play Runescape in 2012</p>
                <div class="dwn-client">
                  <a href="/download" class="dwn-btn button-hover">Play Now</a>
                </div>
                <p id="no-igp">No in-game purchases, ever.</p>
              </div>
            </div>
        </div>
        <section class="section-a-container">
          <div class="section-a-wrapper">
            <div class="section-a">
              <div class="game-content-header">
                <h2>Experience two servers in one client</h2>
              </div>
              <div class="game-content-container">
                <div class="game-content-wrapper">
                  <div class="game-content">
                    <div class="content-container1">
                      <div class="content-container">
                        <div class="world1-banner">
                          <div class="world1-container">
                            <div class="world-container">
                              <h3>World 1</h3>
                              <p>Play RuneScape as it was in 2012. As a full remake, you can progress through a variety of nostalgic content.</p>
                            </div>
                            <div class="w1-image">
                              <div>
                                <video autoplay loop>
                                  <source src="/test-video.mp4" type="video/mp4"/>
                                </video>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="world1-list-container">
                          <ul class="world1-list">
                            <li>25 Skills</li>
                            <li>33+ Quests</li>
                            <li>5+ Diaries</li>
                            <li>Loyalty Points</li>
                            <li>Mini-games</li>
                            <li>And more!</li>
                          </ul>
                        </div>
                        <div class="world2-banner">
                          <div class="world2-container">
                            <div class="world-container">
                              <h3>World 2</h3>
                              <p>If you're looking to play Darkan, but want more of an RSPS feel, then world 2 would be perfect for you!</p>
                            </div>
                            <div class="w2-image">
                              <video autoplay loop>
                                <source src="/test-video.mp4" type="video/mp4"/>
                              </video>
                            </div>
                          </div>
                        </div>
                        <div>
                          <ul class="world2-list">
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
                    <div class="content-container2">
                      <div class="section-header">
                        <h2>A community project</h2>
                        <p>Darkan is an <a href="https://github.com/orgs/DarkanRS/repositories" target="_blank" rel="noopener noreferrer" class="cta-developers">open source project</a> with a communuity dedicated to bring back RuneScape in 2012.</p>
                      </div>
                    </div>
                    <div class="content-container3">
                      <div class="cta-container">
                        <h2>Play Now!</h2>
                        <a href="/download"><span class="material-symbols-outlined button-hover">download_for_offline</span></a>
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
