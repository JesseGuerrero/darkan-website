import React, {useState} from 'react';

import GlobalHeader from './components/GlobalHeader/GlobalHeader';
import GlobalFooter from "./components/GlobalFooter/GlobalFooter";
import BodyWrapper from "./components/BodyWrapper/BodyWrapper";
import Landing from "./components/Landing/Landing";
import Highscores from "./components/Highscores/Highscores";


function App(props) {
    const [view, changeView] = useState(<Landing />)
    function chooseView(viewName) {
        if(viewName.localeCompare('Highscores')) {
            changeView(<Highscores />)
        }
    }
  return (
    <div>
        <GlobalHeader onChangeView={chooseView} />
        <BodyWrapper currentView={view}/>
        <GlobalFooter />
    </div>
  );
}

export default App;
