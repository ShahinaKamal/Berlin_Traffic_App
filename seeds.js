//This file is responsible to populate incident collection
var mongoose = require('mongoose');
var Incident = require('./models/incidents');

var data = [
    {
      "id": "europe_HD_DE_TTL6000",
      "type": 1,
      "point": {
        "x": 13.072789,
        "y": 52.388527
      },
      "from": "Am Buchhorst (Arthur-Scheunert-Allee/L78)",
      "to": "Potsdam-Brauhausberg - Friedrich-Engels-Straße (Heinrich-Mann-Allee/L78)",
      "details": "stationary traffic",
      "delay": 232,
      "magnitude": 2
    },
    {
      "id": "europe_HD_DE_TTL1211",
      "type": 2,
      "point": {
        "x": 13.045512,
        "y": 52.395312
      },
      "from": "Breite Straße - Feuerbachstraße (Zeppelinstraße/B2)",
      "to": "Schopenhauerstraße (Hegelallee/B2)",
      "details": "broken down vehicle",
      "delay": 135,
      "magnitude": 1
    },
    {
      "id": "europe_HD_DE_TTL5231",
      "type": 1,
      "point": {
        "x": 13.57957,
        "y": 52.462065
      },
      "from": "Gehsenerstraße - Mittelheide (Mahlsdorfer Straße/L1152)",
      "to": "Seelenbinderstraße (Bahnhofstraße/L1152)",
      "details": "stationary traffic",
      "delay": 166,
      "magnitude": 1
    },
    {
      "id": "europe_HD_DE_TTL4451",
      "type": 1,
      "point": {
        "x": 13.347768,
        "y": 52.435064
      },
      "from": "Paul-Schneider-Straße - Leonorenstraße (Kaiser-Wilhelm-Straße/L1092)",
      "to": "Paul-Schneider-Straße - Leonorenstraße (Kaiser-Wilhelm-Straße/L1092)",
      "details": "queuing traffic",
      "delay": 876,
      "magnitude": 3
    },
    {
      "id": "europe_HD_DE_TTL2451",
      "type": 3,
      "point": {
        "x": 13.498329,
        "y": 52.481859
      },
      "from": "Blockdammweg (Rummelsburger Landstraße/L1075)",
      "to": "Treskowallee - Edisonstraße (Rummelsburger Straße/L1075)",
      "details": "carriageway reduced to one lane",
      "delay": 190,
      "magnitude": 1
    }
  ];

function seedDB() {
     // Remove all incidents
    Incident.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("removed incidents!");
            // add incident
            data.forEach(function (seed) {
                Incident.create(seed, function (err, incident) {
                    if (err) {
                        console.log(err);
                    } else {
                      //Uncooment below lines to debug and check the val of entry
                        //console.log("added an incident!");
                       // console.log(seed);
                        
                    }
                });
            });
        }
    }); 
};

module.exports = seedDB;