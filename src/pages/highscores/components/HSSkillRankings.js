import React from "react";
import {getSkillLevelByXP} from "../SkillEnum";
function HSSkillRankings({pageState, userData, skillID, usernameHighlight}) {
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
                    {userData.map(user => {
                        return (<tr className="row-hover1">
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                id="rank">{(userData.indexOf(user) + 1).toLocaleString("en-US")}</td>
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                id="player">{user.displayName}{(user.ironman == true ? (
                                <img className="iron-icon" src="/ironman_icon.png"/>) : (""))}</td>
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
