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
        require: true,
        default: "User"
    },
        
}, {timestamps: true})


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        if (typeof this.password !== 'string') {
            throw new Error('Password must be a string');
        }

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);

        next();  
    } catch (err) {
        next(err);  
    }
});


userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model('User', userSchema);

