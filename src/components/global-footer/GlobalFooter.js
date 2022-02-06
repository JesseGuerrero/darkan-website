import "../../stylesheets/styles.scss"

function GlobalFooter() {
    return (
        <footer class="flex flex-jc-sb flex-ai-c">
            <div class="site-map flex flex-ai-c flex-jc-c">
                <p class="hide-for-mobile">Site Map</p>
                <a href="#" class="hide-for-desktop">Site Map</a>
                <div class="hide-for-mobile">
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
            <div class="legal flex flex-ai-c flex-jc-c">
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
