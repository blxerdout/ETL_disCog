

var Discogs = require('disconnect').Client;

var db = new Discogs().database();
db.getRelease(1449381, function(err, data){
	console.log(data);
});

var dis = new Discogs('MyUserAgent/1.0');