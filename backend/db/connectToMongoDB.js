import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.group("Connected to MongoDB")
    } catch (error) {
        console.log("Error in connecting with the MongoDB database")
        
    }
}

export default connectToMongoDB