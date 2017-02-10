var express = require('express');
// import App from './app';

var port =9000;
var app = express();
app.use(express.static( __dirname + '/public'));
var logger= require('morgan');
app.use(logger('dev'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))


require('./routes')(app);

app.listen(9000, function(){
	console.log("listening to: " + port )
});