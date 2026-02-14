import express from "express"
import authMiddleware from "../middlewares/auth.middleware.js"
import User from "../models/user.models.js" 

const router = express.Router()

router.get("/profile", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId || req.user.id || req.user._id;
        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            success: true,
            user: user
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching profile" });
    }
})

router.put("/stats", authMiddleware, async (req, res) => {
    try {
        const { xp, difficulty } = req.body; 
        const userId = req.user.userId || req.user.id || req.user._id;

        if (!userId) {
             return res.status(400).json({ message: "Invalid token data" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (difficulty) {
            user.difficulty = difficulty; 
        }

        if (xp && Number(xp) > 0) {
            user.xp = (user.xp || 0) + Number(xp);
            user.level = Math.floor(0.1 * Math.sqrt(user.xp)) + 1;
        }

        await user.save();

        res.json({
            message: "Stats updated successfully",
            updatedStats: {
                xp: user.xp,
                level: user.level,
                difficulty: user.difficulty
            }
        });

    } catch (error) {
        console.error("Stats Update Error:", error);
        res.status(500).json({ message: error.message || "Server error updating stats" });
    }
});

export default router