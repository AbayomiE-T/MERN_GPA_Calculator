import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const CourseList = () => {
    const [courses, setCourses] = useState([
        {
            id: uuid(),
            name: 'Introduction to Computer Science',
            courseCode: 'COMP 1405',
            creditValue: 0.5,
            grade: 'A',
            gradePoint: 5.5
        },
        {
            id: uuid(),
            name: 'Introduction to Computer Science II',
            courseCode: 'COMP 1406',
            creditValue: 0.5,
            grade: 'B',
            gradePoint: 4.0
        },
        {
            id: uuid(),
            name: 'Elementary Calculus',
            courseCode: 'MATH 1007',
            creditValue: 0.5,
            grade: 'A-',
            gradePoint: 5.0
        },
        {
            id: uuid(),
            name: 'Discrete Structures',
            courseCode: 'COMP 1805',
            creditValue: 0.5,
            grade: 'B',
            gradePoint: 4.0
        }
    ])

    const courseList = courses.map(({ id, name, courseCode, creditValue, grade, gradePoint }) => {
        return (
            <div key={id}>
                <p>{name}</p>
                <p>{courseCode}</p>
                <p>{creditValue}</p>
                <p>{grade}</p>
                <p>{gradePoint}</p>
                <button onClick={() => {
                    setCourses(courses.filter((course) => {
                        return course.id !== id;
                    }));
                }} style={{ color: 'red' }}>&times;</button>
            </div>
        )
    })
    return (
        <div>
            <button onClick={() => {
                const name = prompt('Enter Course name');
                const courseCode = prompt('Enter Course code');
                const creditValue = prompt('Enter credit value');
                const grade = prompt('Enter grade');
                const gradePoint = prompt('Enter grade point')

                setCourses([...courses, {
                    id: uuid(),
                    name,
                    courseCode,
                    creditValue,
                    grade,
                    gradePoint
                }]);
            }}>Add Course</button>
            <div>
                {courseList}
            </div>
        </div>
    )
}

export default CourseList
