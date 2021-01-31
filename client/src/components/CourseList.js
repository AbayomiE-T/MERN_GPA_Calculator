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
            <tr key={_id}>
                <td>{name}</td>
                <td>{courseCode}</td>
                <td>{creditValue}</td>
                <td>{grade}</td>
                <td>{gradePoint}</td>
                <td><button className="btn btn-danger btn-sm" onClick={() => {
                    deleteCourse(_id);
                }}>Delete</button></td>
            </tr>
        )
    }) : (<p> Loading courses</p>)
    return (
        <>
            <Navbar styles="navbar-min-width" />
            <p style={{ marginTop: '60px' }}>Take a look at your course history here.</p>
            <table className="table table-dark" style={{ marginTop: "60px" }}>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Course Code</th>
                        <th>Credit Value</th>
                        <th>Grade</th>
                        <th>Quality Points</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {courseList}
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = state => ({
    courses: state.courseCollection.courses,
    isLoading: state.courseCollection.loading,
    user: state.auth.user
})

export default connect(mapStateToProps, { getCourses, deleteCourse })(CourseList)
