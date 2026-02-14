import Lesson from '../models/lesson.models.js'
import User from '../models/user.models.js'

export const getAllLesson = async (req, res) => {
    try {
        const lessons = await Lesson.find().
        sort({
            lessonNumber : 1
        })
        let completedLessons = []

        if (req.user) {
            const user = await User.findById(req.user._id)
            completedLessons = user.completedLessons.map(
                id => id.toString()
            )
        }

        const response = lessons.map((lesson, index)=> {
            const lessonId = lesson._id.toString()
            let isLocked = false

            if (index > 0) {
                const prevLessonId = lessons[index - 1]._id.toString()
                isLocked = !completedLessons.includes(prevLessonId)

            }

            return {
                ...lesson.toObject(),
                isLocked
            }

        })


        res.status(200).json({
            success : true,
            count : lessons.length,
            lessons
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
} 


export const getLessonById = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id)
        if(!lesson){
            return res.status(404).json({
                success : false,
                message : 'lesson not found'
            })
        }
        res.status(200).json({
            success : true,
            lesson
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}