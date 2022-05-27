//import "./GlobalFooter.scss"

function GlobalFooter() {
    return (
        <footer className="flex flex-jc-sb flex-ai-c">
            <div className="site-map flex flex-ai-c flex-jc-c">
                <p className="hide-for-mobile">Site Map</p>
                <a href="#" className="hide-for-desktop">Site Map</a>
                <div className="hide-for-mobile">
                    <a href="/home">Home</a>
                    <a href="/create-account">Create account</a>
                    <a href="/login">Log In</a>
                    <a href="/download">Download</a>
                    <a href="/highscores">Highscores</a>
                    <a href="/tools">Tools</a>
                    <a href="/discord">Discord</a>
                    <a href="/developers">Developers</a>
                    <a href="/faq">FAQ</a>
                </div>
            </div>
            <div></div>
            <a href="#">Darkan</a>
            <div className="legal flex flex-ai-c flex-jc-c">
                <p>No in-game purchases</p>
                <p>Darkan @ 2022</p>
                <div>
                    <a href="/terms">Terms</a>
                    <a href="/privacy-policy">Privacy</a>
                </div>
            </div>
    </footer>
    );
}

export default GlobalFooter;
