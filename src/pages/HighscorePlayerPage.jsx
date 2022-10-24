import React, {useEffect, useLayoutEffect, useState} from "react";
import "../stylesheets/highscores/HighscorePlayer.scss"
import {Link, useParams} from "react-router-dom";
import {getSkillIDByName, getSkillLevelByXP, getSkillNameByID, SKILL_NAME} from "../utils/constants";
import fetch from "node-fetch";

export default function HighscoresPlayerPage({props}) {
    let { displayName } = useParams()
    const [skillXP, setSkillXP] = useState([]);
    const [skillRanks, setSkillRanks] = useState([]);
    const [totalRank, setTotalRank] = useState();

    const onChangeHandler = async(event) => {//username search
        let displayName = event.target.value
        let pageChange = undefined
        let foundPlayer = false
        let foundPlayers = false
        if(displayName != undefined) {
            let response = undefined
            response = await fetch(`https://darkan.org:8443/v1/highscores?limit=9999999`);
            let playerData = await response.json();
            for(let i = 0; i < playerData.length; i++) {
                if (playerData[i].displayName == displayName) {
                    pageChange = Math.ceil((i+1) / 15)//15 is limit
                    foundPlayer = true
                    foundPlayers = false
                    break
                }
                if (playerData[i].displayName.includes(displayName)) {
                    if(!foundPlayers) {
                        pageChange = Math.ceil((i + 1) / 15)
                        foundPlayers = true
                    }
                }
            }
        }
        event.target.classList.remove("valid")
        event.target.classList.remove("invalid")
        event.target.classList.remove("multiple-valid")
        if(foundPlayer)
            event.target.classList.add("valid")
        if(foundPlayers && displayName != "")
            event.target.classList.add("multiple-valid")
        if(!foundPlayer && !foundPlayers)
            event.target.classList.add("invalid")
    }

    displayName = displayName.replace("+", " ")
    const fetchSkills = async () => {
        const response = await fetch("https://darkan.org:8443/v1/highscores?limit=9999999");
        let playerData = await response.json();
        let skillXPArr = []
        let skillRankArr = []
        let rank = -1;
        for(let i = 0; i < playerData.length; i++) {
            if(playerData[i].displayName === displayName) {
                for(let skillI = 0; skillI < 25; skillI++)
                    skillXPArr.push(playerData[i].xp[skillI])
                break
            }
        }
        function sortSkill(skillI) {
            if(skillI >=0 && skillI <= 24)
                return function (user1, user2) {
                    if (user1.xp[skillI] < user2.xp[skillI])
                        return 1
                    else if (user1.xp[skillI] > user2.xp[skillI])
                        return -1
                    else if (user1.xp[skillI] == user2.xp[skillI])
                        return -1
                    return 0
                }
            return function (user1, user2) {
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
            }
        }
        for(let i = 0; i < 25; i++) {
            playerData.sort(sortSkill(i));
            for(let j = 0; j < playerData.length; j++) {
                if(playerData[j].displayName === displayName) {
                    skillRankArr.push(j+1)
                }
            }
        }
        playerData.sort(sortSkill(-1))
        for(let i = 0; i < playerData.length; i++) {
            if(playerData[i].displayName === displayName) {
                rank = i+1;
            }
        }
        setSkillXP(skillXPArr)
        setSkillRanks(skillRankArr)
        setTotalRank(rank)
    };

    useEffect(() => {
        fetchSkills();
    }, [displayName]);

    const submitPlayerSearch = async(event) => {//username search
        let displayName = event.target.value
        const response = await fetch("https://darkan.org:8443/v1/highscores?limit=9999999");
        let playerData = await response.json();
        let foundPlayer = false
        for(let i = 0; i < playerData.length; i++)
            if(playerData[i].displayName == displayName) {
                foundPlayer = true
                break
            }
        if(foundPlayer && event.key === 'Enter') {
            let displayName = event.target.value.replace(" ", "+")
            if (typeof window !== 'undefined')
                window.location = "/highscores/player/" + displayName
        }
    }

    return (
        <header className="App-header">
            <div className="main-container-highscores-player">
                <div className="sub-container-highscores-player">
                    <div className="header-highscores-player">
                        <h1><span id="player-id">{displayName}</span></h1>
                        <div><h2><span id="player-rank">{totalRank}</span></h2></div>
                    </div>
                    <div className="sub-header-hs">
                        <h2 id="hs-overall">Overall Stats</h2>
                        <div className="flex flex-jc-c">
                            <input id="search-user-hs" type="text" name="Username" placeholder="Search Username" defaultValue="" onKeyPress={submitPlayerSearch} onChange={onChangeHandler}/>
                        </div>
                    </div>
                    <div className="flex flex-jc-c">
                        <table>
                            <thead>
                                <th id="rank">Rank</th>
                                <th id="player">Skill</th>
                                <th id="level">Level</th>
                                <th id="exp">Experience</th>
                            </thead>
                            {
                                SKILL_NAME.map(
                                    (skill, skillIndex) => {
                                        return (
                                            <tbody key={skillIndex}>
                                                <tr className="row-hover1">
                                                    <td>{skillRanks[skillIndex] == undefined ? undefined : skillRanks[skillIndex].toLocaleString("en-US")}</td>
                                                    <td id="player">
                                                        <div className="flex flex-ai-c"><img className="skill-icon" src={"/skill_icons/" + skill + ".png"}/><Link to={("/highscores/skill/" + skill + "/1")}>{skill}</Link></div>
                                                    </td>
                                                    <td>{getSkillLevelByXP(skillXP[skillIndex], skillIndex)}</td>
                                                    <td>{skillXP[skillIndex] == undefined ? undefined : skillXP[skillIndex].toLocaleString("en-US")}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    }
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>
        </header>
    )
}
