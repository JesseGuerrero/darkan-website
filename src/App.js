import React from 'react';

import GlobalHeader from './components/global-header/GlobalHeader';
import GlobalFooter from "./components/global-footer/GlobalFooter";
import LandingView from "./components/LandingView/LandingView";


function App(props) {
  return (
    <div className='App'>
        <GlobalHeader />
        <LandingView />
        <GlobalFooter />
    </div>
  );
}

export default App;
