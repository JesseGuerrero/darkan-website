var createError = require('http-errors');
var express = require('express');
var path = require('path');
express.static.mime.types['wasm'] = 'application/wasm'

var app = express();
const webPort = 5555;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


/* GET home page. */
app.get('/', function(req, res, next) {
  console.log(req.socket.remoteAddress)
  res.render('home', { title: 'Express' });
});

app.post('/posty', (request, response) => {
  console.log(request.body)
})

app.get('/create-account', function(req, res, next) {
  res.render("create-account", {})
});

app.get('/login', function(req, res, next) {
  res.render("login", {})
});

app.get('/download', function(req, res, next) {
  res.render("download", {})
});

app.get('/features', function(req, res, next) {
  res.render("features", {})
});

app.get('/guides', function(req, res, next) {
  res.render("guides", {})
});

app.get('/highscores', function(req, res, next) {
  res.render("highscores", {})
});

app.get('/tools', function(req, res, next) {
  res.render("tools", {})
});

app.get('/ge-tracker', function(req, res, next) {
  res.render("ge-tracker", {})
});

app.get('/skill-calculator', function(req, res, next) {
  res.render("skill-calculator", {})
});

app.get('/bug-reporter', function(req, res, next) {
  res.render("bug-reporter", {})
});

app.get('/world-map', function(req, res, next) {
  res.render("world-map", {})
});

app.get('/api', function(req, res, next) {
  res.render("api", {})
});

app.get('/terms', function(req, res, next) {
  res.render("terms", {})
});

app.get('/privacy-policy', function(req, res, next) {
  res.render("privacy-policy", {})
});

app.listen(webPort, "0.0.0.0", ()=> console.log("Successful on port " + webPort))




module.exports = app;
