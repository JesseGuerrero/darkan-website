import React from "react";
import "../Highscores.scss"
import {getSkillIDByName} from "../SkillEnum";
import fetch from "node-fetch";


function HSHeader({ props, page, userData, searchUser, setPageState, setTimePeriod, timePeriod, isIronHS, pathHS, limit, skillID}) {
    const onChangeHandler = async(event) => {//username search
        let displayName = event.target.value
        let pageChange = undefined
        let foundPlayer = false
        let foundPlayers = false
        if(displayName != undefined) {
            const response = await fetch("https://darkan.org:8443/v1/highscores?limit=9999999");
            let playerData = await response.json();
            if(skillID !== null) {
                playerData.sort(function (user1, user2) {
                    if(user1.xp[skillID] < user2.xp[skillID])
                        return 1
                    else if(user1.xp[skillID] > user2.xp[skillID])
                        return -1
                    else if(user1.xp[skillID] == user2.xp[skillID])
                        if(user1.xp[skillID] < user2.xp[skillID])
                            return 1
                        else if(user1.xp[skillID] > user2.xp[skillID])
                            return -1
                    return 0
                })
                playerData.sort()
            }
            for(let i = 0; i < playerData.length; i++) {
                if (playerData[i].displayName == displayName) {
                    pageChange = Math.ceil((i+1) / limit)
                    foundPlayer = true
                    foundPlayers = false
                    break
                }
                if (playerData[i].displayName.includes(displayName)) {
                    pageChange = Math.ceil((i+1) / limit)
                    foundPlayers = true
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

        if(pageChange == undefined)
            setPageState(page)
        if(pageChange != undefined)
            setPageState(pageChange)
        searchUser(displayName)
    }
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
            displayName = event.target.value.replace(" ", "+")
            if (typeof window !== 'undefined')
                window.location = "/highscores/player/" + displayName
        }
    }
    const goBetweenTimePeriods = event => {
        setTimePeriod(event.target.value)
    }
    const goBetweenAccountTypes = event => {
        if(typeof window !== 'undefined') {
            if(event.target.value.includes("iron")) {
                window.location = pathHS.replace("/highscores/", "/highscores-iron/") + "1"
                return
            }
            window.location = pathHS.replace("/highscores-iron/", "/highscores/") + "1"
        }
    }
    const goToSelectSkill = event => {
        if(typeof window !== 'undefined') {
            let skillName = event.target.options[event.target.selectedIndex].text
            if(skillName.includes("All")) {
                window.location = isIronHS ? "/highscores-iron/all/1" : "/highscores/all/1"
                return
            }
            window.location = isIronHS ? "/highscores-iron/skill/" + skillName + "/1" : "/highscores/skill/" + skillName + "/1"
        }
    }
    function getSelectedSkill() {
        if(typeof window !== 'undefined') {
            if(window.location.href.includes("/all/")) {
                return "Overall"
            }
            if(window.location.href.includes("/skill/")) {
                let url = window.location.pathname
                url = url.replace("/highscores/skill/", "")
                url = url.replace("/highscores-iron/skill/", "")
                url = url.replace(/\d+/g, "")
                url = url.replace("/", "")
                return url
            }
        }
        if(typeof window === 'undefined') {
            let url = props.path
            url = url.replace("/highscores/skill/", "")
            url = url.replace("/highscores-iron/skill/", "")
            url = url.replace(/\d+/g, "")
            url = url.replace("/", "")
            return url
        }
    }
    return (
        <div>
            <div className="header-highscores">
                <h1>Highscores</h1>
                <h2>Track, Compare, Achieve Rank #1</h2>
            </div>
            <div className="sub-header-hs">
                <h3 className="hide-for-mobile" id="hs-overall">{getSelectedSkill()}</h3>
                <div className="filter-container">
                    <div className="select-hs-container">
                        <div className="select-hs">
                            <select value={timePeriod} onChange={goBetweenTimePeriods} className="filter-time-hs">
                                <optgroup label="Time period"></optgroup>
                                <option value="All">All time</option>
                                <option value="30">Monthly</option>
                                <option value="7">Weekly</option>
                                <option value="1">Daily</option>
                            </select>
                            <select onChange={goBetweenAccountTypes} className="filter-account-hs">
                                <optgroup label="Account type"></optgroup>
                                <option value="all">All accounts</option>
                                {/*<option>Regular</option>*/}
                                <option value="iron" selected={isIronHS}>Ironman</option>
                            </select>
                            <select defaultValue={getSkillIDByName(getSelectedSkill())} onChange={goToSelectSkill} className="filter-skill-hs">
                                <optgroup label="Skill"></optgroup>
                                <option value={-1}>All Skills</option>
                                <option value={0}>Attack</option>
                                <option value={1}>Defence</option>
                                <option value={2}>Strength</option>
                                <option value={3}>Constitution</option>
                                <option value={4}>Ranged</option>
                                <option value={5}>Prayer</option>
                                <option value={6}>Magic</option>
                                <option value={7}>Cooking</option>
                                <option value={8}>Woodcutting</option>
                                <option value={9}>Fletching</option>
                                <option value={10}>Fishing</option>
                                <option value={11}>Firemaking</option>
                                <option value={12}>Crafting</option>
                                <option value={13}>Smithing</option>
                                <option value={14}>Mining</option>
                                <option value={15}>Herblore</option>
                                <option value={16}>Agility</option>
                                <option value={17}>Thieving</option>
                                <option value={18}>Slayer</option>
                                <option value={19}>Farming</option>
                                <option value={20}>Runecrafting</option>
                                <option value={21}>Hunter</option>
                                <option value={22}>Construction</option>
                                <option value={23}>Summoning</option>
                                <option value={24}>Dungeoneering</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-jc-c">
                    <input id="search-user-hs" type="text" placeholder="Search Username" defaultValue=""
                           onChange={onChangeHandler} onKeyPress={submitPlayerSearch}/>
                </div>
            </div>
        </div>
    )
}

export default HSHeader;
