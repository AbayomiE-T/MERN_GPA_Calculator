import { GET_COURSES, ADD_COURSE, DELETE_COURSE, COURSES_LOADING, CLEAR_COURSES } from '../actions/types'

const initialState = {
    courses: [],
    loading: false
}

export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.data,
                loading: false
            };

        case ADD_COURSE:
            return {
                ...state,
                courses: [action.data, ...state.courses]

            }

        case DELETE_COURSE:
            return {
                ...state,
                courses: state.courses.filter((course) => {
                    return course._id !== action.data;
                })

            }

        case COURSES_LOADING:
            return {
                ...state,
                loading: true
            }

        case CLEAR_COURSES:
            return {
                ...state,
                courses: [],
            }

        default:
            return state;
    }
}