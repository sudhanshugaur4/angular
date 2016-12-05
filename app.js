var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
var fs = require('fs');
var app = express();


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function(req, res) {
    console.log("Global");
    res.sendFile(__dirname + '/public/index.html');
});
var util = require('util');
/*
var route_contactus = require('./routes/contactus');
var route_user_register = require('./routes/user_register');

app.post('/user_register', route_user_register.userregister);

app.post('/contactus', route_contactus.contactus);
app.get('/legal', function(req, res) {
    console.log("Legal");
    res.sendFile(__dirname + '/public/legal.html');
});

app.get('/contact', function(req, res) {
    console.log("Contact");
    res.sendFile(__dirname + '/public/contact.html');
});

app.get('/home', function(req, res) {
    console.log("Home");
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/about', function(req, res) {
    console.log("About");
    res.sendFile(__dirname + '/public/about.html');
});

app.get('*',function (req, res) {
    res.redirect('/');
});
*/
var port = process.env.PORT || 8080;

/*var ssl_options = {
    key: fs.readFileSync('./testkey/khaalijeb.com_combined.pem'),
    cert: fs.readFileSync('./testkey/khaalijeb.com_combined.crt')
}; */

/*
service: my-service
instance_class: F1
automatic_scaling:
#  min_idle_instances: 5
#  max_idle_instances: automatic  # default value
   max_idle_instances: 1
   min_num_instances: 1
   max_num_instances: 1
#  min_pending_latency: 30ms  # default value
   min_pending_latency: 600ms
   max_pending_latency: automatic
#   max_concurrent_requests: 50

*/
//app.listen(port, function() {
//console.log('Our app is running on http://localhost:' + port);
//});
http.createServer(app).listen(8080);
//https.createServer(ssl_options, app).listen(1339);