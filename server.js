const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');

const courses = require('./routes/api/courses');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

const app = express();

// Bodyparser Middleware
app.use(express.json());

//DB Config
const db = config.get("mongoURI");

//Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("MonogDB Connected..."))
    .catch((err) => console.log(err));

//Use Routes
app.use('/api/courses', courses);
app.use('/api/users', users);
app.use('/api/auth', auth);

//Serve statis assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))