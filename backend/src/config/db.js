import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Cannot connect to db", error);
        process.exit(1);
    }
}
