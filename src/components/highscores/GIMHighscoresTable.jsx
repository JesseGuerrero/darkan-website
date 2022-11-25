import React, { useContext, useEffect, useState } from 'react';
import axios from '../../utils/axios.js';

import HighscoresContext from '../../utils/contexts/HighscoresContext.js';
import {Link} from "react-router-dom";

export default function HighscoresTable() {

    let { category, setCategory, page, setPage, skill, setSkill, usernameHighlight, searchUser } = useContext(HighscoresContext);

    let [ users, setUsers ] = useState([]);

    useEffect(() => {

        let fetchHighscores = async () => {

            try {
                let res = await axios.get(`/gim_highscores?page=${page}&limit=15`);

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
                    <tr>
                        <th id='rank'>Rank</th>
                        <th id='player'>Player</th>
                        <th id='level'>Level</th>
                        <th id='exp'>Experience</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, index) => {
                        return (
                            <tr key={user.groupName}>
                                <td id='player-rank'>{(page - 1) * 15 + index + 1}</td>
                                <td id='player'>
                                    {user.groupDisplayName}
                                </td>
                                <td id='player-data-ttl'>{user.averageTotalLevel.toLocaleString('en-US')}</td>
                                <td id='player-data-exp'>{user.totalXp.toLocaleString('en-US')}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
