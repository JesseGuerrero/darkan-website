import React from "react";
import "../Highscores.scss"
import {getSkillIDByName} from "../SkillEnum";


function HSHeader({ props, page, userData, searchUser, setPageState, isIronHS, pathHS}) {
    const onChangeHandler = event => {//username search
        let username = event.target.value
        let pageChange = undefined
        if(username != undefined)
            for(let i = 0; i < userData.length; i++)
                if(userData[i].username == username)
                    pageChange = Math.ceil(i/15.0)
        if(pageChange == undefined)
            setPageState(page)
        if(pageChange != undefined)
            setPageState(pageChange)
        searchUser(username)
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
                <h2 id="hs-overall">{getSelectedSkill()}</h2>
                <div className="flex flex-jc-c">
                    <div className="select-hs flex">
                        <select className="filter-time-hs">
                            <optgroup label="Time period"></optgroup>
                            <option>All-time</option>
                            <option>Monthly</option>
                            <option>Weekly</option>
                            <option>Daily</option>
                        </select>
                        <select onChange={goBetweenAccountTypes} className="filter-account-hs">
                            <optgroup label="Account type"></optgroup>
                            <option value="all">All types</option>
                            {/*<option value="">Regular</option>*/}
                            <option value="iron" selected={isIronHS}>Ironman</option>
                            {/*<option>Hardcore Ironman</option>*/}
                            {/*<option>Ultimate Ironman</option>*/}
                        </select>
                        <select defaultValue={getSkillIDByName(getSelectedSkill())} onChange={goToSelectSkill} className="filter-skill-hs">
                            <optgroup label="Skill"></optgroup>
                            <option value={-1}>All</option>
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
                <div className="flex flex-jc-c">
                    <input id="search-user-hs" type="text" placeholder="Search Username" defaultValue=""
                           onChange={onChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default HSHeader;
