import React, { useEffect } from 'react';
import { getCourses, deleteCourse } from '../actions/courseActions'
import { connect } from 'react-redux';

import AddCourse from './AddCourse'

const CourseList = ({ courses, getCourses, deleteCourse }) => {

    useEffect(() => {
        getCourses();
    }, [getCourses, deleteCourse])

    const courseList = courses.map(({ id, name, courseCode, creditValue, grade, gradePoint }) => {
        return (
            <div key={id}>
                <p>{name}</p>
                <p>{courseCode}</p>
                <p>{creditValue}</p>
                <p>{grade}</p>
                <p>{gradePoint}</p>
                <button onClick={() => {
                    deleteCourse(id);
                    console.log('hey');
                }} style={{ color: 'red' }}>&times;</button>
            </div>
        )
    })
    return (
        <div>
            <AddCourse />
            <div>
                {courseList}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    courses: state.courseCollection.courses
})

export default connect(mapStateToProps, { getCourses, deleteCourse })(CourseList)
