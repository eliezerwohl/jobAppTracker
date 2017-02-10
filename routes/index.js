var mongoose = require('mongoose');

module.exports = function (app) {
	app.get("/", function(req, res){
		res.sendFile( process.cwd() + "/public/views/home.html")
	})
		app.get("/main", function(req, res){
		res.sendFile( process.cwd() + "/public/views/home.html")
	})

}
