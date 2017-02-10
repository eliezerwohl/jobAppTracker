var express = require('express');
// import App from './app';

var port =9000;
var app = express();
var logger= require('morgan');
app.use(logger('dev'));
app.use('/assets', express.static('assets'));


require('./routes')(app);

app.listen(9000, function(){
	console.log("listening to: " + port )
});