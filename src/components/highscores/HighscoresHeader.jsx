import React, { useContext } from 'react';

import HighscoresContext from '../../utils/contexts/HighscoresContext.js';

import {getSkillIDByName, skills} from '../../utils/constants.js';

export default function HighscoresHeader() {
    let { category, setCategory, page, setPage, skill, setSkill, usernameHighlight, searchUser } = useContext(HighscoresContext);
    const onChangeHandler = async(event) => {//username search
        let displayName = event.target.value
        let pageChange = undefined
        let foundPlayer = false
        let foundPlayers = false
        if(displayName != undefined) {
            let response = undefined
            if(category == 'iron')
                category = 'ironman';
            if(skill === null)
                response = await fetch(`https://darkan.org:8443/v1/highscores?limit=9999999&gamemode=${category}`);
            if(skill !== null)
                response = await fetch(`https://darkan.org:8443/v1/highscores?limit=9999999&gamemode=${category}&skill=` + getSkillIDByName(skill));
            let playerData = await response.json();
            for(let i = 0; i < playerData.length; i++) {
                if (playerData[i].displayName == displayName) {
                    pageChange = Math.ceil((i+1) / 15)//15 is limit
                    foundPlayer = true
                    foundPlayers = false
                    break
                }
                if (playerData[i].displayName.includes(displayName)) {
                    if(!foundPlayers) {
                        pageChange = Math.ceil((i + 1) / 15)
                        foundPlayers = true
                    }
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
            setPage(page)
        if(pageChange != undefined)
            setPage(pageChange)
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
    return (
        <>
            <div className="header-highscores">
                <h1>Highscores</h1>
                <h2>Track, Compare, Achieve Rank #1</h2>
            </div>
            <div className="sub-header-hs">
                <h3 id="hs-overall">{skills[skill]}</h3>
                <div className="filter-container">
                    <div className="select-hs-container">
                        <div className="select-hs">
                            <select 
                                value={category} 
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                    setPage(1);
                                }} 
                                className="filter-account-hs"
                            >
                                <optgroup label="Game Mode"></optgroup>
                                <option value="all">All</option>
                                {/*<option value="regular">Regular</option>*/}
                                <option value="iron">Iron</option>
                            </select>
                            <select 
                                value={skill} 
                                onChange={(e) => {
                                    setSkill(e.target.value);
                                    setPage(1);
                                }}
                                className="filter-skill-hs"
                            >
                                <optgroup label="Skill"></optgroup>
                                { Object.keys(skills).map(key => {
                                    let value = skills[key];
                                    return (
                                        <option value={key} key={key}>{value}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-jc-c">
                    <input id="search-user-hs" type="text" placeholder="Search Username" defaultValue=""
                           onChange={onChangeHandler} onKeyPress={submitPlayerSearch}/>
                </div>
            </div>
        </>
    )
}
