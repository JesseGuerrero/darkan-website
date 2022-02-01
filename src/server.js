import config from '../config.json';
import https from 'https';
import compression from 'compression';
import fs from 'fs';
import path from 'path';

import express from 'express';

const server = express();

// View engine setup
server.set('views', path.join(__dirname,'views'));
server.set('view engine', 'ejs');

// Middleware
server.use(compression());
server.use(express.static(__dirname + '/public'));

import api from './api';
server.use('/api', api);

//Routes
import index from "./routes/index";
server.use('/', index);

if (config.https) {
  const httpsServer = https.createServer({
    key: fs.readFileSync(config.keyPath),
    cert: fs.readFileSync(config.certPath),
  }, server);

  httpsServer.listen(443, '0.0.0.0', () => console.log('HTTPS successful on port 443.'));
} else {
  server.listen(config.port, '0.0.0.0', () => console.log('HTTP successful on port ' + config.port));
}
