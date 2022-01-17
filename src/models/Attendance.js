const mongoose = require('mongoose')

const Attendance = mongoose.Schema({
    name: { type: String },
    username: { type: String },
    class: { type: String },
    day: { type: String },
    month: { type: String },
    years: { type: String },
    date: { type: String }
})

module.exports = mongoose.model('attendance', Attendance)