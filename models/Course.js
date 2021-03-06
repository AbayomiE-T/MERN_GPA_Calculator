const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    courseCode: {
        type: String,
        required: true
    },
    creditValue: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    gradePoint: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Course = mongoose.model('course', CourseSchema);