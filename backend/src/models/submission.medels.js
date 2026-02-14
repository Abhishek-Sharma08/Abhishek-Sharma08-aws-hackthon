import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
    {
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true,
        },
        lesson : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Lesson',
            required : true,
        },
        submittedCode : {
            type : String,
            required : true,
        },
        isCorrect : {
            type : Boolean,
            default : false
        },
        feedback :{
            type : String,
            default : ''
        },
    },
    {
        timestamps : true
    }
)

const Submission = mongoose.model('Submission', submissionSchema)
export default Submission