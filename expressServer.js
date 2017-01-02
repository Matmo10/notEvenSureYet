var express = require('express');
var compression = require('compression');
var app = express();
var oneDay = 86400000;
var servableContentDirectory = 'public';

app.use(compression()); // gzip content before serving it
app.use(express.static(__dirname + '/' + servableContentDirectory, { maxAge: oneDay })); // maxAge param == Cache-Control header
app.listen(process.env.PORT || 3000);
