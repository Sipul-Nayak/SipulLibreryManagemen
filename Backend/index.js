const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/library')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.listen(5000, () => console.log('Server running on http://localhost:5000'));