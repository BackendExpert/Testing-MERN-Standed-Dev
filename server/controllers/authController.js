const User = require('../models/User')
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

exports.register = async (req, res) => {
    try{
        // console.log(req.body)
        const {username, email, password} = req.body

        const CheckUser = await User.findOne({
            $or: [
                { email: email },
                { username: username }
            ]
        });

        if(CheckUser){
            return res.json({ Error: "User Already in Database"})
        }

        const NewUser = new User({
            username: username,
            email: email,
            password: password
        })

        const saveUser = await NewUser.save()

        if(saveUser){
            return res.json({ Status: "Success"})
        }
    }
    catch(err) {
        console.log(err)
    }
}

exports.login = async (req, res) => {

}