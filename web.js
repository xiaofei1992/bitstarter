var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var indexContents = fs.readFileSync('index.html');
    response.send(indexContents.toString());
});

fs.readFile('contact.html', function (err, data) { if (err) throw err;
data2=data.toString(); return data2;});

app.get('/contact', function(request, response) { response.send(data2);});



var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
