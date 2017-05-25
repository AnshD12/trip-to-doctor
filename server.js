var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8000;
var MongoClient = require('mongodb').MongoClient;
var db;

var dbConfig = require('./config/db');


MongoClient.connect(dbConfig.url, function(err, database){
	if(err) {
		console.log("Unable to connect to DB");
		throw err;
	}
    db=database;
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname+'/public'));

/**/


var router = express.Router();
router.use(function(req,res,next){
	console.log('Request \t'+req.method+":"+req.url);
	req.db = db;
	next();
});



//require('./app/routes/twitter/getTweets')(router);

//app.use('/api', router);


app.listen(port);

console.log("Server started at port::"+port);
