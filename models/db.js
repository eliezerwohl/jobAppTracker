var mongoose = require("mongoose");

if(process.env.NODE_ENV === 'production') {
  // HEROKU DB
  console.log(process.env.MONGOLAB_URI);

  mongoose.connect(process.env.MONGOLAB_URI);
}
else {
  // LOCAL DB
  var dbURI = 'mongodb://localhost/jobApp';
  console.log(dbURI);
  mongoose.connect(dbURI);
}

mongoose.connection.on("connected", function() {
	console.log("mongoose connected to " + dbURI);
});



mongoose.connection.on("error", function() {
	console.log("mongoose connection err ");
});

mongoose.connection.on("disconnected", function() {
	console.log("mongoose disconnected");
});