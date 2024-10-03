const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String,
        require: true
    }, 

    email: {
        unique: true,
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    role: {
        type: String,
        require: true
    }

    
    
})