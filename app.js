const config = require('./config.json');
const createError = require('http-errors');
const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');
express.static.mime.types['wasm'] = 'application/wasm'

const app = express();
const webPort = config.port;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


/* GET home page. */
app.get('/', (req, res, next) => {
  console.log(req.socket.remoteAddress)
  res.render('home', { title: 'Express' });
});

app.post('/posty', (request, response) => {
  console.log(request.body)
})

app.get('/create-account', (req, res, next) => {
  res.render('create-account', {})
});

app.get('/login', (req, res, next) => {
  res.render('login', {})
});

app.get('/download', (req, res, next) => {
  res.render('download', {})
});

app.get('/features', (req, res, next) => {
  res.render('features', {})
});

app.get('/guides', (req, res, next) => {
  res.render('guides', {})
});

app.get('/highscores', (req, res, next) => {
  res.render('highscores', {})
});

app.get('/tools', (req, res, next) => {
  res.render('tools', {})
});

app.get('/ge-tracker', (req, res, next) => {
  res.render('ge-tracker', {})
});

app.get('/skill-calculator', (req, res, next) => {
  res.render('skill-calculator', {})
});

app.get('/skill-calculator-attack', (req, res, next) => {
  res.render('skill-calculator-attack', {})
});

app.get('/skill-calculator-strength', (req, res, next) => {
  res.render('skill-calculator-strength', {})
});

app.get('/skill-calculator-defense', (req, res, next) => {
  res.render('skill-calculator-defense', {})
});

app.get('/skill-calculator-ranged', (req, res, next) => {
  res.render('skill-calculator-ranged', {})
});

app.get('/skill-calculator-magic', (req, res, next) => {
  res.render('skill-calculator-magic', {})
});

app.get('/skill-calculator-prayer', (req, res, next) => {
  res.render('skill-calculator-prayer', {})
});

app.get('/skill-calculator-summoning', (req, res, next) => {
  res.render('skill-calculator-summoning', {})
});

app.get('/skill-calculator-runecrafting', (req, res, next) => {
  res.render('skill-calculator-runecrafting', {})
});

app.get('/skill-calculator-construction', (req, res, next) => {
  res.render('skill-calculator-construction', {})
});

app.get('/skill-calculator-dungeoneering', (req, res, next) => {
  res.render('skill-calculator-dungeoneering', {})
});

app.get('/skill-calculator-agility', (req, res, next) => {
  res.render('skill-calculator-agility', {})
});

app.get('/skill-calculator-herblore', (req, res, next) => {
  res.render('skill-calculator-herblore', {})
});

app.get('/skill-calculator-theiving', (req, res, next) => {
  res.render('skill-calculator-theiving', {})
});

app.get('/skill-calculator-crafting', (req, res, next) => {
  res.render('skill-calculator-crafting', {})
});

app.get('/skill-calculator-fletching', (req, res, next) => {
  res.render('skill-calculator-fletching', {})
});

app.get('/skill-calculator-slayer', (req, res, next) => {
  res.render('skill-calculator-slayer', {})
});

app.get('/skill-calculator-hunter', (req, res, next) => {
  res.render('skill-calculator-hunter', {})
});

app.get('/skill-calculator-mining', (req, res, next) => {
  res.render('skill-calculator-mining', {})
});

app.get('/skill-calculator-smithing', (req, res, next) => {
  res.render('skill-calculator-smithing', {})
});

app.get('/skill-calculator-fishing', (req, res, next) => {
  res.render('skill-calculator-fishing', {})
});

app.get('/skill-calculator-cooking', (req, res, next) => {
  res.render('skill-calculator-cooking', {})
});

app.get('/skill-calculator-firemaking', (req, res, next) => {
  res.render('skill-calculator-firemaking', {})
});

app.get('/skill-calculator-woodcutting', (req, res, next) => {
  res.render('skill-calculator-woodcutting', {})
});

app.get('/skill-calculator-farming', (req, res, next) => {
  res.render('skill-calculator-farming', {})
});

app.get('/bug-reporter', (req, res, next) => {
  res.render('bug-reporter', {})
});

app.get('/world-map', (req, res, next) => {
  res.render('world-map', {})
});

app.get('/api', (req, res, next) => {
  res.render('api', {})
});

app.get('/terms', (req, res, next) => {
  res.render('terms', {})
});

app.get('/privacy-policy', (req, res, next) => {
  res.render('privacy-policy', {})
});

if (config.https) {
  const httpsServer = https.createServer({
    key: fs.readFileSync(config.keyPath),
    cert: fs.readFileSync(config.certPath),
  }, app);

  httpsServer.listen(443, '0.0.0.0', () => console.log('HTTPS successful on port 443.'));
} else {
  app.listen(webPort, '0.0.0.0', () => console.log('HTTP successful on port ' + webPort));
}

module.exports = app;
