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
  res.render('home', { title: 'Express' });
});

app.post('/posty', (request, response) => {
  console.log(request.body)
})

app.get('/work', function(req, res, next) {
  res.send("test")
});

app.listen(webPort, "0.0.0.0", ()=> console.log("Successful on port " + webPort))




module.exports = app;
