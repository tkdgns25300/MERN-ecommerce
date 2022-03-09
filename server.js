require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true,
}))

// Connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(URI)
.then(() => console.log('Connected to MongoDB..'))
.catch(err => {
    throw err
})


// Routes
app.get('/', (req, res) => {
    res.json({msg : "Welcome my website!"})
})


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})