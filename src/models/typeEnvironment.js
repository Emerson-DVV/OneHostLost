const mongoose = require("mongoose");

const typeEnvironmentSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true
    }
});

const TypeEnvironment = mongoose.model('TypeEnvironment', typeEnvironmentSchema);
module.exports = TypeEnvironment;