import { GET_COURSES, ADD_COURSE, DELETE_COURSE, COURSES_LOADING } from './types'

export const getCourses = () => (dispatch) => {

    dispatch(setCoursesLoading());

    fetch('/api/courses')
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: GET_COURSES,
                data
            })
        })
}

export const addCourse = (course) => (dispatch) => {

    fetch('/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            dispatch({
                type: ADD_COURSE,
                data: course
            })
        })
        .catch((err) => console.log('Error', err))
}

export const deleteCourse = (id) => (dispatch) => {
    fetch(`/api/courses/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            dispatch({
                type: DELETE_COURSE,
                data: id
            })
        })
        .catch((err) => console.log('Error', err))
}

export const setCoursesLoading = () => (dispatch) => {
    dispatch({
        type: COURSES_LOADING
    })
}