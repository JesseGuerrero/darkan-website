import "./GlobalFooter.scss"

function GlobalFooter() {
    return (
        <footer>
            <div className="site-map">
                <div className="f-link-container">
                    <div className="f-link"><a href="/">Darkan</a></div>
                    <div className="f-link"><a href="/download">Download</a></div>
                    <div className="f-link"><a href="/highscores">Highscores</a></div>
                    <div className="f-link"><a href="/#">Discord</a></div>
                    <div className="f-link"><a href="https://github.com/orgs/DarkanRS/repositories" target="_blank"
                                               rel="noopener noreferrer" className="cta-developers">Developers</a></div>
                    <div className="f-link"><a>No in-game purchases</a></div>
                    <div className="f-link"><a>Darkan @ 2022</a></div>
                </div>
            </div>
        </footer>
    );
}

export default GlobalFooter;
