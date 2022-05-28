import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Landing from './landing/Landing';
import Download from './download/Download';
import Highscores from './highscores/Highscores';

function PageRoutes(props) {
	return (
		<Routes>
			<Route exact path='/' element={<Landing />} />
			<Route path='/download' element={<Download />} />
			<Route path='/highscores' element={<Navigate to="/highscores/1"/>} />
			<Route path='/highscores/:page' element={<Highscores baseUrl = {props.baseUrl}/>} />
			{/* <Route path='/account/create' component={SignUp} />
          <Route path='/skillcalc/:skill' component={SkillCalculator} /> */}
		</Routes>
	);
}

export default PageRoutes;
