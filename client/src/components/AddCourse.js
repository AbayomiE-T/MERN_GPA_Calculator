import React, { useEffect, useState } from 'react'
import { addCourse, getCourses } from '../actions/courseActions'
import { connect } from 'react-redux';
import { calculateGPA } from './functions/functions'

import Navbar from './Navbar';

const AddCourse = ({ addCourse, user, getCourses, courses }) => {
    const [name, setName] = useState('');
    const [courseCode, setCode] = useState('');
    const [creditValue, setValue] = useState('');
    const [grade, setGrade] = useState('');
    const [gradePoint, setGradePoint] = useState('');
    const [gpa, setGpa] = useState(0);

    useEffect(() => {
        if (user) {
            getCourses(user._id);
        }

    }, [getCourses, user, gpa])

    useEffect(() => {
        if (localStorage.getItem('gpa')) {
            setGpa(localStorage.getItem('gpa'))
        }

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const course = { name, courseCode, creditValue, grade, gradePoint, user_id: user._id }

        setGpa(calculateGPA([...courses, course]));

        localStorage.setItem('gpa', calculateGPA([...courses, course]));

        addCourse(course);
        setName('');
        setCode('');
        setValue('');
        setGrade('');
        setGradePoint('');
    }

    return (
        <>
            <Navbar />
            <h1 style={{ marginTop: '60px' }}>Add a course</h1>
            <p>Your GPA gets calcualted in real time as you add a course. The old GPA will always be saved. It only updates as you add or delete a course.</p>
            <div className="container d-flex align-items-center flex-column">
                <div className="gpa-wrapper">
                    <span className="gpa" >{gpa}/12.0</span>
                </div>
                <form className="course-form" onSubmit={handleSubmit}>
                    <div className="form-item">
                        <input
                            type="text"
                            required
                            placeholder="Course name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <input
                            type="text"
                            required
                            placeholder="Course code"
                            value={courseCode}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <input
                            type="number"
                            step="0.1"
                            min="0"
                            required
                            placeholder="Credit value"
                            value={creditValue}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <input
                            type="text"
                            required
                            placeholder="Grade"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <input
                            type="number"
                            step="0.1"
                            min="0"
                            required
                            placeholder="Grade point"
                            value={gradePoint}
                            onChange={(e) => setGradePoint(e.target.value)}
                        />
                    </div>

                    <div className="form-item">
                        <button>Add Course</button>
                    </div>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user,
    courses: state.courseCollection.courses
})

export default connect(mapStateToProps, { addCourse, getCourses })(AddCourse)
