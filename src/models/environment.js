const mongoose = require("mongoose");

const environmentSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    capacity:{
        type: Number,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    active:{
        type: Boolean,
        require: true
    },
    enabled:{
        type: Boolean,
        require: true
    },
    typeEnvironment:{
        type: String,
        require: true
    },
    facility:[{
        type: String,
        require: false
    }]
}); 

const Environment = mongoose.model('Environment', environmentSchema);
module.exports = Environment;