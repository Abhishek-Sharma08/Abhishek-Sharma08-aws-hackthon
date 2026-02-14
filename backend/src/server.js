import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
// import {seedLessons} from "../seed/seedLessons.js" // comment this code uncomment it when u want to push lessons only

dotenv.config();

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongoDB connected");

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("db connection failed", error);
        process.exit(1);
    }
};

connectDB();
