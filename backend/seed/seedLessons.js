import mongoose from "mongoose";
import dotenv from "dotenv";

import lessons from "../data/lessons.js"
import Lesson from "../src/models/lesson.models.js"

dotenv.config();

export const seedLessons = async () => {
    try {
        console.log("data is pushing in db");
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb is connected");

        const existingLessons = await Lesson.countDocuments()

        if (existingLessons > 0) {
            console.log("lesson exist in db");
            process.exit(0);
        }
        
        await Lesson.insertMany(lessons)
        console.log(`${lessons.length} lessons pushed in db`);
        
        
    } catch (error) {
        console.error("error while putting data in db", error);
        process.exit(1);
        
    }
}

seedLessons()