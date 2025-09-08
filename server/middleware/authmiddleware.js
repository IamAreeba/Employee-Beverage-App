import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    // Read token from Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader ? authHeader.split(" ")[1] : null;

    if (!token) {
        return res.json({ success: false, message: "Not Authorized Login Again" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
};

export default authMiddleware;
