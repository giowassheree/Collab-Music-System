//app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Message = require('./models/Message');
const authRoutes = require('./routes/auth');
const auth = require('./middleware/auth');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
});

console.log("App is set up and ready to go!");

