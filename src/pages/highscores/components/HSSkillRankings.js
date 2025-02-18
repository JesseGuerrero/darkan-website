import React from "react";
import {getSkillLevelByXP, getSkillNameByID} from "../SkillEnum";

function HSSkillRankings({pageState, userData, skillID, usernameHighlight, limit}) {
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
                            userData.map(function(user) {
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
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default HSSkillRankings;
