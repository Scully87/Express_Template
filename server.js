var express = require('express')
var app = express();
var expressLayouts = require('express-ejs-layouts');
//require express (server framework)
//change the variable of express to app so that you can use in the code

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.get('/',function(req, res) {
	// 'req' is request of what/where your "get" is
	// 'res' is responce, so once its done its get it responds with.......(on next line)
	res.render("index");
	// 'res' respond for get, '.send' is send this >> to browser.
});

app.listen(6969,function() {
	//tells app(express) to listen on what local port
	console.log('listening on port 6969')
});