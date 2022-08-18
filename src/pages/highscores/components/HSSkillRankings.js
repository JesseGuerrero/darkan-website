import React from "react";
import {getSkillLevelByXP} from "../SkillEnum";
import timeHSSkill from "./timeHSSkill.json";
function HSSkillRankings({pageState, userData, timePeriod, skillID, usernameHighlight, limit}) {
    function getXP(username) {
        if(timePeriod == "All")
            return 0
        let user = timeHSSkill[username]
        if(user == undefined || user[timePeriod] == -1)
            return -1
        return user[timePeriod][skillID]
    }
    function colorGain(username) {
        if(timePeriod == "All" || getXP(username) < 0)
            return "none"
        if(getXP(username) == 0)
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
                    {userData.map(function(user, index) {
                        return (<tr className="row-hover1">
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                id="rank">{(userData.indexOf(user) + 1 + limit*(pageState-1)).toLocaleString("en-US")}</td>
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                id="player"><a href={"/highscores/player/"+user.displayName.replace(" ", "+")}>{(user.ironman == true ? (
                                <img className="iron-icon" src="/ironman_icon.png"/>) : (""))}{user.displayName}</a><i><span className={colorGain(user.displayName)}> {(getXP(user.displayName)).toLocaleString("en-US") + "+"}</span></i></td>
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                id="level">{getSkillLevelByXP(user.xp[skillID], skillID)}</td>
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                id="exp">{user.xp[skillID].toLocaleString("en-US")}</td>
                        </tr>)
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default HSSkillRankings;
