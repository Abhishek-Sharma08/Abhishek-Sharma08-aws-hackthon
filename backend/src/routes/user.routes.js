import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  getProfile,
  updateStats,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  getFriends,
  getRequests,
  getLeaderboard
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);

router.put("/stats", authMiddleware, updateStats);

router.post("/send-request",authMiddleware, sendFriendRequest);

router.post("/accept-request", authMiddleware, acceptFriendRequest);

router.post("/reject-request", authMiddleware, rejectFriendRequest);

router.get("/friends", authMiddleware, getFriends);

router.get("/requests", authMiddleware, getRequests);

router.get("/leaderboard", authMiddleware, getLeaderboard);

export default router;