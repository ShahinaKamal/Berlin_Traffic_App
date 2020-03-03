var express = require("express");
var router = express.Router();
var mongoose = require('mongoose')
var Incident = require('../models/incidents');

var currentIncidents;
//To show incidents list sorted in the descending order by incident delay
router.get("/incidents", function (req, res) {
    // console.log("Page is refreshing from root");
    Incident.find({}, function (err, incidents) {
        // req.flash("info", "Page is refreshing!!!");
        if (err) {
            console.log(err);
        }
        else {
            if (typeof (incidents) != "undefined") {
                currentIncidents = incidents;
                res.render("index", { incidents: incidents });
            }
        }
    }).sort({ "delay": -1 });
});

//To 
router.get("/map", function (req, res) {
    var Markers = [];
    var marker = new Object();
    currentIncidents.forEach(function (incident) {
        var test = new Object();;
        //console.log("START++++++++" + JSON.stringify(incident));
        test.x = incident.point.x.toString();
        test.y = incident.point.y.toString();
        test.details = incident.details;
        Markers.push(test);        
    });   
    res.render('map', { markers: Markers });
});
/* function refreshPage(){
   
} */

//To show specific incident report selected by user- on click of any list item
router.get("/incidents/:id", function (req, res) {
    console.log(req.params);
    Incident.findById(req.params.id, function (err, foundIncident) {
        if (err) {
            console.log(err);
            res.redirect("/index");//back to the index page
        }
        else {
            if (typeof (foundIncident) != "undefined") {
                res.render("show", { incident: foundIncident });
            }
        }
    });

});

module.exports = router;