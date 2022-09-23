import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    bio: { type: String},
    picture: {type: String},
    followers: { type: [String], default: []},
    followering: { type: [String], default: []},
    id: { type: String},
    // {id String, 
    //     userName String, 
    //     userEmail String, 
    //     password String, 
    //     short bio about you String, 
    //     picture String,  
    //     followers { type: [String], default: []}, 
    //     following {type: [String], default: []}}
     
})

let UserModel = mongoose.model('UserModel', userSchema)

export default UserModel