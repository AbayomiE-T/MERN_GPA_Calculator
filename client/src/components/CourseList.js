import React, { useEffect } from 'react';
import { getCourses, deleteCourse } from '../actions/courseActions'
import { connect } from 'react-redux';

import Navbar from './Navbar';

const CourseList = ({ courses, getCourses, deleteCourse, user }) => {

    useEffect(() => {
        if (user) {
            getCourses(user._id);
        }

    }, [getCourses, deleteCourse, user])

    const courseList = courses ? courses.map(({ _id, name, courseCode, creditValue, grade, gradePoint }) => {
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
    }) : (<p> Loading courses</p>)
    return (
        <div>
            <Navbar />
            <div>
                {courseList}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    courses: state.courseCollection.courses,
    isLoading: state.courseCollection.loading,
    user: state.auth.user
})

export default connect(mapStateToProps, { getCourses, deleteCourse })(CourseList)
