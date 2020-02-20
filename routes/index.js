var express = require("express");
var router = express.Router();

// ROOT ROUTE
router.get("/", function (req, res) {
    res.redirect("/incidents");
});
module.exports = router;