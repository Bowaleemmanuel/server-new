import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

export const connectDB = async() => {
    try{
        //connect to the database
        await mongoose.connect(process.env.DATABASE_URL).then(() => console.log("Database Connected"))

    }catch(error){
        console.log(error)
        process.exit();
    }
}