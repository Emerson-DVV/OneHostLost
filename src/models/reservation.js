const mongoose = require("mongoose");
const reservationSchema = mongoose.Schema({
    environment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    date: {
        type: Date,
        required: true
    },
    hour: [{
        type: String,
        required: true
    }],
    type: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation; 
