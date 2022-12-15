import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
const axios = require('axios');

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;




renderMethod(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
