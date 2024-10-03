// authMiddleware.js

const jwt = require('jsonwebtoken');

// Middleware to verify the user and check admin status
const verifyAdmin = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Access denied. Please log in.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token. Please log in again.' });
    }
};

module.exports = verifyAdmin;
