import React, {useState} from 'react';

import GlobalHeader from './components/GlobalHeader/GlobalHeader';
import GlobalFooter from "./components/GlobalFooter/GlobalFooter";
import BodyWrapper from "./components/BodyWrapper/BodyWrapper";
import Landing from "./components/Landing/Landing";
import Highscores from "./components/Highscores/Highscores";


function App(props) {
    const [bodyWrapper, changeBodyWrapper] = useState(<Landing />)
    function chooseView(viewName) {
        if(viewName == "Highscores") {
            changeBodyWrapper(<BodyWrapper currentView={<Highscores />} />)
        }
    }
  return (
    <div>
        <GlobalHeader onChangeView={chooseView} />
        {bodyWrapper/*Eventually we will learn to pass the state down and make this cleaner... I only know up*/}
        <GlobalFooter />
    </div>
  );
}

export default App;
