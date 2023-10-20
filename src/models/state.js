const mongoose = require("mongoose");
const stateSchema = mongoose.Schema({
    classroom :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Classroom'
    },
    states: [
        {
            date: {
                type: Date,
                required: true 
            },
            hour: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ]
});

const State = mongoose.model('State', stateSchema);
module.exports = State; 
