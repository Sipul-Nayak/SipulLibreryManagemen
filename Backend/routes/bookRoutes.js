const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.get('/', async (req, res) => res.json(await Book.find()));

router.post('/issue-book', async (req, res) => {
    const { bookId, userId } = req.body;
    const book = await Book.findById(bookId);
    if (book?.available) {
        Object.assign(book, { available: false, issuedTo: userId, issueDate: new Date(), returnDate: new Date(Date.now() + 15 * 86400000) });
        await book.save();
        res.json({ success: true });
    } else res.status(400).json({ success: false });
});

router.post('/return-book', async (req, res) => {
    const { bookId } = req.body;
    const book = await Book.findById(bookId);
    if (book && !book.available) {
        Object.assign(book, { available: true, issuedTo: null, issueDate: null, returnDate: null });
        await book.save();
        res.json({ success: true });
    } else res.status(400).json({ success: false });
});

module.exports = router;
