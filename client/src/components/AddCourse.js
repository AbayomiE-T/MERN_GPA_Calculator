import React, { useState } from 'react'
import { addCourse } from '../actions/courseActions'
import { connect } from 'react-redux';

import Navbar from './Navbar';

const AddCourse = ({ addCourse, user }) => {
    const [name, setName] = useState('');
    const [courseCode, setCode] = useState('');
    const [creditValue, setValue] = useState('');
    const [grade, setGrade] = useState('');
    const [gradePoint, setGradePoint] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const course = { name, courseCode, creditValue, grade, gradePoint, user_id: user._id }

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
            <h1>Add Course</h1>
            <div className="container d-flex align-items-center flex-column">
                <div className="gpa-wrapper">
                    <span className="gpa" >0</span>
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
    user: state.auth.user
})

export default connect(mapStateToProps, { addCourse })(AddCourse)
