// Script for controller, responsible for communication between react-based front end and mongodb
// Use nodemon to listen to requests via express package 
// Queries mongodb and returns the result of query

// MongoDBsSetup
var mongo = require('mongodb')
var mongoClient = mongo.MongoClient;
var mongoUri = "mongodb://guest:guest@localhost:27017/";

// Listener setup
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var portNumber = 4000

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.listen(portNumber, function() {
	console.log("node listening on port " + portNumber)
});


// Request Handlers
app.get("/test", (req, res) => {
	mongoClient.connect(mongoUri, {'useUnifiedTopology': true}, function(err, cli) {
		if (err) throw err;
		const db = cli.db('Sorghum')
		db.collection('Annotation').findOne({"sequence": "Chr01"}, (err, result) =>
			console.log(result)
		)
	});
});

