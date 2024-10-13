var express = require('express');
var path = require ('path');

var app = express();

app.get('./Index', function(req, res){
    res.sendFile(path.join(__dirnamedirname, 'Index.html'));
    if (err) {
        next(err) // Pass errors to Express.
      } else {
        res.send(data);
      }
    
});

app.listen(3000, function(){
    console.log('Another app running on port 3000');
});