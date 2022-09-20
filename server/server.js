import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());



// connect to Database 

const CONNECTION_URL = `mongodb+srv://zhongyuming13:${process.env.PASSWORD}@cluster0.pmgglpe.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(process.env.PORT, ()=>console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)))
    .catch((error) => console.log(`${error} did not connect`))
