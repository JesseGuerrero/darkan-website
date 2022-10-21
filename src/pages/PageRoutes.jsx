import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import IndexPage from "./IndexPage.jsx";
import HighscoresPage from "./HighscoresPage.jsx";

function PageRoutes({props}) {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />} />
			<Route path="/highscores" element={<HighscoresPage />} />
			<Route path="/highscores/:category" element={<HighscoresPage />} />
			<Route path="/highscores/:category/:page" element={<HighscoresPage />} />
			<Route path="/highscores/:category/:skill/:page" element={<HighscoresPage />} />
		</Routes>
	);
}

export default PageRoutes;
