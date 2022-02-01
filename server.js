const config = require('./config.json');
const createError = require('http-errors');
const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');
express.static.mime.types['wasm'] = 'application/wasm'

const app = express();
const webPort = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/'));

if (config.https) {
  const httpsServer = https.createServer({
    key: fs.readFileSync(config.keyPath),
    cert: fs.readFileSync(config.certPath),
  }, app);

  httpsServer.listen(443, '0.0.0.0', () => console.log('HTTPS successful on port 443.'));
} else {
  app.listen(webPort, '0.0.0.0', () => console.log('HTTP successful on port ' + webPort));
}