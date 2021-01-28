import axios from 'axios'

import { GET_COURSES, ADD_COURSE, DELETE_COURSE, COURSES_LOADING } from './types'

export const getCourses = () => (dispatch) => {

    dispatch(setCoursesLoading());

    axios.get('/api/courses')
        .then((res) => {
            dispatch({
                type: GET_COURSES,
                data: res.data
            })
        })
}

export const addCourse = (course) => (dispatch) => {

    axios.post('/api/courses', course)
        .then(res => {
            console.log('success', res.data);
            dispatch({
                type: ADD_COURSE,
                data: course
            })
        })
        .catch((err) => console.log('Error', err))
}

export const deleteCourse = (id) => (dispatch) => {
    axios.delete(`/api/courses/${id}`)
        .then(res => {
            console.log('success', res.data);
            dispatch({
                type: DELETE_COURSE,
                data: id
            })
        })
        .catch((err) => console.log(err))
}

export const setCoursesLoading = () => (dispatch) => {
    dispatch({
        type: COURSES_LOADING
    })
}