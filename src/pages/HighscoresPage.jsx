import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import '../stylesheets/highscores/Highscores.scss';

import { skills } from '../utils/constants';

import HighscoresHeader from '../components/highscores/HighscoresHeader.jsx';
import HighscoresTable from '../components/highscores/HighscoresTable.jsx';
import HighscoresContext from '../utils/contexts/HighscoresContext.js';
import HighscoresNavigation from "../components/highscores/HighscoresNavigation.jsx";
import HighscoresSkillTable from "../components/highscores/HighscoresSkillTable.jsx";

export default function HighscoresPage() {

    let { category: categoryParam, page: pageParam, skill: skillParam } = useParams();

    let [ category, setCategory ] = useState(categoryParam);
    let [ page, setPage ] = useState(pageParam);
    let [ skill, setSkill ] = useState(skillParam);
    
    let highscoresProvider = useMemo(() => ({ page, setPage, category, setCategory, skill, setSkill }), [ page, setPage, category, setCategory, skill, setSkill ]);

    useEffect(() => {

        if(!category)
            setCategory('all');

        if(!page || isNaN(page))
            setPage(1);

        if(skill)
            skill = skill.toLowerCase();

        if(!skill || !skills[skill.toLowerCase()])
            skill = 'overall';
        
        setSkill(skill);

        window.history.replaceState(null, '', `/highscores/${category}/${skill}/${page}`);

    }, [ category, page ]);

    return (
        <HighscoresContext.Provider value={highscoresProvider}>
            <div className='main-container-highscores'>
                <div className='sub-container-highscores'>
                    <HighscoresHeader />
                    {skill == "overall" ? <HighscoresTable /> : <HighscoresSkillTable />}
                    <HighscoresNavigation />
                </div>
            </div>
        </HighscoresContext.Provider>
    )
}
