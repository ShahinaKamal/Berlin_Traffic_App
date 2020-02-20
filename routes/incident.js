var express = require("express");
var router = express.Router();
var Incident = require('../models/incidents');

//To show incidents list sorted in the descending order by incident delay
router.get("/incidents", function (req, res) {
    Incident.find({}, function (err, incidents) {
        if (err) {
            console.log(err);
        }
        else {
            if (typeof (incidents) != "undefined") {
                res.render("index", { incidents: incidents });
            }
        }
    }).sort({ "delay": -1 });
});

//To show specific incident report selected by user- on click of any list item
router.get("/incidents/:id", function (req, res) {
    console.log(req.params);
    Incident.findById(req.params.id, function (err, foundIncident) {
        if (err) {
            console.log(err);
            res.redirect("/index");//back to the index page
        }
        else {
            if(typeof(foundIncident)!="undefined"){
                 res.render("show", { incident: foundIncident });
            }
        }
    });

});
module.exports = router;