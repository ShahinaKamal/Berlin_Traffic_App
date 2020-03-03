var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Incident = require('./models/incidents'),
    seedDB = require("./seeds");  
const PORT = process.env.PORT || 3000;
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
mongoose.connect("mongodb+srv://admin:admin123@cluster0-i7xvv.mongodb.net/test?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }).then(()=>{
    console.log("MONGO Connection successful");
}).catch(err=>{console.log("Error"+err)}
);

//mongoose.connect("mongodb://localhost/berlin_traffic_app", { useNewUrlParser: true, useUnifiedTopology: true });

//body-parser: to read data from request 
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTE CONFIG
app.use("/", indexRoutes);
app.use("/incidents", incidentRoutes);
app.listen(PORT, process.env.IP, function () {
    console.log("Server is running!!!!")
});

