import mongoose from 'mongoose'

export const connectDB = async() =>{

    const uri = process.env.MONGO_URI || ''

    if(!uri){
        throw new Error("MongoDB uri is missing!");
    }

    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB!")
    }catch(error){
        console.error("Error connecting database : ", error)
    }
}