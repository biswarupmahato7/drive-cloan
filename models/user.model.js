const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        trim:true,
        lowercase: true,
        unique: true,
        minlength: [3,'Username must be at least 3 Characters long']
    },

    email:{
        type:String,
        require: true,
        trim: true,
        lowercase:true,
        unique:true,
        minlength:[13,'Give a valid email']
    },
    password:{
        type:String,
        require:true,
        trim:true,
        minlength: [8,'At least 8 characters long']
    }
})

const user = mongoose.model('user', userSchema) //('user')-> name of collation

module.exports = user;