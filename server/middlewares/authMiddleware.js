const jwt = require('jsonwebtoken');

// Middleware to verify user roles
const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({ message: 'Access denied. Please log in.' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            // Check if user's role is in allowedRoles
            if (!allowedRoles.includes(req.user.role)) {
                return res.status(403).json({ message: 'Access denied. You do not have permission.' });
            }

            next();
        } catch (err) {
            res.status(400).json({ message: 'Invalid token. Please log in again.' });
        }
    };
};

module.exports = verifyRoles;
