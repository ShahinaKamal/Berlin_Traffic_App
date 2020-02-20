 const mongoose = require('mongoose');

 //Create Traffic Incident Schema-MONGOOSE/MODEL CONFIG
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
});
module.exports = mongoose.model("Incident", incidentSchema);