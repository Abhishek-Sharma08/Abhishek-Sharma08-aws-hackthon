import Submission from "../models/submission.medels.js";
import User from "../models/user.models.js";
import Lesson from "../models/lesson.models.js";
import { getGeminiFeedback } from "../services/gemini.service.js";

export const createSubmission = async (req, res) => {
    try {
        const userId = req.user._id;
        const { lessonId, submittedCode, status } = req.body;

        if (!lessonId || !submittedCode) {
            return res.status(400).json({
                success: false,
                message: "lessonId and submittedCode are required"
            });
        }

        const lesson = await Lesson.findById(lessonId);
        if (!lesson) {
            return res.status(404).json({
                success: false,
                message: "lesson not found"
            });
        }

        let isCorrect = status === 'completed';
        let xpAwarded = 0;
        let attemptMessage = "";

        const user = await User.findById(userId);
        const isAlreadyCompleted = user.completedLessons.includes(lessonId);

        const previousAttempts = await Submission.countDocuments({
            user: userId,
            lesson: lessonId
        });

        if (isCorrect) {
            if (isAlreadyCompleted) {
                xpAwarded = 0;
                attemptMessage = "Practice makes perfect! (No new XP)";
            } else {
                if (previousAttempts === 0) {
                    xpAwarded = 100;
                    attemptMessage = "Perfect! First try bonus! (+100 XP)";
                } else if (previousAttempts === 1) {
                    xpAwarded = 70;
                    attemptMessage = "Great job! (+70 XP)";
                } else if (previousAttempts === 2) {
                    xpAwarded = 40;
                    attemptMessage = "Good job! (+40 XP)";
                } else {
                    xpAwarded = 10;
                    attemptMessage = "Persistence pays off! (+10 XP)";
                }
            }
        }

        const feedback = await getGeminiFeedback({
            concept: lesson.concept,
            expectedOutput: lesson.expectedOutput,
            submittedCode,
            isCorrect,
            attemptMessage
        });

        const submission = await Submission.create({
            user: userId,
            lesson: lessonId,
            submittedCode,
            isCorrect,
            feedback: feedback || attemptMessage
        });

        if (isCorrect) {
            const currentXp = (user.xp || 0) + xpAwarded;
            const newLevel = Math.floor(0.1 * Math.sqrt(currentXp) + 1);

            await User.findByIdAndUpdate(userId, {
                $set: { xp: currentXp, level: newLevel },
                $addToSet: { completedLessons: lessonId }
            });
        }

        return res.status(201).json({
            success: true,
            submission,
            xpAwarded,
            attempts: previousAttempts + 1
        });

    } catch (error) {
        console.error("submission error", error);
        return res.status(500).json({
            success: false,
            message: "server error while submitting code"
        });
    }
};

export const getMySubmissions = async (req, res) => {
    try {
        const userId = req.user._id;

        const submissions = await Submission.find({
            user: userId
        })
        .populate("lesson", "lessonNumber title difficulty")
        .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: submissions.length,
            submission: submissions
        });

    } catch (error) {
        console.error("Fetch submission error", error);
        return res.status(500).json({
            success: false,
            message: "server error while fetching submission"
        });
    }
};