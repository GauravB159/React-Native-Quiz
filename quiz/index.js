var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var ques_upload = require('./api/ques_upload.js');

app.use('/ques_upload',ques_upload);


app.use(function (error, request, response, next) {
 console.error(error.stack);
 response.status(400).send(error.message);
});


app.listen(port, function() {
 console.log("Node app is running at localhost:" + port);
});