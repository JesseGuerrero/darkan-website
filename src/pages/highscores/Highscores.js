import React, {useState, useEffect, useLayoutEffect} from "react";
import { useParams } from 'react-router-dom'
import "./Highscores.scss"
import fetch from "node-fetch";
import HSHeader from "./components/HSHeader";
import HSNav from "./components/HSNav";
import HSRankings from "./components/HSRankings";

function Highscores({props}) {
    let limit = 15;
    let { page } = useParams()
    page = parseInt(page)
    const [userData, setUserData] = useState([]);
    const [timePeriod, setTimePeriod] = useState('All');
    const [usernameHighlight, searchUser] = useState('');
    const [pageState, setPageState] = useState(page);

    let isIronHS = false
    if(typeof window !== 'undefined')
        isIronHS = window.location.href.includes("highscores-iron")
    if(typeof window === 'undefined')
        isIronHS = props.url.includes("highscores-iron")

    let pathHS= typeof window !== 'undefined' ? window.location.pathname.replace(/\d+/g, "") : props.path.replace(/\d+/g, "")
    const fetchHighscoreJSON = async () => {
        let gamemode = isIronHS ? "ironman" : "all"
        const response = await fetch("https://darkan.org:8443/v1/highscores?page="+ pageState + "&limit=" + limit + "&gamemode=" + gamemode);
        let playerData = await response.json();
        setUserData(playerData);
    };

    useLayoutEffect(() => {
        if (sessionStorage.getItem('timePeriod')) {
            setTimePeriod(sessionStorage.getItem('timePeriod'))
        } else {
            sessionStorage.setItem('timePeriod', timePeriod)
        }
    }, [])

    useEffect(() => {
        fetchHighscoreJSON();
        sessionStorage.setItem("timePeriod", timePeriod);
    }, [usernameHighlight, isIronHS, pageState, timePeriod]);

  return (
      <div className="App">
          <header className="App-header">
              <div className="main-container-highscores">
                  <div className="sub-container-highscores">
                     <HSHeader props={props} page={page} userData={userData} searchUser={searchUser} setPageState={setPageState} setTimePeriod={setTimePeriod} timePeriod={timePeriod} isIronHS={isIronHS} pathHS={pathHS} limit={limit} skillID={null}/>
                     <HSRankings pageState={pageState} userData={userData} timePeriod={timePeriod} usernameHighlight={usernameHighlight} limit={limit}/>
                     <HSNav pageState={pageState} pathHS={pathHS}/>
                  </div>
              </div>
          </header>
      </div>
  );
}
export default Highscores;
