const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required : true},
    password: {type: String, required : true},
    user_id: {type: Number, required : true},
    recipes: {type: String, required : true},
})

module.exports = mongoose.model('User', userSchema)