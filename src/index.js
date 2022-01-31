import config from './config.json';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './index.css';

import https from 'https';
import fs from 'fs';

import express from 'express';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.use('/api', require('./routes'));

server.get('/', (req, res) => {
  const isMobile = true;
  const startState = { isMobile };
  const appString = renderToString(<BrowserRouter><App/></BrowserRouter>);
  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(startState)
  }));
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
