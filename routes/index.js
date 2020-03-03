var express = require("express");
var app=express();
var router = express.Router();


// ROOT ROUTE
router.get("/", function (req, res) {
    //req.flash('message', 'This is a message from the "/" endpoint');
    res.redirect("/incidents");
});
module.exports = router;