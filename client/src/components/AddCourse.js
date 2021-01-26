import React, { useState } from 'react'
import { addCourse } from '../actions/courseActions'
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';

const AddCourse = ({ addCourse }) => {
    const [name, setName] = useState('');
    const [courseCode, setCode] = useState('');
    const [creditValue, setValue] = useState('');
    const [grade, setGrade] = useState('');
    const [gradePoint, setGradePoint] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const course = { id: uuid(), name, courseCode, creditValue, grade, gradePoint }

        addCourse(course);
        setName('');
        setCode('');
        setValue('');
        setGrade('');
        setGradePoint('');
    }

    return (
        <>
            <h1>Add Course</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    required
                    placeholder="Course name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    required
                    placeholder="Course code"
                    value={courseCode}
                    onChange={(e) => setCode(e.target.value)}
                />

                <input
                    type="number"
                    step="0.1"
                    min="0"
                    required
                    placeholder="Credit value"
                    value={creditValue}
                    onChange={(e) => setValue(e.target.value)}
                />

                <input
                    type="text"
                    required
                    placeholder="Grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />

                <input
                    type="number"
                    step="0.1"
                    min="0"
                    required
                    placeholder="Grade point"
                    value={gradePoint}
                    onChange={(e) => setGradePoint(e.target.value)}
                />

                <button>Add Course</button>

            </form>
        </>
    )
}

export default connect(null, { addCourse })(AddCourse)
