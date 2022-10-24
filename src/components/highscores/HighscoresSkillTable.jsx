import React, {useContext, useEffect, useState} from "react";
import HighscoresContext from "../../utils/contexts/HighscoresContext";
import axios from "../../utils/axios";
import {getSkillIDByName, getSkillLevelByXP} from "../../utils/constants";

export default function HighscoresSkillTable() {
    let { category, setCategory, page, setPage, skill, setSkill } = useContext(HighscoresContext);

    let [ users, setUsers ] = useState([]);

    useEffect(() => {

        let fetchHighscores = async () => {

            try {

                if(category == 'iron')
                    category = 'ironman';

                let res = await axios.get(`/highscores?page=${page}&limit=15&gamemode=${category}&skill=${getSkillIDByName(skill)}`);

                setUsers(res.data);

            } catch(error) {
                console.error(error);
            }

        };

        fetchHighscores();

    }, [ category, page, skill ]);

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
                        users.map(function(user) {
                                return (<tr className="row-hover1">
                                    <td id="rank">{(users.indexOf(user) + 1 + 15*(page-1)).toLocaleString("en-US")}</td>
                                    <td id="player">
                                        {
                                            (user.ironman === true ? (<img className="iron-icon" src="/ironman_icon.png"/>) : (""))
                                        }
                                        {user.displayName}
                                    </td>
                                    <td id="level">{getSkillLevelByXP(user.xp[getSkillIDByName(skill)], getSkillIDByName(skill))}</td>
                                    <td id="exp">{user.xp[getSkillIDByName(skill)].toLocaleString("en-US")}</td>
                                </tr>)
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
