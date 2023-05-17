import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    iss:{
        type:String,
    },
    nbf:{
        type:Number,
    },
    aud:{
        type:String,
    },
    sub:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    email_verified:{
        type:Boolean,
    },
    azp:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        required:true,
    },
    given_name: {
        type: String,
        required: true
    },
    family_name: {
        type: String,
        required: true
    },
    iat: {
        type: Number,
        required: true
    },
    exp: {
        type: Number,
        required: true
    },
    jti: {
        type: String,
        required: true
    },
})

const User = mongoose.model('User',userSchema);
export default User;