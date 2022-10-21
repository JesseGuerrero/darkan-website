import config from '../config.json';

import path from 'path';
import fs from 'fs';

import https from 'https';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import express from 'express';

import App from '../src/App.jsx';

const server = express();

// import api from './api/index.js';
// server.use('/api', api);

server.use(express.static(path.resolve('./build/'), {index: false}));
server.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App props={req} />
    </StaticRouter>
  );
  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`));
  });
});

if (config.https) {
  const httpsServer = https.createServer({
    key: fs.readFileSync(config.keyPath),
    cert: fs.readFileSync(config.certPath),
  }, server);

  httpsServer.listen(443, '0.0.0.0', () => console.log('HTTPS successful on port 443.'));
} else {
  server.listen(config.port, '0.0.0.0', () => console.log('HTTP successful on port ' + config.port));
}

export {config}
