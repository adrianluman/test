var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World 6 master");
});

app.listen(4000);