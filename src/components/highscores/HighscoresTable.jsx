import React, { useContext, useEffect, useState } from 'react';
import axios from '../../utils/axios';

import HighscoresContext from '../../utils/contexts/HighscoresContext';

export default function HighscoresTable() {

    let { category, setCategory, page, setPage, skill, setSkill } = useContext(HighscoresContext);

    let [ users, setUsers ] = useState([]);

    useEffect(() => {

        let fetchHighscores = async () => {

            try {

                if(category == 'iron')
                    category = 'ironman';

                let res = await axios.get(`/highscores?page=${page}&limit=15&gamemode=${category}`);

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
                            <tr key={user.displayName} className='row-hover1'>
                                <td id='player-rank'>{(page - 1) * 15 + index + 1}</td>
                                <td id='player'>{user.displayName}</td>
                                <td id='player-data-ttl'>{user.totalLevel.toLocaleString('en-US')}</td>
                                <td id='player-data-exp'>{user.totalXp.toLocaleString('en-US')}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
