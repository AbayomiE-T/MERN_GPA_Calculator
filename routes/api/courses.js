const express = require('express');
const router = express.Router();

//Course model
const Course = require('../../models/Course');

// @route GET api/items
// @desc Get All Items
// @access Public

router.get('/', (req, res) => {
    Course.find()
        .then(items => res.json(items))
})

// @route POST api/items
// @desc Create a Course
// @access Public
// @where the body parser dependency comes in
router.post('/', (req, res) => {
    const newCourse = new Course({
        name: req.body.name,
        courseCode: req.body.courseCode,
        creditValue: req.body.creditValue,
        grade: req.body.grade,
        gradePoint: req.body.gradePoint
    });

    newCourse.save().then(course => res.json(course))
})

// @route DELETE api/items/:id
// @desc DELETE a Course
// @access Public
router.delete('/:id', (req, res) => {
    Course.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;