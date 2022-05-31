import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./Highscores.scss"
import fetch from "node-fetch";
import HSHeader from "./components/HSHeader";
import HSNav from "./components/HSNav";
import HSRankings from "./components/HSRankings";

function Highscores({props}) {
    let { page } = useParams()
    page = parseInt(page)
    const [userData, setUserData] = useState([]);
    const [usernameHighlight, searchUser] = useState('');
    const [pageState, setPageState] = useState(page);

    let isIronHS = false
    if(typeof window !== 'undefined')
        isIronHS = window.location.href.includes("highscores-iron")
    if(typeof window === 'undefined')
        isIronHS = props.url.includes("highscores-iron")

    let pathHS= typeof window !== 'undefined' ? window.location.pathname.replace(/\d+/g, "") : props.path.replace(/\d+/g, "")
    const fetchHighscoreJSON = async () => {
        const response = await fetch(window.location.origin + "/api/highscores");
        let playerData = await response.json();
        playerData.sort(function (user1, user2) {
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
        playerData.sort();
        if(isIronHS) {
            let ironData = []
            for(let i = 0; i < playerData.length; i++)
                if(playerData[i].ironman == true)
                    ironData.push(playerData[i])
            playerData = ironData
        }
        setUserData(playerData);
    };

    useEffect(() => {
        fetchHighscoreJSON();
    }, [usernameHighlight, isIronHS, pageState]);

  return (
      <div className="App">
          <header className="App-header">
              <div className="main-container-highscores">
                  <div className="sub-container-highscores">
                     <HSHeader props={props} page={page} userData={userData} searchUser={searchUser} setPageState={setPageState} isIronHS={isIronHS} pathHS={pathHS}/>
                     <HSRankings pageState={pageState} userData={userData} usernameHighlight={usernameHighlight}/>
                     <HSNav pageState={pageState} pathHS={pathHS}/>
                  </div>
              </div>
          </header>
      </div>
  );
}
export default Highscores;
