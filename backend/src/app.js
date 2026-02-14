import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js" 
import userRoutes from "./routes/user.routes.js"
import lessonRoutes from "./routes/lesson.routes.js"
import submissionRoutes from "./routes/submission.routes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('api is running');
})

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/lessons',lessonRoutes)
app.use('/api/submissions', submissionRoutes)

export default app;