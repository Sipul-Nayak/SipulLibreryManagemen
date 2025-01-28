const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    user ? res.json({ success: true, role: user.role }) : res.status(401).json({ success: false });
});

module.exports = router;