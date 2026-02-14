import express from "express";
import { getAllLesson, getLessonById } from "../controllers/lesson.controller.js";
import {optionalAuth} from "../middlewares/optionalAuth.middleware.js"

const router = express.Router();

router.get("/",optionalAuth ,getAllLesson);
router.get("/:id", getLessonById);


export default router;