import React from "react";

function HSRankings({pageState, userData, timePeriod, usernameHighlight, limit}) {
    function getXP(user) {
        let timeIndex = 0
        if(timePeriod == "7")
            timeIndex = 1
        if(timePeriod == "30")
            timeIndex = 2
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
                <th id="level">{timePeriod == "All" ? "Total Level" : ""}</th>
                <th id="exp">{timePeriod == "All" ? "Total Exp" : "Exp Gained"}</th>
                </thead>
                <tbody>
                {
                    //timePeriod == "All" ?
                        userData.map(function(user, index) {
                                return(<tr className="row-hover1">
                                    <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}><span id="player-rank">{userData.indexOf(user) + 1 + limit*(pageState-1)}</span></td>
                                    <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""} id="player"><a href={"/highscores/player/"+user.displayName.replace(" ", "+")}>{(user.ironman === true ? (
                                        <img className="iron-icon" src="/ironman_icon.png"/>) : (""))}{user.displayName}</a></td>
                                    <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}><p id="player-data-ttl">{user.totalLevel.toLocaleString("en-US")}</p></td>
                                    <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}><p id="player-data-exp">{user.totalXp.toLocaleString("en-US")}</p></td>
                                </tr>)
                            }
                        ) 
                        // : timeHS[timePeriod].map(function(user, index) {
                        //         return(<tr className="row-hover1">
                        //             <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}><span id="player-rank">{index + 1 + limit*(pageState-1)}</span></td>
                        //             <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""} id="player"><a href={"/highscores/player/"+user.displayName.replace(" ", "+")}>{user.displayName}</a></td>
                        //             <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}><p id="player-data-ttl">{}</p></td>
                        //             <td className={(user.displayName.includes(usernameHighlight) && usernameHighlight != "") ? "highlight" : ""}><p id="player-data-exp"></p><i><span className={colorGain(getXP(user))}> {getXP(user).toLocaleString("en-US") + "+"}</span></i></td>
                        //         </tr>)
                        // })
                }



                </tbody>
            </table>
        </div>
    )
}

export default HSRankings;
