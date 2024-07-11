const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = 'your_secret_key'; // Replace with your secret key

app.use(express.json());
app.use(cookieParser());

// Middleware to protect routes
function authenticateToken(req, res, next) {
    const token = req.cookies.jwt;
    if (!token) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user;
        next();
    });
}

// Route to login and issue JWT
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Replace with real authentication logic
    if (username === 'user' && password === 'password') {
        const user = { name: username };
        const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });

        // Set JWT in HttpOnly cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        });

        res.json({ message: 'Logged in successfully' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

// Route to logout
app.post('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.json({ message: 'Logged out successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
