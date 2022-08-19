import React from "react";
import {getSkillLevelByXP, getSkillNameByID} from "../SkillEnum";
import timeHSSkill from "./timeHSSkill.json";

function HSSkillRankings({pageState, userData, timePeriod, skillID, usernameHighlight, limit}) {
    function getXP(user) {
        let timeIndex = 0
        if(timePeriod == "7")
            timeIndex = 1
        if(timePeriod == "30")
            timeIndex = 2
        console.log(timePeriod + " " + user.displayName + " " + user.times[timeIndex])
        return user.times[timeIndex]
    }
    function colorGain(xp) {
        if(timePeriod == "All" || xp < 0)
            return "none"
        if(xp == 0)
            return "grey"
        return "green"
    }
    return (
        <div className="hs-table flex flex-jc-c">
            <table>
                <thead>
                <th id="rank">Rank</th>
                <th id="player">Player</th>
                <th id="level">Level</th>
                <th id="exp">Experience</th>
                </thead>
                <tbody>
                    {
                        timePeriod == "All" ?
                            userData.map(function(user, index) {
                                    return (<tr className="row-hover1">
                                        <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                            id="rank">{(userData.indexOf(user) + 1 + limit*(pageState-1)).toLocaleString("en-US")}</td>
                                        <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                            id="player"><a href={"/highscores/player/"+user.displayName.replace(" ", "+")}>{(user.ironman == true ? (
                                            <img className="iron-icon" src="/ironman_icon.png"/>) : (""))}{user.displayName}</a></td>
                                        <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                            id="level">{getSkillLevelByXP(user.xp[skillID], skillID)}</td>
                                        <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                            id="exp">{user.xp[skillID].toLocaleString("en-US")}</td>
                                    </tr>)
                                }
                            ) : timeHSSkill[timePeriod][getSkillNameByID(skillID)].map(function(user, index) {
                                return(<tr className="row-hover1">
                                    <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                        id="rank">{index + 1 + limit*(pageState-1).toLocaleString("en-US")}</td>
                                    <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""} id="player"><a href={"/highscores/player/"+user.displayName.replace(" ", "+")}>{user.displayName}</a></td>
                                    <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                        id="level"></td>
                                    <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}><p id="player-data-exp"></p><i><span className={colorGain(getXP(user))}> {getXP(user).toLocaleString("en-US") + "+"}</span></i></td>
                                </tr>)
                            })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default HSSkillRankings;
