import { Schema } from "mongoose";

const {schema, model} = requre('mongoose');

const userSchema = new Schema({
    username: {type: String, require: true,unique: true },
    email: {type: String, require: true,unique: true },
    password: {type: String, require: true },
    role:{
        type: String, default: 'user'
    },
    profileImage: String,
    bio:{type: String, maxlength:200},
    profession:string,
    createdAt: {
        type:Date,
        default: Date.now
    }
})

const user = new model('user',userSchema);
module.exports = user;