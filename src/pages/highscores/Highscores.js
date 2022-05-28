import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./Highscores.scss"
import fetch from "node-fetch";



function Highscores(props) {
    const { page } = useParams()
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        getGitHubUserWithFetch();
    }, []);

    const getGitHubUserWithFetch = async () => {
        const response = await fetch(window.location.origin + "/api/highscores");
        const jsonData = await response.json();
        jsonData.sort(function (user1, user2) {
            if(user1.totalLevel < user2.totalLevel)
                return 1
            else if(user1.totalLevel > user2.totalLevel)
                return -1
            else if(user1.totalLevel == user2.totalLevel)
                if(user1.totalXp < user2.totalXp)
                    return 1
                else if(user1.totalXp > user2.totalXp)
                    return -1
            return 0
        })
        jsonData.sort();
        setUserData(jsonData);
    };

  return (
      <div className="App">
          <header className="App-header">
              <div className="main-container-highscores">
                  <div className="sub-container-highscores">
                      <div className="header-highscores">
                          <h1>Highscores {page}</h1>
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
                              {userData.map(
                                  (user) => {
                                      if(userData.indexOf(user) >= 15 * (page-1) && userData.indexOf(user) < 15 * page) //get page rank range
                                          return <thead>
                                          <th id="rank">{userData.indexOf(user) + 1}</th>
                                          <th id="player">{user.username}</th>
                                          <th id="level">{user.totalLevel}</th>
                                          <th id="exp">{user.totalXp}</th>
                                          </thead>
                                  }
                              )}
                          </table>
                      </div>
                      <div className="pagination-container flex flex-jc-c">
                          <div>
                              <ul className="flex flex-ai-c">
                                  {parseInt(page) <= 1 ? (
                                      <li style={{visibility:"hidden"}} className="prev-next"><i className="fas fa-arrow-left"></i></li>
                                  ) : (
                                      <li className="prev-next"><a href={"/highscores/" + (parseInt(page) - 1)}><i className="fas fa-arrow-left"></i></a></li>
                                  )}
                                  <li><a href="#" className="pagination-link active">1</a></li>
                                  <li><a href="#" className="pagination-link">2</a></li>
                                  <li><a href="#" className="pagination-link">3</a></li>
                                  <li className="page-dots">...</li>
                                  <li><a href="#" className="pagination-link">10</a></li>
                                  <li className="prev-next"><a href={"/highscores/" + (parseInt(page) + 1)}><i className="fas fa-arrow-right"></i></a></li>
                              </ul>
                          </div>
                      </div>

                  </div>
              </div>
          </header>
      </div>
  );
}

export default Highscores;
