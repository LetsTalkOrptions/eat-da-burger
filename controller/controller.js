var express = require("express");

var router = express.Router();

// Import burger
var burger = require("../models/burgers.js");

// Create routes, define them
router.get("/", function(req, res){
	burger.all(function(data){
		var allBurgers = {
			burgers: data
		};
		console.log(allBurgers);
		res.render("index", allBurgers);
	});
});

router.post("/", function(req, res) {
	 burger.create([
    "name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var status = "id = " + req.params.id;

  console.log("status", status);

  burger.update({
    status: req.body.status
  }, status, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var status = "id = " + req.params.id;

  burger.delete(status, function() {
    res.redirect("/");
  });
});
// Export routes 
module.exports = router;