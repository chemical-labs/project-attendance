const mongoose = require('mongoose')

const Users = mongoose.Schema({
    name: { type: String },
    class: { type: String },
    username: { type: String },
    password: { type: String },
    role: { type: String }
})

module.exports = mongoose.model('users', Users)
