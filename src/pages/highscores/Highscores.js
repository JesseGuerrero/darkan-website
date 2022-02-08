import "./Highscores.scss"

function Highscores() {
  return (
      <div className="main-container-highscores">
        <div className="sub-container-highscores">
          <div className="header-highscores">
            <h1>Highscores</h1>
            <h2>Track, Compare, Achieve Rank #1</h2>
          </div>
          <nav className="flex flex-jc-c flex-ai-c">
            <a href="#" className="button-hover">All Time</a>
            <a href="#" className="button-hover">Weekly</a>
            <a href="#" className="button-hover">Monthly</a>
          </nav>
          <div className="sub-header-hs">
            <h2 id="hs-overall">Overall</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tenetur beatae repellat delectus
              incidunt ipsa facere!</p>
            <div>
              <select className="filter-skill-hs">
                <option>Skill</option>
              </select>
              <select className="filter-account-hs">
                <option>All</option>
                <option>Regular</option>
                <option>Ironman</option>
                <option>Hardcore Ironman</option>
                <option>Ultimate Ironman</option>
              </select>
              <input id="search-user-hs" type="text" name="Username" placeholder="Search Username"/>
            </div>
          </div>
          <div className="flex flex-jc-c">
            <table>
              <thead>
              <th id="rank">Rank</th>
              <th id="player">Player</th>
              <th id="level">Level</th>
              <th id="exp">Exp</th>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default Highscores;
