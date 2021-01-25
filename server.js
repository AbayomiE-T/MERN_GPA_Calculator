const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const courses = require('./routes/api/courses');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/key').mongoURI;

//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log("MonogDB Connected..."))
    .catch((err) => console.log(err));

app.use('/api/courses', courses);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))