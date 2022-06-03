//import "./GlobalFooter.scss"

function GlobalFooter() {
    return (
        <footer className="flex flex-jc-sb flex-ai-c">
            <div className="site-map flex flex-ai-c flex-jc-c">
                <div className="hide-for-mobile">
                    <a href="/">Home</a>
                    <a href="Darkan.jar" className="cta-dwnl" download>Download</a>
                    <a href="/highscores/all/1">Highscores</a>
                    <a href="https://discord.gg/cHRVwYcA">Discord</a>
                    <a href="https://github.com/DarkanRS">GitHub</a>
                </div>
            </div>
            <div></div>
            <div className="legal flex flex-ai-c flex-jc-c">
                <p>No in-game purchases</p>
                <p>Darkan @ 2022</p>
            </div>
    </footer>
    );
}

export default GlobalFooter;
