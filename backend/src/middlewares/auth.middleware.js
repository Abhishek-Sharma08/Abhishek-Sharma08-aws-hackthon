import jwt from "jsonwebtoken";
import  User  from "../models/user.models.js";

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const token = authHeader.split(' ')[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decoded.id).select('-password')

        if (!req.user) {

            return res.status(401).json({ message: 'user not found' });
        }
        next();

    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

export default authMiddleware