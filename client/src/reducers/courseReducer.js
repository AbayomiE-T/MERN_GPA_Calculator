import { GET_COURSES, ADD_COURSE, DELETE_COURSE } from '../actions/types'
import { v4 as uuid } from 'uuid';

const initialState = {
    courses: [
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
    ]
}

export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state
            };

        case ADD_COURSE:
            return {
                ...state,
                courses: [...state.courses, action.data]

            }

        case DELETE_COURSE:
            return {
                ...state,
                courses: state.courses.filter((course) => {
                    return course.id !== action.data;
                })

            }

        default:
            return state;
    }
}