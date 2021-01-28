import React, { useEffect } from 'react';
import { getCourses, deleteCourse } from '../actions/courseActions'
import { connect } from 'react-redux';

const CourseList = ({ courses, getCourses, deleteCourse }) => {

    useEffect(() => {
        getCourses();
    }, [getCourses, deleteCourse])

    const courseList = courses.map(({ _id, name, courseCode, creditValue, grade, gradePoint }) => {
        return (
            <div key={_id}>
                <p>{name}</p>
                <p>{courseCode}</p>
                <p>{creditValue}</p>
                <p>{grade}</p>
                <p>{gradePoint}</p>
                <button onClick={() => {
                    deleteCourse(_id);
                }} style={{ color: 'red' }}>&times;</button>
            </div>
        )
    })
    return (
        <div>
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
