const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    available: Boolean,
    issuedTo: String,
    issueDate: Date,
    returnDate: Date,
});
module.exports = mongoose.model('Book', BookSchema);