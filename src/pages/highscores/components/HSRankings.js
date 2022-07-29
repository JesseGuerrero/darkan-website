import React from "react";
function HSRankings({pageState, userData, usernameHighlight, limit}) {
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
                {userData.map(user => {
                        return(<tr className="row-hover1">
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}><span id="player-rank">{userData.indexOf(user) + 1 + limit*(pageState-1)}</span></td>
                            <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""} id="player"><a href={"/highscores/player/"+user.displayName.replace(" ", "+")}>{user.displayName}{(user.ironman === true ? (
                                <img className="iron-icon" src="/ironman_icon.png"/>) : (""))}</a></td>
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
