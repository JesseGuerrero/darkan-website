import React, { useContext } from 'react';

import HighscoresContext from '../../utils/contexts/HighscoresContext.js';

import { skills } from '../../utils/constants.js';

export default function HighscoresHeader() {

    let { category, setCategory, page, setPage, skill, setSkill, timePeriod, setTimePeriod } = useContext(HighscoresContext);

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
                                <option value="regular">Regular</option>
                                <option value="iron">Iron</option>
                            </select>
                            <select 
                                value={skill} 
                                onChange={(e) => console.log(e)} 
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
                    <input id="search-user-hs" type="text" placeholder="Search Username" />
                </div>
            </div>
        </>
    )
}
