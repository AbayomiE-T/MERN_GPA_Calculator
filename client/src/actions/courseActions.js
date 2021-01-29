import axios from 'axios'

import { GET_COURSES, ADD_COURSE, DELETE_COURSE, COURSES_LOADING, CLEAR_COURSES } from './types'
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions'

export const getCourses = (id) => (dispatch) => {

    dispatch(setCoursesLoading());

    axios.get(`/api/courses/${id}`)
        .then((res) => {
            dispatch({
                type: GET_COURSES,
                data: res.data
            })
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addCourse = (course) => (dispatch, getState) => {

    axios.post('/api/courses', course, tokenConfig(getState))
        .then(res => {
            console.log('success', res.data);
            dispatch({
                type: ADD_COURSE,
                data: course
            })
        })
        .catch((err) => console.log('Error', err))
}

export const deleteCourse = (id) => (dispatch, getState) => {
    axios.delete(`/api/courses/${id}`, tokenConfig(getState))
        .then(res => {
            console.log('success', res.data);
            dispatch({
                type: DELETE_COURSE,
                data: id
            })
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
}

export const clearCourses = () => dispatch => {
    dispatch({
        type: CLEAR_COURSES
    })
}

export const setCoursesLoading = () => (dispatch) => {
    dispatch({
        type: COURSES_LOADING
    })
}