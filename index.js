const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const http = require('http');

var app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3001);

app.use('/vendor', express.static('./bower_components'));
app.use('/assets', express.static('./dist'));
app.get('/*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));

//HACK: to get html5 mode to work we need everything else to route to the index.html
var server = http.createServer(app);

module.exports = { server, app };
