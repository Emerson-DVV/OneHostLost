const mongoose = require("mongoose");

const facilitySchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true
    }
});

const Facility = mongoose.model('Facility', facilitySchema);
module.exports = Facility;