var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Incident = require('./models/incidents'),
    seedDB = require("./seeds");
const PORT = 3000;
var incidentRoutes = require("./routes/incident"),
    indexRoutes = require("./routes/index");

//APP CONFIG
app.set("view engine", "ejs");//To use ejs template mechanism

// To serve custom sstyle sheet
app.use(express.static(__dirname + "/public"));

//ROUTES CONFIG
app.use(incidentRoutes);
app.use(indexRoutes);

// seed or populate the database
seedDB();  
//Connect to Mongoose and create berlin_traffic_app collection
mongoose.connect("mongodb://localhost/berlin_traffic_app", { useNewUrlParser: true });

//body-parser: to read data from request 
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTE CONFIG
app.use("/", indexRoutes);
app.use("/incidents", incidentRoutes);

/* //Create Traffic Incident Schema-MONGOOSE/MODEL CONFIG
var incidentSchema = new mongoose.Schema({
    id: { type: String },
    type: { type: Number },
    point: {
        x: { type: mongoose.Decimal128 },
        y: { type: mongoose.Decimal128 }

    },
    from: { type: String },
    to: { type: String },
    details: { type: String },
    delay: { type: Number },
    magnitude: { type: Number }
}); */

app.get("/map", function (req, res) {
    res.render('map');
});

app.listen(PORT, process.env.IP, function () {
    console.log("Server is running!!!!")
});

