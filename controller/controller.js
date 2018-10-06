var express = require("express");
var router = express.Router();

// Import burger
var burger = require("../models/burgers.js");

// Create routes, define them

router.get('/', function (req, res) {
    res.redirect('/index');
  });

//   Index page

router.get("/index", function(req, res){
	burger.all(function(data){
		var allBurgers = {
			burgers: data
		};
		console.log(allBurgers);
		res.render("index", allBurgers);
	});
});

// Create

router.post('/burger/create', function (req, res) {
    burger.create(req.body.burger_name, function() {
      res.redirect('/index');
    });
  });

//   Devour

router.post('/burger/eat/:id', function (req, res) {
    burger.delete(req.params.id, function() {
      res.redirect('/index');
    });
  });
// Export routes 
module.exports = router;