import "./GlobalFooter.scss"

function GlobalFooter() {
    return (
        <footer>
            <div className="site-map">
                <div className="f-link-container">
                    <div className="f-link"><a href="/">Darkan</a></div>
                    <div className="f-link"><a href="https://github.com/DarkanRS/client-loader/releases/tag/1.0.1">Download</a></div>
                    <div className="f-link"><a href="/highscores/all/1">Highscores</a></div>
                    <div className="f-link"><a href="https://discordapp.com/invite/Z32ggEB" target="_blank"
                                               rel="noopener noreferrer">Discord</a></div>
                    <div className="f-link"><a href="https://github.com/orgs/DarkanRS/people" target="_blank"
                                               rel="noopener noreferrer" className="cta-developers">Developers</a></div>
                    <div className="f-link"><a>No in-game purchases</a></div>
                    <div className="f-link"><a>Darkan @ 2022</a></div>
                </div>
            </div>
        </footer>
    );
}

export default GlobalFooter;
