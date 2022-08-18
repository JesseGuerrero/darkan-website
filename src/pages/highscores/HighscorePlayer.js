import React, {useEffect, useLayoutEffect, useState} from "react";
import "./HighscorePlayer.scss"
import {useParams} from "react-router-dom";
import {getSkillLevelByXP, getSkillNameByID, SKILL_NAME} from "./SkillEnum";
import fetch from "node-fetch";
import timeHSSkill from "./components/timeHSSkill.json";

function HighscoresPlayer({props}) {
    let { displayName } = useParams()
    const [skillXP, setSkillXP] = useState([]);
    const [timePeriod, setTimePeriod] = useState('All');
    const [skillRanks, setSkillRanks] = useState([]);
    const [totalRank, setTotalRank] = useState();

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
    useLayoutEffect(() => {
        if (sessionStorage.getItem('timePeriod')) {
            setTimePeriod(sessionStorage.getItem('timePeriod'))
        } else {
            sessionStorage.setItem('timePeriod', timePeriod)
        }
    }, [])

    useEffect(() => {
        fetchSkills();
        sessionStorage.setItem("timePeriod", timePeriod);
    }, [displayName, timePeriod]);

    const submitPlayerSearch = event => {//username search
        if(event.key === 'Enter') {
            let displayName = event.target.value.replace(" ", "+")
            if (typeof window !== 'undefined')
                window.location = "/highscores/player/" + displayName
        }
    }

    const goBetweenTimePeriods = event => {
        setTimePeriod(event.target.value)
    }

    function getXP(username, skillID) {
        if(timePeriod == "All")
            return 0
        let user = timeHSSkill[username]
        if(user == undefined || user[timePeriod] == -1)
            return -1
        return user[timePeriod][skillID]
    }
    function colorGain(username, skillID) {
        if(timePeriod == "All" || getXP(username) < 0)
            return "none"
        if(getXP(username, skillID) == 0)
            return "grey"
        return "green"
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="main-container-highscores-player">
                    <div className="sub-container-highscores-player">
                        <div className="header-highscores-player">
                            <h1><span id="player-id">{displayName}</span></h1>
                            <div><h2><span id="player-rank">{totalRank}</span></h2></div>
                        </div>
                        <div className="sub-header-hs">
                            <h2 id="hs-overall">Overall Stats</h2>
                            <select value={timePeriod} onChange={goBetweenTimePeriods} className="time-filter">
                                <optgroup label="Time period"></optgroup>
                                <option value="All">All time</option>
                                <option value="30">Monthly</option>
                                <option value="7">Weekly</option>
                                <option value="1">Daily</option>
                            </select>
                            <div className="flex flex-jc-c">
                                <input id="search-user-hs" type="text" name="Username" placeholder="Search Username" defaultValue="" onKeyPress={submitPlayerSearch}/>
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
                                                <tbody>
                                                    <tr className="row-hover1">
                                                        <td>{skillRanks[skillIndex] == undefined ? undefined : skillRanks[skillIndex].toLocaleString("en-US")}</td>
                                                        <td id="player">
                                                            <div className="flex flex-ai-c"><img className="skill-icon" src={"/skill_icons/" + skill + ".png"}/><a href={("/highscores/skill/" + skill + "/1")}>{skill}</a><i><span className={colorGain(displayName, skillIndex)}> {((getXP(displayName, skillIndex)).toLocaleString("en-US") + "+")}</span></i></div>
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
        </div>
    )
}

export default HighscoresPlayer;
