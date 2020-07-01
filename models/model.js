const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    name: String,
    purchase: Array,
    thumbnail: String,
    favourite: Array
})

const User = mongoose.model('shop',UserSchema)

module.exports = User