import './Landing.scss';

function Landing(props) {
  return (
      <div className="main-container">
        <div className="sub-container flex-ai-c">
          <div className="g1-hero">
            <h1>Darkan</h1>
            <h2>Everything you want in a 2012 Runescape remake.</h2>
            <div className="dwn-client hide-for-mobile">
              <button className="dwn-btn1">
                <a href="/assets/uploads/files/Darkan.exe">Download <i className="pf-icon fab fa-windows"></i></a>
              </button>
              <button className="dwn-btn2">
                <a href="/assets/uploads/files/Darkan.jar">Download <i className="pf-icon fab fa-apple"></i>
                  <i className="pf-icon fab fa-linux"></i></a>
              </button>
            </div>
          </div>
          <form className="g2-form">
            <div>
              <div>
                <div>
                  <input type="text" className="log-container" name="email" id="email" data-testid="#"
                         placeholder="Email" autoFocus="1" aria-label="Email"/>
                </div>
                <div>
                  <input type="password" className="pass-container" name="pass" id="pass" data-testid="#"
                         placeholder="Password" aria-label="Password"/>
                </div>
              </div>
              <button className="log-in">Log In</button>
              <div className="forget-pass">
                <a href="#">Forget Password?</a>
              </div>
              <button className="create-account">Create Account</button>
            </div>
            <a href="#" className="cta-discord"><u>Join our Discord</u>!</a>
          </form>
        </div>
      </div>
  );
}

export default Landing;
