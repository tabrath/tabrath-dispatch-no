const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('hello world, again.. trying some changes and I think its working!');
});

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3001;

app.listen(port, host, () => {
  console.log('Listening on ' + host + ':' + port);
});

