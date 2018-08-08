var queryType = require('query-types');
var express = require('express');
var app = express()
 
// app.use(queryType.middleware())
 
app.get('/', function(req, res) {
  res.json(req.query); // Response example: { enabled: true, price: 123.13, name: 'John Smith', origin: [31.412, 41.213] }  
});
app.listen(3002)
