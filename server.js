var express = require('express')
var app = express();
//require express (server framework)
//change the varialbe of express to app so that you can use in the code

app.get('/',function(req, res) {
	// 'req' is request of what/where your "get" is
	// 'res' is responce, so once its done its get it responds with.......(on next line)
	res.send("Hello World")
	// 'res' respond for get, '.send' is send this >> to browser.
});

app.listen(6969,function() {
	//tells app(express) to listen on what local port
	console.log('listening on port 6969')
});