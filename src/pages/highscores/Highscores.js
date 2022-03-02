import "./Highscores.scss"

function Highscores() {
  return (
      <div className="main-container-highscores">
        <div className="sub-container-highscores">
          <div className="header-highscores header-image">
            <h1>Highscores</h1>
            <h2>Track, Compare, Achieve Rank #1</h2>
          </div>
          <div className="sub-header-hs">
            <h2 id="hs-overall">Overall</h2>
            <div className="flex flex-jc-c">
              <div className="select-hs flex">
                <select className="filter-time-hs">
                  <optgroup label="Time period"></optgroup>
                  <option>All-time</option>
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Daily</option>
                </select>
                <select className="filter-account-hs">
                  <optgroup label="Account type"></optgroup>
                  <option>All</option>
                  <option>Regular</option>
                  <option>Ironman</option>
                  <option>Hardcore Ironman</option>
                  <option>Ultimate Ironman</option>
                </select>
                <select className="filter-skill-hs">
                  <optgroup label="Skill"></optgroup>
                  <option>All</option>
                  <option>Attack</option>
                  <option>Strength</option>
                  <option>Defense</option>
                  <option>Ranged</option>
                  <option>Magic</option>
                  <option>Hitpoints</option>
                  <option>Prayer</option>
                  <option>Summoning</option>
                  <option>Runecrafting</option>
                  <option>Construction</option>
                  <option>Dungeoneering</option>
                  <option>Agility</option>
                  <option>Herblore</option>
                  <option>Theiving</option>
                  <option>Crafting</option>
                  <option>Fletching</option>
                  <option>Slayer</option>
                  <option>Hunter</option>
                  <option>Mining</option>
                  <option>Smithing</option>
                  <option>Fishing</option>
                  <option>Cooking</option>
                  <option>Firemaking</option>
                  <option>Woodcutting</option>
                  <option>Farming</option>
                </select>
              </div>
            </div>
            <div className="flex flex-jc-c">
              <input id="search-user-hs" type="text" name="Username" placeholder="Search Username" value=""/>
            </div>
          </div>
          <div className="flex flex-jc-c">
            <table>
              <thead>
              <th id="rank">Rank</th>
              <th id="player">Player</th>
              <th id="level">Level</th>
              <th id="exp">Total Exp</th>
              </thead>
              <tbody>
              <tr className="row-hover1">
                <td><a href="#">1</a></td>
                <td id="player"><a href="/highscores-player"/>Username</td>
                <td><a href="#"/>2,600</td>
                <td><a href="#"/>5,600,000</td>
              </tr>
              <tr className="row-hover1">
                <td><a href="#">1</a></td>
                <td id="player"><a href="#"/>Username</td>
                <td><a href="#"/>2,600</td>
                <td><a href="#"/>5,600,000</td>
              </tr>
              <tr className="row-hover1">
                <td><a href="#">1</a></td>
                <td id="player"><a href="#"/>Username</td>
                <td><a href="#"/>2,600</td>
                <td><a href="#"/>5,600,000</td>
              </tr>
              <tr className="row-hover1">
                <td><a href="#">1</a></td>
                <td id="player"><a href="#"/>Username</td>
                <td><a href="#"/>2,600</td>
                <td><a href="#"/>5,600,000</td>
              </tr>
              <tr className="row-hover1">
                <td><a href="#">1</a></td>
                <td id="player"><a href="#"/>Username</td>
                <td><a href="#"/>2,600</td>
                <td><a href="#"/>5,600,000</td>
              </tr>
              <tr className="row-hover1">
                <td><a href="#">1</a></td>
                <td id="player"><a href="#"/>Username</td>
                <td><a href="#"/>2,600</td>
                <td><a href="#"/>5,600,000</td>
              </tr>

              </tbody>
            </table>
          </div>
          <div className="pagination-container flex flex-jc-c">
            <div>
              <ul className="flex flex-ai-c">
                <li className="prev-next"><i className="fas fa-arrow-left"></i></li>
                <li><a href="#" className="pagination-link">1</a></li>
                <li><a href="#" className="pagination-link">2</a></li>
                <li><a href="#" className="pagination-link active">3</a></li>
                <li className="page-dots">...</li>
                <li><a href="#" className="pagination-link">10</a></li>
                <li className="prev-next"><i className="fas fa-arrow-right"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Highscores;
