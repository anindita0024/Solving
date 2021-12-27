const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },

    email:{
        type:String,
        require:true,
        unique:true
    },

    passwoard:{
        type:String,
        require:true
    },

    profilePicture:{
        type:String,
        default:""
    },


},
{timestamps:true}
);

module.exports=mongoose.model("User",UserSchema)