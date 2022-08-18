import React from "react";
import timeHS from "./timeHS"

function HSRankings({pageState, userData, timePeriod, usernameHighlight, limit}) {
    function getXP(username) {
        if(timePeriod == "All")
            return 0
        let user = timeHS[username]
        if(user == undefined)
            return -1
        return user[timePeriod]
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
                <th id="level">Total Level</th>
                <th id="exp">Total Exp</th>
                </thead>
                <tbody>
                {userData.map(function(user, index) {
                        return(<tr className="row-hover1">
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}><span id="player-rank">{userData.indexOf(user) + 1 + limit*(pageState-1)}</span></td>
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""} id="player"><a href={"/highscores/player/"+user.displayName.replace(" ", "+")}>{(user.ironman === true ? (
                                <img className="iron-icon" src="/ironman_icon.png"/>) : (""))}{user.displayName}</a><i><span className={colorGain(user.displayName)}> {(getXP(user.displayName)).toLocaleString("en-US") + "+"}</span></i></td>
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}><p id="player-data-ttl">{user.totalLevel.toLocaleString("en-US")}</p></td>
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}><p id="player-data-exp">{user.totalXp.toLocaleString("en-US")}</p></td>
                        </tr>)
                    }
                )}
                </tbody>
            </table>
        </div>
    )
}

export default HSRankings;
