import { GET_COURSES, ADD_COURSE, DELETE_COURSE } from './types'

export const getCourses = () => (dispatch) => {
    dispatch({
        type: GET_COURSES
    })
}

export const addCourse = (course) => (dispatch) => {
    dispatch({
        type: ADD_COURSE,
        data: course
    })
}

export const deleteCourse = (id) => (dispatch) => {
    dispatch({
        type: DELETE_COURSE,
        data: id
    })
}