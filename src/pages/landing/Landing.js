import './Landing.scss';

function Landing(props) {
  return (
      <div>
        <div class="main-container-hero flex flex-jc-c">
          <div class="sub-container-hero">
            <div class="g1-hero">
              <h1>Darkan</h1>
              <p>A Runescape remake of the 2012 era built with game content for all types of players.</p>
              <div class="dwn-client">
                <a href='Darkan.jar' class="dwn-btn" download>Download Client</a>
              </div>
              <p id="no-igp">No in-game purchases</p>
            </div>
            <div class="g2-hero-img">

            </div>
          </div>
        </div>
        <section class="comm-data-container">
          <div class="comm-data-wrapper">
            <div class="comm-data">
              <div class="comm-info">
                <p>2012 Runescape</p>
              </div>
              <div class="comm-info">
                <p>3 World Servers</p>
              </div>
              <div class="comm-info">
                <p>Growing Community</p>
              </div>
              <div class="comm-info">
                <p>Open Source</p>
              </div>
            </div>
          </div>
        </section>
        <section class="section-a-container">
          <div class="section-a-wrapper">
            <div class="section-a">
              <h2>Darkan provides three experiences in one.</h2>
              <p>All worlds share the same base content, but each offers an unique twist to the 2012 RuneScape experience.</p>
              <div class="game-content-container">
                <div class="game-content-wrapper">
                  <div class="game-content">
                    <div class="content-container1">
                      <div class="content-container">
                        <div class="world1-banner">
                          <h4>World 1, the Runescape Remake</h4>
                          <p>Play Runescape exactly as it was in 2012, with additional QOL updates.</p>
                          <div class="w1-image"></div>
                        </div>
                        <div class="world2-banner">
                          <h4>World 2, the RSPS</h4>
                          <p>A RSPS feel with 25x Exp rates, Edgeville home, and more!</p>
                          <div class="w2-image"></div>
                        </div>
                      </div>
                    </div>
                    <div class="content-container2">
                      <div class="section-header">
                        <h3>A Remake, RSPS, and PVP Server</h3>
                        <p>Experience the 2012 Runescape Era how you want to. Three different worlds, one game.</p>
                      </div>
                    </div>
                    <div class="content-container3">
                      <div class="section-header">
                        <h3>Darkan is Open Source!</h3>
                      <p>Git involved by <a href="https://github.com/orgs/DarkanRS/repositories" target="_blank" rel="noopener noreferrer" class="cta-developers">contributing code!</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="banner-cta-container">
          <div class="banner-cta-wrapper">
            <div class="banner-cta">
              <h2>Start your adventure</h2>
              <button class="download-btn">
                <a href='Darkan.jar' download>Download Darkan</a>
              </button>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Landing;
