const User = require('../models/User')
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

exports.register = async (req, res) => {

}

exports.login = async (req, res) => {
    
}