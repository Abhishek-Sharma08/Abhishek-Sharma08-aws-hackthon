import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
    {
        lessonNumber : {
            type: Number,
            required: true,
            unique: true
        },
        title : {
            type: String,
            required: true,
            trim : true
        }, 
        goal : {
            type: String,
            required: true,
        },
        concept : {
            type: String,
            required: true,
        },
        starterCode : {
            type: String,
            required: true,
        },
        expectedOutput : {
            type: String,
            required: true,
        },
        commonMistakes : [
            {
                type : String
            }
        ],
        difficulty : {
            type: String,
            enum: ['easy', 'medium', 'hard'],
            default: 'easy'
        }
    },
    {
        timestamps: true
    }
)

const Lesson = mongoose.model('Lesson', lessonSchema)
export default Lesson