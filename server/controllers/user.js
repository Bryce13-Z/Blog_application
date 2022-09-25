import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserModel from "../models/user.js"

const secret = "test"
const hash_number = 12

export const signin = async (req, res) => {
    //1. fetch the { userEmail, userPassword} from req
    //2. use userEmail to find the user data ( UserModel.findOne({ email })), and get the encrypted password from db 
    //3. compare the encrypted password from db with the userPassword from rquest 
    //4. using bcrypt.compare() function to do step3, if the result is false, we will send error
    //4. if it's true, we will generate a toke by useing jwt.sign() function
    // jwt.sign({ email: oldUser.email, id: olderUser._id})
    const { email, password } = req.body;
    try{
        const oldUser = await UserModel.findOne({ email});
        if (!oldUser) { return res.status(404).json({ message: "Input message is wrong!"})}
        
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if(!isPasswordCorrect) { return res.status(404).json({ message: "Input message is wrong!"})}
        
        // generate a token 
        const token = jwt.sign({ email: oldUser.email, id: oldUser._id}, secret, {expiresIn: "1h"})
        res.status(200).json({ result: oldUser, token})

    } catch(error) {
        res.status(500).json({ message: "Something went wrong"})
    }
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
    const { email, name, password} = req.body;

    try {
        const isOldUser = await UserModel.findOne({ email });
        if (isOldUser) { return res.status(400).json({ message: "user exists"})}
        
        // create a new user 
        const hashedPassword = await bcrypt.hash(password, hash_number);
        const result = await UserModel.create({ email, password: hashedPassword, name});
        const token = jwt.sign({ email: result.email, id: result._id}, secret, { expiresIn: "1h"});

        res.status(201).json({ result, token})

    } catch(error) {
        res.status(500).json({ message: "something went wrong"})
    }



}