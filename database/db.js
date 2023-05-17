import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-backend-data.qfoy2qj.mongodb.net/?retryWrites=true&w=majority`

const Connection =async()=>{
    try{
        await mongoose.connect(MONGO_URL,{
            useUnifiedTopology:true
        })
        console.log("Database Connected.");
    }catch(error){
        console.log("Error while connecting to the database..",error.message);
    }
}

export default Connection;