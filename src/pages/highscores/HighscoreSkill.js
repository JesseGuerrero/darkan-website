import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./Highscores.scss"
import fetch from "node-fetch";
import HSHeader from "./components/HSHeader";
import HSSkillRankings from "./components/HSSkillRankings";
import HSNav from "./components/HSNav";
import {getSkillIDByName, getSkillLevelByXP} from "./SkillEnum";

function HighscoreSkill({props}) {
    let limit = 999
    let { skill, page } = useParams()
    page = parseInt(page)
    let skillID = getSkillIDByName(skill)
    const [userData, setUserData] = useState([]);
    const [usernameHighlight, searchUser] = useState('');
    const [pageState, setPageState] = useState(page);
    const isIronHS = typeof window !== 'undefined' ? window.location.pathname.includes("highscores-iron") : props.path.includes("highscores-iron")
    let pathHS= typeof window !== 'undefined' ? window.location.pathname.replace(/\d+/g, "") : props.path.replace(/\d+/g, "")
    const fetchSkillHighscoreJSON = async () => {
        let gamemode = isIronHS ? "ironman" : "all"
        const response = await fetch("https://darkan.org:8443/v1/highscores?page="+ page + "&limit=" + limit + "&gamemode=" + gamemode);
        let playerData = await response.json();
        playerData.sort(function (user1, user2) {
            if(user1.xp[skillID] < user2.xp[skillID])
                return 1
            else if(user1.xp[skillID] > user2.xp[skillID])
                return -1
            else if(user1.xp[skillID] == user2.xp[skillID])
                if(user1.xp[skillID] < user2.xp[skillID])
                    return 1
                else if(user1.xp[skillID] > user2.xp[skillID])
                    return -1
            return 0
        })
        playerData.sort();
        setUserData(playerData);
    };

    useEffect(() => {
        fetchSkillHighscoreJSON();
    }, [usernameHighlight, isIronHS, pageState]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="main-container-highscores">
                    <div className="sub-container-highscores">
                        <HSHeader props={props} page={page} userData={userData} searchUser={searchUser} setPageState={setPageState} isIronHS={isIronHS} pathHS={pathHS} limit={limit}/>
                        <HSSkillRankings pageState={pageState} userData={userData} skillID={skillID} usernameHighlight={usernameHighlight} limit={limit}/>
                        <HSNav pageState={pageState} pathHS={pathHS}/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HighscoreSkill;
