//Globals
GLOBAL.fs      = require('fs');
GLOBAL._       = require('underscore');
GLOBAL.express = express = require("express");
GLOBAL.app     = module.exports = express();


//Express
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');

app.use("/static", express.static(__dirname + "/static"));


var port = process.env.PORT || 8000;


app.get('/', function(req, res){
	res.render('index.html');
});

app.listen(port, function() {
	console.log("Listening on " + port);
});


/*
module.exports = {
	start : function(){
		app.listen(port, function() {
			console.log("Listening on " + port);
		});
	}
}
*/