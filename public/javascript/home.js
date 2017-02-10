var email = document.getElementById("email");
var password = document.getElementById("password");
document.getElementById("submit").addEventListener("click", function(){
	var object = {
		"email":email.value,
		"password":password.value
	}
   post(object, function(object){
   		console.log(data)
   })
});

function post(data, done) {
	debugger
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
         if (xmlhttp.status == 200) {
             done(xmlhttp.responseText);
         }
         else if (xmlhttp.status == 400) {
            done('There was an error 400');
         }
         else {
             done('something else other than 200 was returned');
         }
      }
  };
  xmlhttp.open("POST", "/login", true);
  xmlhttp.setRequestHeader("Content-type", "application/json");
  xmlhttp.send(JSON.stringify(data));
}
