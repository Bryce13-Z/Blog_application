import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import UserModel from "../models/user.js"


export const signin = async (req, res) => {
    //1. fetch the { userEmail, userPassword} from req
    //2. use userEmail to find the user data ( UserModel.findOne({ email })), and get the encrypted password from db 
    //3. compare the encrypted password from db with the userPassword from rquest 
    //4. using bcrypt.compare() function to do step3, if the result is false, we will send error
    //4. if it's true, we will generate a toke by useing jwt.sign() function
    // jwt.sign({ email: oldUser.email, id: olderUser._id})
    


}

export const signup = async (req, res) => {
    //1. fetch the data from req
    //2. catch userName/userEmail value and find whether exist this user
    //3. Existing this user, we use res to return fail 
    //4. No the user, we create a new record that would be stored in db
    //5. before stored db, we need to encrypt user's password by using bcrypt
    //6. After storing to db, we need to make a token by using encrypted password
    //6. and user id/email/name and expire time
    //7. after generating the token, we will use res to send it to front end 
}