import { GET_ERRORS, CLEAR_ERRORS } from './types'

//Return errors

export const returnErrors = (msg, status, id = null) => {
    return ({
        type: GET_ERRORS,
        payload: { msg, status, id }
    })
}

export const clearErrors = () => dispatch => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
