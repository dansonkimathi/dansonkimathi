const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());

const mockUserData = {
    username: 'testuser',
    password: '$2b$10$AlhY8sUD1xA6xUjdTi/jjuSHw8dKn7ZkS0bYJ6Tq10FbBkiCtGd/W' // hashed 'password123'
};

app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;

    // Check if username matches
    if (username !== mockUserData.username) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, mockUserData.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate and return a token or some kind of authentication response
    return res.status(200).json({ message: 'Login successful' });
});

// Run the server
app.listen(6000, () => {
    console.log('Server running on port 6000');
});
