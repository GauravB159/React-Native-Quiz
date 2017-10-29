var express = require('express');

var router = express.Router();

router.post('/',function(req,res){

	
	var ques = req.headers.ques;
	var options = req.headers.options;
	var correct = req.headers.correct;

});

module.exports = router;