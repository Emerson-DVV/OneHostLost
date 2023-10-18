const mongoose = require("mongoose");
const classroomSchema = mongoose.Schema({
    classroom:{
        type: String,
        require: true
    },
    capacity:{
        type: Number,
        require: true
    },
    description:{
        type: String,
        require: true
    }
});

const Classroom = mongoose.model('ClassRoom', classroomSchema);
module.exports = Classroom;