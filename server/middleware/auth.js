import jwt from "jsonwebtoken"
const secret = "test";

const auth = async (req, res, next) => {
    try{
        //1. get the token from request 
        //2. verify the token
        //3. if yes, pass to next()
        const token = req.headers.authorization.split(" ")[1];
        if (!token) { return res.status(403).send("A token is required for authentication")}


        let decodeData;

        decodeData = jwt.verify(token, secret);
        req.userId = decodeData?.id;

        next();

    } catch(error){
        console.log(error);
    }
}

export default auth;