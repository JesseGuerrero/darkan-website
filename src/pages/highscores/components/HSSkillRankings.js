import React from "react";
import {getSkillLevelByXP} from "../SkillEnum";
function HSSkillRankings({pageState, userData, skillID, usernameHighlight}) {
    return (
        <div className="flex flex-jc-c">
            <table>
                {userData.map(
                    (user) => {
                        if (userData.indexOf(user) >= 15 * (pageState - 1) && userData.indexOf(user) < 15 * pageState) //get page rank range
                            return (<thead>
                            <th className={(user.username.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                id="rank">{userData.indexOf(user) + 1}</th>
                            <th className={(user.username.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                id="player">{user.username}{(user.ironman == true ? (
                                <img className="iron-icon" src="/ironman_icon.png"/>) : (""))}</th>
                            <th className={(user.username.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                id="level">{getSkillLevelByXP(user.xp[skillID])}</th>
                            <th className={(user.username.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}
                                id="exp">{user.xp[skillID]}</th>
                            </thead>)
                    }
                )}
            </table>
        </div>
    )
}
export default HSSkillRankings;
