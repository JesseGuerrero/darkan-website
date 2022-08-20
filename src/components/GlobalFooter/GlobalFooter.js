import "./GlobalFooter.scss"

function GlobalFooter() {
    return (
        <footer>
            <div className="site-map">
                <div className="f-link-container flex-ai-c">
                    <div className="f-link"><a href="/">Darkan</a></div>
                    <div className="f-link"><a href="https://github.com/DarkanRS/client-loader/releases/tag/1.0.1" target="_blank" rel="noopener noreferrer">Download</a></div>
                    <div className="f-link"><a href="/highscores/all/1">Highscores</a></div>
                    <div className="f-link"><a href="https://discordapp.com/invite/Z32ggEB" target="_blank" rel="noopener noreferrer">Discord</a></div>
                    <div className="f-link"><a href="https://github.com/orgs/DarkanRS/people" target="_blank" rel="noopener noreferrer" className="cta-developers">Github</a></div>
                    <div className="f-link"><p>No in-game purchases</p></div>
                    <div className="f-link"><p>Darkan @ 2022</p></div>
                </div>
            </div>
        </footer>
    );
}

export default GlobalFooter;
